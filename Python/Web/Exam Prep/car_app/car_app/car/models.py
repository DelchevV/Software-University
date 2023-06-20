from django.db import models
from django.core import validators
from django.core.exceptions import ValidationError


# Create your models here.
def year_checker_validator(value):
    if 1980 > value > 2049:
        raise ValidationError("Year must be between 1980 and 2049")


class Car(models.Model):
    CHOICES = (
        ("Sports Car", "Sports Car"),
        ("Pickup", "Pickup"),
        ("Crossover", "Crossover"),
        ("Minibus", "Minibus"),
        ("Other", "Other")
    )
    type = models.CharField(
        max_length=10,
        null=False,
        blank=False,
        choices=CHOICES
    )
    model = models.CharField(
        blank=False,
        null=False,
        max_length=20,
        validators=[validators.MinLengthValidator(2)]
    )
    year = models.PositiveIntegerField(
        blank=False,
        null=False,
        validators=[year_checker_validator]
    )
    image_url = models.URLField(
        blank=False,
        null=False,
    )
    price = models.FloatField(
        blank=False,
        null=False,
        validators=[validators.MinValueValidator(1)]
    )
