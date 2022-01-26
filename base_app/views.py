from django.conf import settings
from django.core.mail import send_mail,BadHeaderError
from django.shortcuts import render
from .forms import ContactForm
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request,'base_app/index.html')

def about(request):
    return render(request,'base_app/about.html')

def calc(request):
    return render(request,'base_app/calc.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = "New Contact Message"
            body = {
            'name': form.cleaned_data['name'],
            'email': form.cleaned_data['email_address'],
            'message': form.cleaned_data['message'],}
            message= '\n'.join(body.values())
            thank= True

            try:
                send_mail(subject, message, 'hotarubiq@gmail.com',['hotarubiq@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found')
            return render(request, "base_app/contact.html")

    form = ContactForm
    context={'form':form}
    return render (request, "base_app/contact.html", context)

def thank_you(request):
    return render(request,'base_app/thank_you.html')

def car_fleet(request):
    return render(request,'base_app/car_fleet.html')

def base(request):
    return render(request,'base_app/base.html')
