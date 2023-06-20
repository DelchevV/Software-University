from django import forms
from django.core.validators import MinLengthValidator, MaxLengthValidator
from django.core.exceptions import ValidationError


def min_value_validator(value):
    if len(value) < 2:
        raise ValidationError("Value cannot be 0!")


def max_value_validator(value):
    if len(value) > 100:
        raise ValidationError('Value cannot exceed 100!')


class TodoForm(forms.Form):
    todo = forms.CharField(validators=[
        # MinLengthValidator(2),
        # MaxLengthValidator(100)
        min_value_validator,
        max_value_validator
    ])
    is_done = forms.BooleanField()
