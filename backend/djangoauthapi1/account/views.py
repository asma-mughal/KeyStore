from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics, permissions
from account.serializers import SendPasswordResetEmailSerializer, UserChangePasswordSerializer, UserLoginSerializer, UserPasswordResetSerializer, UserProfileSerializer, UserRegistrationSerializer
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from .models import Category, Product, Payment, Cart, Order, UserCompetitions, News, Competitions, NewsLetter, Enquiry, Detail 
from .serializers import CategorySerializer, ProductSerializer,PaymentSerializer, CartSerializer, OrderSerializer, UserCompetitionSerializer, NewsSerializer, CompetitionSerializer, NewsLetterSerializer , EnquirySerializer, DetailSerializer
# Generate Token Manually
def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }

class UserRegistrationView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserRegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token = get_tokens_for_user(user)
    return Response({'token':token, 'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)

class UserLoginView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.data.get('email')
    password = serializer.data.get('password')
    user = authenticate(email=email, password=password)
    if user is not None:
      token = get_tokens_for_user(user)
      return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
    else:
      return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)

class UserProfileView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self, request, format=None):
    serializer = UserProfileSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)

class UserChangePasswordView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def post(self, request, format=None):
    serializer = UserChangePasswordSerializer(data=request.data, context={'user':request.user})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Changed Successfully'}, status=status.HTTP_200_OK)

class SendPasswordResetEmailView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = SendPasswordResetEmailSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset link send. Please check your Email'}, status=status.HTTP_200_OK)

class UserPasswordResetView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, uid, token, format=None):
    serializer = UserPasswordResetSerializer(data=request.data, context={'uid':uid, 'token':token})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset Successfully'}, status=status.HTTP_200_OK)


#Categories
class CategoryListCreateApiView(generics.ListCreateAPIView):
	queryset = Category.objects.all()
	serializer_class= CategorySerializer

	def perform_create(self, serializer):
		Category_Name=serializer.validated_data.get('name')
		Category_Image = serializer.validated_data.get('image')
		Category_Price = serializer.validated_data.get('price')
		serializer.save()


class CategoryDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset = Category.objects.all()
	serializer_class= CategorySerializer 

class CategoryUpdateApiView(generics.UpdateAPIView):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer
	look_up = 'pk'

	def perform_update(self, serializer):
		instance = serializer.save()

class CategoryDeleteView(generics.DestroyAPIView):
	queryset= Category.objects.all()
	serializer_class = CategorySerializer
	look_up= 'pk'

	def perform_delete(self, instance):
		super().perform_delete(instance)

class CategoryListApiView(generics.ListAPIView):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer

#PRODUCTS

class ProductListCreateApiView(generics.ListCreateAPIView):
	queryset = Product.objects.all()
	serializer_class= ProductSerializer

	def perform_create(self, serializer):
		prod_title=serializer.validated_data.get('prod_title') 
		prod_price=serializer.validated_data.get('price')
		prod_quantity = serializer.validated_data.get('quantity')
		prod_color = serializer.validated_data.get('color')
		prod_image = serializer.validated_data.get('image')
		prod_availability = serializer.validated_data.get('availability')
		prod_description =serializer.validated_data.get('description') 
		serializer.save()


	
class ProductDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset = Product.objects.all()
	serializer_class= ProductSerializer 


class ProductUpdateApiView(generics.UpdateAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer
	look_up = 'pk'

	def perform_update(self, serializer):
		instance = serializer.save()

class ProductDeleteView(generics.DestroyAPIView):
	queryset= Product.objects.all()
	serializer_class = ProductSerializer
	look_up= 'pk'

	def perform_delete(self, instance):
		super().perform_delete(instance)

class ProductListApiView(generics.ListAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer


#PAYMENT

class PaymentListCreateApiView(generics.ListCreateAPIView):
	queryset = Payment.objects.all()
	serializer_class= PaymentSerializer

	def perform_create(self, serializer):
		payment_detail=serializer.validated_data.get('payment_detail') 
		serializer.save()
class PaymentDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset = Payment.objects.all()
	serializer_class= PaymentSerializer 


class PaymentUpdateApiView(generics.UpdateAPIView):
	queryset = Payment.objects.all()
	serializer_class = PaymentSerializer
	look_up = 'pk'

	def perform_update(self, serializer):
		instance = serializer.save()

#Cart
class CartListCreateApiView(generics.ListCreateAPIView):
	queryset = Cart.objects.all()
	serializer_class= CartSerializer

	def perform_create(self, serializer):
		cart_no_of_items=serializer.validated_data.get('cart_no_of_items')
		cart_total=serializer.validated_data.get('cart_total')
		serializer.save()


class CartDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset = Cart.objects.all()
	serializer_class= CartSerializer 

class CartUpdateApiView(generics.UpdateAPIView):
	queryset = Cart.objects.all()
	serializer_class = CartSerializer
	look_up = 'pk'

	def perform_update(self, serializer):
		instance = serializer.save()

class CartDeleteView(generics.DestroyAPIView):
	queryset= Cart.objects.all()
	serializer_class = CartSerializer
	look_up= 'pk'

	def perform_delete(self, instance):
		super().perform_delete(instance)

class CartListApiView(generics.ListAPIView):
	queryset = Cart.objects.all()
	serializer_class = CartSerializer

#Order
class ListCreateApiView(generics.ListCreateAPIView):
	queryset = Order.objects.all()
	serializer_class= OrderSerializer

	def perform_create(self, serializer):
		order_delivery_address=serializer.validated_data.get('order_delivery_address')
		order_delivery_time=serializer.validated_data.get('order_delivery_time')
		order_notes=serializer.validated_data.get('order_notes')
		serializer.save()


class OrderDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset = Order.objects.all()
	serializer_class= OrderSerializer 

class OrderUpdateApiView(generics.UpdateAPIView):
	queryset = Order.objects.all()
	serializer_class = OrderSerializer
	look_up = 'pk'

	def perform_update(self, serializer):
		instance = serializer.save()

class OrderDeleteView(generics.DestroyAPIView):
	queryset= Order.objects.all()
	serializer_class = OrderSerializer
	look_up= 'pk'

	def perform_delete(self, instance):
		super().perform_delete(instance)

class OrderListApiView(generics.ListAPIView):
	queryset = Order.objects.all()
	serializer_class = OrderSerializer

#NEWSLETTER

#Enquiry
#Competitions
class UserCompetitionListCreateApiView(generics.ListCreateAPIView):
	queryset = UserCompetitions.objects.all()
	serializer_class= UserCompetitionSerializer

	def perform_create(self, serializer):
		User_FirstName=serializer.validated_data.get('User_FirstName')
		User_LastName =serializer.validated_data.get('User_LastName')
		User_Street_Address = serializer.validated_data.get('User_Street_Address')
		User_Address_Line = serializer.validated_data.get('User_Address_Line')
		User_City = serializer.validated_data.get('User_City')
		User_State = serializer.validated_data.get('User_State')
		User_Zip = serializer.validated_data.get('User_Zip')
		User_Country = serializer.validated_data.get('User_Country')
		User_email=serializer.validated_data.get('User_email')
		User_phone  = serializer.validated_data.get('User_phone')
		User_Location = serializer.validated_data.get('User_Location')
		User_consent= serializer.validated_data.get('User_Consent')
		serializer.save()

class UserCompetitionDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset = UserCompetitions.objects.all()
	serializer_class= UserCompetitionSerializer



#NEWS
class NewsListCreateApiView(generics.ListCreateAPIView):
	queryset = News.objects.all()
	serializer_class= NewsSerializer

	def perform_create(self, serializer):
		News_title=serializer.validated_data.get('News_title')
		News_type=serializer.validated_data.get('News_type')
		News_time=serializer.validated_data.get('News_time')
		News_date = serializer.validated_data.get('News_date')
		News_image= serializer.validated_data.get('News_image')
		News_detail = serializer.validated_data.get('News_detail')
		serializer.save()


class NewsDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset = News.objects.all()
	serializer_class= NewsSerializer 

class NewsUpdateApiView(generics.UpdateAPIView):
	queryset = News.objects.all()
	serializer_class = NewsSerializer
	look_up = 'pk'

	def perform_update(self, serializer):
		instance = serializer.save()

class NewsDeleteView(generics.DestroyAPIView):
	queryset= News.objects.all()
	serializer_class = NewsSerializer
	look_up= 'pk'

	def perform_delete(self, instance):
		super().perform_delete(instance)

class NewsListApiView(generics.ListAPIView):
	queryset = News.objects.all()
	serializer_class = NewsSerializer



#COMPETITIONS

class CompetitionDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset = Competitions.objects.all()
	serializer_class= CompetitionSerializer 

class CompetitionUpdateApiView(generics.UpdateAPIView):
	queryset = Competitions.objects.all()
	serializer_class = CompetitionSerializer
	look_up = 'pk'

	def perform_update(self, serializer):
		instance = serializer.save()

class CompetitionDeleteView(generics.DestroyAPIView):
	queryset= Competitions.objects.all()
	serializer_class = CompetitionSerializer
	look_up= 'pk'

	def perform_delete(self, instance):
		super().perform_delete(instance)

class CompetitionListApiView(generics.ListAPIView):
	queryset = Competitions.objects.all()
	serializer_class = CompetitionSerializer

class CompetitionListCreateApiView(generics.ListCreateAPIView):
  queryset = Competitions.objects.all()
  serializer_class= CompetitionSerializer
  def perform_create(self, serializer):
    cmp_title =serializer.validated_data.get('cmp_title') 
    cmp_image=serializer.validated_data.get('cmp_image')
    cmp_deadline =serializer.validated_data.get('cmp_deadline')
    serializer.save() 

class NewsletterListCreateApiView(generics.ListCreateAPIView):
	queryset = NewsLetter.objects.all()
	serializer_class= NewsLetterSerializer

	def perform_create(self, serializer):
		User_Name=serializer.validated_data.get('User_Name')
		User_LastName=serializer.validated_data.get('User_LastName')
		User_email=serializer.validated_data.get('User_email') 
		User_agreement = serializer.validated_data.get('User_agreement')
		serializer.save()

class NewsletterDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset = NewsLetter.objects.all()
	serializer_class= NewsLetterSerializer


#Enquiry

class EnquiryListCreateApiView(generics.ListCreateAPIView):
	queryset = Enquiry.objects.all()
	serializer_class= EnquirySerializer

	def perform_create(self, serializer):
		User_Name=serializer.validated_data.get('User_Name')
		User_email=serializer.validated_data.get('User_email') 
		User_phone = serializer.validated_data.get('User_phone')
		User_enquiry= serializer.validated_data.get('User_enquiry')
		User_Consent= serializer.validated_data.get('User_Consent')
		serializer.save()

class EnquiryDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset = Enquiry.objects.all()
	serializer_class= EnquirySerializer



#Detail
class DetailListCreateApiView(generics.ListCreateAPIView):
	queryset = Detail.objects.all()
	serializer_class= DetailSerializer

	def perform_create(self, serializer):
		User_Id=serializer.validated_data.get('User_Id')
		Cart_Id=serializer.validated_data.get('Cart_Id')
		Product_Id= serializer.validated_data.get('Product_Id')
		address = serializer.validated_data.get('address')
		serializer.save()


class DetDetailApiView(generics.RetrieveAPIView): #this should tell us about only one product, what feild you want to search for
	queryset =Detail.objects.all()
	serializer_class= DetailSerializer 

class DetailUpdateApiView(generics.UpdateAPIView):
	queryset = Detail.objects.all()
	serializer_class = DetailSerializer
	look_up = 'pk'

	def perform_update(self, serializer):
		instance = serializer.save()

class DetailDeleteView(generics.DestroyAPIView):
	queryset= Detail.objects.all()
	serializer_class = DetailSerializer
	look_up= 'pk'

	def perform_delete(self, instance):
		super().perform_delete(instance)

class DetailListApiView(generics.ListAPIView):
	queryset = Detail.objects.all()
	serializer_class = DetailSerializer