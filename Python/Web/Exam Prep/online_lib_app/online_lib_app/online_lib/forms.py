from django import forms
from .models import Profile, Book


class ProfileModelForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'


class ProfileEditForm(ProfileModelForm):
    pass


class ProfileDeleteForm(ProfileModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__set_readonly_fields()

    def save(self, commit=True):
        if self.instance:
            self.instance.delete()
        return self.instance

    def __set_readonly_fields(self):
        for field in self.fields.values():
            field.widget.attrs['disabled'] = 'disabled'


class BookModelForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = '__all__'


class BookEditForm(BookModelForm):
    pass
