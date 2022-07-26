from django.urls import path
from . import views
from account.views import SendPasswordResetEmailView, UserChangePasswordView, UserLoginView, UserProfileView, UserRegistrationView, UserPasswordResetView
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    #Categories
path('category', views.CategoryListCreateApiView.as_view()),
path('category/<int:pk>/' , views.CategoryDetailApiView.as_view()), #api/products/1.
path('category/<int:pk>/update/' , views.CategoryUpdateApiView.as_view()),
path('category/<int:pk>/destroy/' , views.CategoryDeleteView.as_view()),
path('category/detail', views.CategoryListApiView.as_view()), 
#PRODUCTS
path('product', views.ProductListCreateApiView.as_view()),
path('product/<int:pk>/' , views.ProductDetailApiView.as_view()),
path('product/<int:pk>/update/' , views.ProductUpdateApiView.as_view()),
path('product/<int:pk>/destroy/' , views.ProductDeleteView.as_view()),
path('product/detail', views.ProductListApiView.as_view()), 
#Payment
    path('payment', views.PaymentListCreateApiView.as_view()),
     #Cart
   path('cart', views.CartListCreateApiView.as_view()),
   path('cart/<int:pk>/' , views.CartDetailApiView.as_view()),
   path('cart/<int:pk>/update/' , views.CartUpdateApiView.as_view()),
   path('cart/<int:pk>/destroy/' , views.CartDeleteView.as_view()),
   path('cart/detail', views.CartListApiView.as_view()), 

   #Order
   path('order', views.ListCreateApiView.as_view()),
   path('order/<int:pk>/' , views.OrderDetailApiView.as_view()),
   path('order/<int:pk>/update/' , views.OrderUpdateApiView.as_view()),
   path('order/<int:pk>/destroy/' , views.OrderDeleteView.as_view()),
   path('order/detail', views.OrderListApiView.as_view()), 

   #UserCompetitions
   
   path('comp', views.UserCompetitionListCreateApiView.as_view()),
   path('comp/<int:pk>/' , views.UserCompetitionDetailApiView.as_view()),
   #NEWS
   path('news', views.NewsListCreateApiView.as_view()),
   path('news/<int:pk>/' , views.NewsDetailApiView.as_view()),
   path('news/<int:pk>/update/' , views.NewsUpdateApiView.as_view()),
   path('news/<int:pk>/destroy/' , views.NewsDeleteView.as_view()),
   path('news/detail', views.NewsListApiView.as_view()),
   #Competitions
   
   path('cmp', views.CompetitionListCreateApiView.as_view()),
   path('cmp/<int:pk>/' , views.CompetitionDetailApiView.as_view()),
   path('cmp/<int:pk>/update/' , views.CompetitionUpdateApiView.as_view()),
   path('cmp/<int:pk>/destroy/' , views.CompetitionDeleteView.as_view()),
   path('cmp/detail', views.CompetitionListApiView.as_view()),
   path('newsletter', views.NewsletterListCreateApiView.as_view()),
   path('newsletter/<int:pk>/' , views.NewsletterDetailApiView.as_view()),
   #ENQUIRY
   path('enquiry', views.EnquiryListCreateApiView.as_view()),
   path('enquiry/<int:pk>/' , views.EnquiryDetailApiView.as_view()),
   #Detail
   
   path('detail', views.DetailListCreateApiView.as_view()),
   path('detail/<int:pk>/' , views.DetDetailApiView.as_view()),
   path('detail/<int:pk>/update/' , views.DetailUpdateApiView.as_view()),
   path('detail/<int:pk>/destroy/' , views.DetailDeleteView.as_view()),
   path('detail/detail', views.DetailListApiView.as_view()),

]

