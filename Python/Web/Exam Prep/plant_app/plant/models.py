from django.db import models
from django.core.validators import MinLengthValidator


# Create your models here.
class Profile(models.Model):
    username = models.CharField(null=False, blank=False, max_length=20, validators=[MinLengthValidator(2)])
    first_name = models.CharField(null=False, blank=False, max_length=20)
    last_name = models.CharField(null=False, blank=False, max_length=20)
    profile_picture = models.URLField(null=True, blank=True)

class Plant(models.Model):
    plant_type=models.CharField(blank=False, null=False, max_length=14)
    name= models.CharField(blank=False, null=False, max_length=20, validators=[MinLengthValidator(2)])
    image_url= models.URLField(blank=False, null=False)
    description= models.TextField(blank=False, null=False)
    price= models.FloatField(blank=False, null=False)
