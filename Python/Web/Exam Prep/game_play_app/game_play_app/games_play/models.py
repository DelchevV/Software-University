from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
class Profile(models.Model):
    email = models.EmailField(
        null=False,
        blank=False
    )
    age = models.PositiveIntegerField(
        null=False,
        blank=False,
        validators=[MinValueValidator(12)]
    )
    password = models.CharField(
        blank=False,
        null=False,
        max_length=30,
    )
    first_name = models.CharField(
        blank=True,
        null=True,
        max_length=30
    )
    last_name = models.CharField(
        blank=True,
        null=True,
        max_length=30
    )
    profile_picture = models.URLField(
        blank=True,
        null=True
    )


class Game(models.Model):
    CHOICES = (
        ("Action", "Action"),
        ("Adventure", "Adventure"),
        ("Puzzle", "Puzzle"),
        ("Strategy", "Strategy"),
        ("Sports", "Sports"),
        ("Board/Card Game", "Board/Card Game"),
        ("Other", "Other")
    )

    title = models.CharField(
        blank=False,
        null=False,
        max_length=30,
        unique=True
    )
    category = models.CharField(
        null=False,
        blank=False,
        max_length=15,
        choices=CHOICES
    )
    rating = models.FloatField(
        blank=False,
        null=False,
        validators=[MinValueValidator(0.1), MaxValueValidator(0.5)]
    )
    max_level = models.PositiveIntegerField(
        blank=True,
        null=True,
        validators=[MinValueValidator(1)]
    )
    image_url = models.URLField(
        null=False,
        blank=False,
    )
    summary = models.TextField(
        blank=True,
        null=True
    )
