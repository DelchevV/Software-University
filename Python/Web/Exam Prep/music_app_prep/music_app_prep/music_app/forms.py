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
        widgets = {
            'album_name': forms.TextInput(
                attrs={
                    'placeholder': "Album Name"
                }
            ),
            'artist': forms.TextInput(
                attrs={
                    "placeholder": "Artist"
                }
            ),
            'description': forms.TextInput(
                attrs={
                    'placeholder': "Description"
                }
            ),
            'image_url': forms.URLInput(
                attrs={
                    'placeholder': 'Image URL'
                }
            ),
            'price': forms.NumberInput(
                attrs={
                    'placeholder': 'Price'
                }
            )
        }


class EditAlbumModelForm(AlbumModelForm):
    pass


class DeleteAlbumModelForm(AlbumModelForm):
    # def __int__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     self.set_disabled_field()
    #
    # def set_disabled_field(self):
    #     for field in self.fields.values():
    #         field.widget.attrs['readonly'] = 'readonly'

    class Meta:
        model = Album
        fields = "__all__"
        widgets = {
            'album_name': forms.TextInput(
                attrs={
                    'readonly': "readonly"
                }
            ),
            'artist': forms.TextInput(
                attrs={
                    'readonly': "readonly"
                }
            ),
            'description': forms.TextInput(
                attrs={
                    'readonly': "readonly"
                }
            ),
            'image_url': forms.URLInput(
                attrs={
                    'readonly': "readonly"
                }
            ),
            'price': forms.NumberInput(
                attrs={
                    'readonly': "readonly"
                }
            )
        }
