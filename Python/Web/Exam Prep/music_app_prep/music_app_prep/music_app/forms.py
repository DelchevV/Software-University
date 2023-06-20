from django import forms
from .models import Profile, Album


class ProfileModelForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = "__all__"


class AlbumModelForm(forms.ModelForm):
    class Meta:
        model = Album
        fields = "__all__"
