from django import forms
from .models import Profile, Game


class ProfileModelForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['email', 'age', 'password']


class GameModelForm(forms.ModelForm):
    class Meta:
        model = Game
        fields = "__all__"


class GameEditForm(GameModelForm):
    pass


class GameDeleteForm(GameModelForm):
    class Meta:
        model = Game
        fields = "__all__"
        widgets = {
            'title': forms.TextInput(
                attrs={
                    'readonly': 'readonly'
                }
            ),
            'rating': forms.TextInput(
                attrs={
                    'readonly': 'readonly'
                }
            ),
            'max_level': forms.TextInput(
                attrs={
                    'readonly': 'readonly'
                }
            ),
            'image_url': forms.TextInput(
                attrs={
                    'readonly': 'readonly'
                }
            ),
            'summary': forms.TextInput(
                attrs={
                    'readonly': 'readonly'
                }
            ),

        }


class ProfileEditModel(ProfileModelForm):
    class Meta:
        model = Profile
        fields = "__all__"


class ProfileDeleteForm(ProfileModelForm):
    class Meta:
        model = Profile
        fields = '__all__'

    def save(self, commit=True):
        if self.instance:
            self.instance.delete()
        return self.instance
