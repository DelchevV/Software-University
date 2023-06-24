from django.db import models
from django.core.validators import MinLengthValidator
from django.core.exceptions import ValidationError


# Create your models here.

def start_with_letter_validator(value):
    if not value[0].isalpha():
        raise ValidationError('Your name must start with a letter!')


def consist_only_letter(value):
    if not value.isalpha():
        raise ValidationError('Fruit name should contain only letters!')


class Profile(models.Model):
    first_name = models.CharField(
        blank=False,
        null=False,
        max_length=25,
        validators=[MinLengthValidator(2), start_with_letter_validator]
    )
    last_name = models.CharField(
        blank=False,
        null=False,
        max_length=35,
        validators=[MinLengthValidator(1), start_with_letter_validator]
    )
    email = models.EmailField(
        blank=False,
        null=False, max_length=40
    )
    password = models.CharField(
        blank=False,
        null=False,
        max_length=20,
        validators=[MinLengthValidator(8)]
    )
    img_url = models.URLField(
        blank=True,
        null=True,
    )
    age = models.IntegerField(
        default=18
    )


class FruitModel(models.Model):
    name = models.CharField(
        null=False,
        blank=False,
        max_length=30,
        validators=[MinLengthValidator(2), consist_only_letter]
    )
    img_url = models.URLField(
        blank=False,
        null=False
    )
    description = models.TextField(
        null=False,
        blank=False
    )
    nutrition = models.TextField(
        blank=True,
        null=True
    )
