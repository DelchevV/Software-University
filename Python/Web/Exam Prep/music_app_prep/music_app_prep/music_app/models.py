from django.db import models
from django.core.validators import MaxLengthValidator, MinLengthValidator, MinValueValidator
from django.core.exceptions import ValidationError


# Create your models here.
def check_valid_username(value):
    for char in value:
        if not (char.isalnum() or char != '_'):
            raise ValidationError('Ensure this value contains only letters, numbers, and underscore.')


class Profile(models.Model):
    username = models.CharField(
        null=False,
        blank=False,
        validators=[MaxLengthValidator(15), MinLengthValidator(2), check_valid_username],
        max_length=30

    )
    email = models.EmailField(
        null=False,
        blank=False
    )
    age = models.PositiveIntegerField(
        blank=True,
        null=True
    )


"""
▪	The choices are "Pop Music", "Jazz Music", "R&B Music", 
"Rock Music", "Country Music", "Dance Music", "Hip Hop Music", and "Other". 
"""


class Album(models.Model):
    GENRE_CHOICES = (
        ("Pop Music", "Pop Music"),
        ("Jazz Music", "Jazz Music"),
        ("R&B Music", "R&B Music"),
        ("Rock Music", "Rock Music"),
        ("Country Music", "Country Music"),
        ("Dance Music", "Dance Music"),
        ("Hip Hop Music", "Hip Hop Music"),
        ("Other", "Other")
    )

    album_name = models.CharField(
        null=False,
        blank=False,
        unique=True,
        max_length=30
    )
    artist = models.CharField(
        null=False,
        blank=False,
        max_length=20
    )
    genre = models.CharField(
        null=False,
        blank=False,
        choices=GENRE_CHOICES,
        max_length=30
    )
    description = models.TextField(
        blank=True,
        null=True
    )
    image_url = models.URLField(
        blank=False,
        null=False
    )
    price = models.FloatField(
        null=False,
        blank=False,
        validators=[MinValueValidator(0.0, 'The price cannot be below 0.0')]
    )
