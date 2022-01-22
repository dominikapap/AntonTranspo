from django.urls import path
from . import views

app_name = 'base_app'


urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name = 'about'),
    path('cost_calculator/', views.calc, name ='calc'),
    path('contact/', views.contact, name = 'contact'),
    path('car_fleet/', views.car_fleet, name = 'car_fleet'),
    path('thank_you/', views.thank_you, name = 'thank_you'),
    path('base/', views.base, name ='base'),
    ]
