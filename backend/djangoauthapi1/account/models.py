from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

#  Custom User Manager
class UserManager(BaseUserManager):
  def create_user(self, email, name, tc, password=None, password2=None):
      """
      Creates and saves a User with the given email, name, tc and password.
      """
      if not email:
          raise ValueError('User must have an email address')

      user = self.model(
          email=self.normalize_email(email),
          name=name,
          tc=tc,
      )

      user.set_password(password)
      user.save(using=self._db)
      return user

  def create_superuser(self, email, name, tc, password=None):
      """
      Creates and saves a superuser with the given email, name, tc and password.
      """
      user = self.create_user(
          email,
          password=password,
          name=name,
          tc=tc,
      )
      user.is_admin = True
      user.save(using=self._db)
      return user

#  Custom User Model
class User(AbstractBaseUser):
  email = models.EmailField(
      verbose_name='Email',
      max_length=255,
      unique=True,
  )
  name = models.CharField(max_length=200)
  tc = models.BooleanField()
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name', 'tc']

  def __str__(self):
      return self.email

  def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      # Simplest possible answer: Yes, always
      return self.is_admin

  def has_module_perms(self, app_label):
      "Does the user have permissions to view the app `app_label`?"
      # Simplest possible answer: Yes, always
      return True

  @property
  def is_staff(self):
      "Is the user a member of staff?"
      # Simplest possible answer: All admins are staff
      return self.is_admin
def upload_path(instance, filname):
    return '/'.join(['covers', str(instance.title), filname])

def upload_path(instance, filname):
    return '/'.join(['covers', str(instance.title), filname])

class Category(models.Model):
    Category_Name = models.CharField(max_length=100)
    Category_Image= models.ImageField(upload_to='uploads/',
        height_field=None, width_field=None, max_length=100,blank=True, null=True)
    Category_Price = models.DecimalField(max_digits=15,decimal_places=2,default=99.99)
    def get_image(self):
        if self.image: 
            return 'http://192.168.0.102' + self.image.url
        return ''
    

class Product(models.Model):
	prod_title=models.CharField(max_length=120) 
	prod_price=models.DecimalField(max_digits=15,decimal_places=2,default=99.99)
	prod_quantity = models.IntegerField()
	prod_color = models.CharField(max_length=120)
	prod_image = models.ImageField(upload_to='uploads/', blank=True, null=True)
	prod_availability = models.BooleanField(default=True)
	prod_description = models.CharField(max_length=120) 
	category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

	def get_image(self):
		if self.image: 
			return 'http://192.168.0.102' + self.image.url
		return ''
	prod_title=models.CharField(max_length=120) 
	prod_price=models.DecimalField(max_digits=15,decimal_places=2,default=99.99)
	prod_quantity = models.IntegerField()
	prod_color = models.CharField(max_length=120)
	prod_image = models.ImageField(upload_to='uploads/', blank=True, null=True)
	prod_availability = models.BooleanField(default=True)
	prod_description = models.CharField(max_length=120) 
	category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

	def get_image(self):
		if self.image: 
			return 'http://127.0.0.1:8000' + self.image.url
		return ''

class Payment(models.Model):
	payment_detail = models.CharField(max_length=120)
	user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

class Cart(models.Model):
	cart_no_of_items = models.IntegerField()
	cart_total= models.IntegerField()
	product = models.ManyToManyField(Product)
	category = models.ManyToManyField(Category)
	user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

class Order(models.Model):
	order_delivery_address = models.CharField(max_length=120)
	order_delivery_time= models.DateTimeField()
	order_notes = models.CharField(max_length=120)
	product = models.ManyToManyField(Product)
	category = models.ManyToManyField(Category)
	user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

	

class UserCompetitions(models.Model):
	User_FirstName =models.CharField(max_length=120)
	User_LastName =models.CharField(max_length=120)
	User_Street_Address = models.CharField(max_length=120)
	User_Address_Line = models.CharField(max_length=120)
	User_City = models.CharField(max_length=120)
	User_State = models.CharField(max_length=120)
	User_Zip = models.CharField(max_length=120)
	User_Country = models.CharField(max_length=120)
	User_email = models.EmailField(max_length=120)
	User_phone  = models.CharField(max_length=120)
	User_Location = models.CharField(max_length=120)
	User_consent = models.BooleanField()
	user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

class News(models.Model):
	News_title = models.CharField(max_length=120)
	News_type =  models.CharField(max_length=120)
	News_time = models.CharField(max_length=120)
	News_date = models.CharField(max_length=120)
	News_image =  models.ImageField(upload_to='uploads/', blank=True, null=True)
	News_detail = models.CharField(max_length=500)
	
	def get_image(self):
		if self.image: 
			return 'http://192.168.0.102:8000' + self.image.url
		return ''


class Competitions(models.Model):
    cmp_title = models.CharField(max_length=120)
    cmp_image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    cmp_deadline = models.CharField(max_length=120)
    
    def get_image(self):
        if self.image:
            return 'http://192.168.0.102:8000' + self.image.url
        return ''
class NewsLetter(models.Model):
	User_Name =models.CharField(max_length=120)
	User_LastName = models.CharField(max_length=120)
	User_email = models.EmailField(max_length=120)
	User_agreement = models.BooleanField()
	user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        null=True, 
        blank=True,
    )

class Enquiry(models.Model):
	User_Name =models.CharField(max_length=120)
	User_LastName = models.CharField(max_length=120, null=True, blank=True)
	User_email = models.EmailField(max_length=120)
	User_phone = models.CharField(max_length=120)
	User_enquiry = models.CharField(max_length=150)
	User_Consent =  models.BooleanField()
	user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        null=True, 
        blank= True,
    )
    

class Detail(models.Model):
    User_Id = models.CharField(max_length=120, null= True, blank=True)
    Cart_Id = models.CharField(max_length=120,null= True, blank=True)
    Product_Id = models.CharField(max_length=120,null= True, blank=True)
    address = models.CharField(max_length=120,null= True, blank=True)
    product_quantity = models.CharField(max_length=120,null= True, blank=True)
    total_bill = models.CharField(max_length=120, null=True, blank=True)

