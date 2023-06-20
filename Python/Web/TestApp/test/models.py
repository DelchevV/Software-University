from django.db import models
from django.utils import timezone


class Furniture(models.Model):
    furniture_name = models.CharField(max_length=20)
    furniture_price = models.DecimalField(decimal_places=2, max_digits=10)
    purchased_date = models.DateField()
