from django.db import models
from django.core.validators import MinLengthValidator
from django.core.exceptions import ValidationError


# Create your models here.
def is_capital_validator(value):
    if not value[0].isupper():
        raise ValidationError('Your name must start with a capital letter!')


def is_only_letter_validator(value):
    if not value.isalpha():
        raise ValidationError("Plant name should contain only letters!")


class Profile(models.Model):
    username = models.CharField(
        null=False,
        blank=False,
        max_length=10,
        validators=[MinLengthValidator(2)]
    )
    first_name = models.CharField(
        null=False,
        blank=False,
        max_length=20,
        validators=[is_capital_validator]
    )
    last_name = models.CharField(
        null=False,
        blank=False,
        max_length=20,
        validators=[is_capital_validator]
    )
    profile_picture = models.URLField(
        null=True,
        blank=True
    )


class Plant(models.Model):
    CHOICES = (
        ("Outdoor Plants", "Outdoor Plants"),
        ("Indoor Plants", "Indoor Plants")
    )
    plant_type = models.CharField(
        null=False,
        blank=False,
        choices=CHOICES,
        max_length=14
    )
    name = models.CharField(
        null=False,
        blank=False,
        max_length=20,
        validators=[MinLengthValidator(2), is_only_letter_validator]
    )
    image_url=models.URLField(
        null=False,
        blank=False
    )
    description= models.TextField(
        null=False,
        blank=False
    )
    price= models.FloatField(
        null=False,
        blank=False
    )
