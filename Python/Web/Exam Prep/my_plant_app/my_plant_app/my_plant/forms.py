from django import forms
from .models import Profile, Plant


class ProfileModelForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = [
            'username', 'first_name', 'last_name'
        ]


class PlantModelForm(forms.ModelForm):
    class Meta:
        model = Plant
        fields = "__all__"


class PlantEditModelForm(PlantModelForm):
    pass


class PlantDeleteModelForm(PlantModelForm):
    class Meta:
        model = Plant
        fields = "__all__"
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

            'description': forms.TextInput(
                attrs={
                    'readonly': 'readonly'
                }
            ),
            'price': forms.TextInput(
                attrs={
                    'readonly': 'readonly'
                }
            ),
        }


class ProfileEditModelForm(ProfileModelForm):
    class Meta:
        model = Profile
        fields = '__all__'


class ProfileDeleteModelForm(ProfileModelForm):
    class Meta:
        model = Profile
        fields = []
