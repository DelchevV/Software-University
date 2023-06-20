from django.contrib import admin
from .models import Furniture


# Register your models here.

@admin.register(Furniture)
class FurnitureAdmin(admin.ModelAdmin):
    pass
