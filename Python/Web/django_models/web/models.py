from django.db import models


# Create your models here.
class Employee(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=10)


    def __str__(self):
        return f"ID: {self.pk}, Name: {self.first_name} {self.last_name}"


class Manager(models.Model):
    pass
