from django.db import models

# Create your models here.
class Profile(models.Model):
    first_name=models.CharField(
        null=False,
        blank=False,
        max_length=30
    )
    last_name = models.CharField(
        null=False,
        blank=False,
        max_length=30
    )
    image_url=models.URLField(
        blank=False,
        null=False
    )

class Book(models.Model):
    title= models.CharField(
        max_length=30,
        null=False,
        blank=False,
    )
    description=models.TextField(
        null=False,
        blank=False,
    )
    image_url = models.URLField(
        blank=False,
        null=False
    )
    type = models.CharField(
        max_length=30,
        null=False,
        blank=False,
    )
