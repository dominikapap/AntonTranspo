from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(max_length = 50, widget= forms.TextInput(attrs={'placeholder':'Your name'}))
    email_address = forms.EmailField(max_length = 150, widget= forms.EmailInput(attrs={'placeholder':'email@example.com'}))
    message = forms.CharField(widget = forms.Textarea(attrs={'placeholder':'Your message goes here'}), max_length = 2000)
