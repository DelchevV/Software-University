from django.db import models


# Create your models here.

class Tasks(models.Model):
    title = models.CharField(max_length=50, null=False)
    description = models.TextField()
    priority = models.IntegerField(default=1)
