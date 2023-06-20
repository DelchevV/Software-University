from django.db import models
from django.core import validators


# Create your models here.
class Profile(models.Model):
    username = models.CharField(
        blank=False,
        null=False,
        max_length=10,
        validators=[validators.MinLengthValidator(2, 'The username must be a minimum of 2 chars')]
    )
    email = models.EmailField(
        blank=False,
        null=False
    )
    age = models.PositiveIntegerField(
        blank=False,
        null=False,
        validators=[validators.MinValueValidator(18)]
    )
    password = models.CharField(
        null=False,
        blank=False,
        max_length=20,
    )
    first_name = models.CharField(
        null=True,
        blank=True,
        max_length=30
    )
    last_name = models.CharField(
        null=True,
        blank=True,
        max_length=30
    )
    profile_picture = models.URLField(
        blank=True,
        null=True
    )
