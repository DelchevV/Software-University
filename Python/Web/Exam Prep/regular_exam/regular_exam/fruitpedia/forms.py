from django import forms
from .models import Profile, FruitModel


class ProfileModelForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'


class ProfileEditModelForm(ProfileModelForm):
    class Meta:
        model = Profile
        fields = ['first_name', 'last_name', 'img_url', 'age']


class PofileDeleteModelForm(ProfileModelForm):
    def save(self, commit=True):
        if self.instance:
            self.instance.delete()

        return self.instance


class ProfileAddModelForm(ProfileModelForm):
    class Meta:
        model = Profile
        fields = [
            'first_name', 'last_name', "email", 'password'
        ]
        widgets = {
            'first_name': forms.TextInput(
                attrs={
                    'placeholder': 'First Name',
                }
            ),
            'last_name': forms.TextInput(
                attrs={
                    'placeholder': 'Last Name',

                }
            ),
            'email': forms.TextInput(
                attrs={
                    'placeholder': 'Email',

                }
            ),
            'password': forms.PasswordInput(
                attrs={
                    'placeholder': 'Password',

                }
            ),
        }
        labels = {
            'first_name': '',
            'last_name': '',
            'email': '',
            'password': ''

        }


class FruitModelForm(forms.ModelForm):
    class Meta:
        model = FruitModel
        fields = '__all__'


class FruitEditModel(FruitModelForm):
    pass


class FruitAddModelForm(forms.ModelForm):
    class Meta:
        model = FruitModel
        fields = "__all__"
        widgets = {
            'name': forms.TextInput(
                attrs={
                    'placeholder': 'Fruit Name'
                }
            ),
            'img_url': forms.TextInput(
                attrs={
                    'placeholder': 'Fruit Image URL'
                }
            ),
            'description': forms.Textarea(
                attrs={
                    'placeholder': 'Fruit Description'
                }
            ),
            'nutrition': forms.Textarea(
                attrs={
                    'placeholder': 'Nutrition Info'
                }
            )
        }
        labels = {
            'name': '',
            'img_url': '',
            'description': '',
            'nutrition': ''
        }


class FruitDeleteModel(FruitModelForm):
    class Meta:
        model = FruitModel
        fields = '__all__'
        widgets = {
            'name': forms.TextInput(
                attrs={
                    'readonly': 'readonly'
                }
            ),
            'image_url': forms.TextInput(
                attrs={
                    'readonly': 'readonly'
                }
            ),
            'description': forms.Textarea(
                attrs={
                    'readonly': 'readonly'
                }
            ),
            'nutrition': forms.Textarea(
                attrs={
                    'readonly': 'readonly'
                }
            ),
        }
