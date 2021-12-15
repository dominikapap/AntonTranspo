from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'base_app/index.html')

def about(request):
    return render(request,'base_app/about.html')

def calc(request):
    return render(request,'base_app/calc.html')

def contact(request):
    return render(request,'base_app/contact.html')

def car_fleet(request):
    return render(request,'base_app/car_fleet.html')

def base(request):
    return render(request,'base_app/base.html')
