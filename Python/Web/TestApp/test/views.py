from django.shortcuts import render
from .models import Furniture


def index(request):
    return render(request, 'test/index.html')


def display_furniture(request):
    furniture = Furniture.objects.all()

    context = {
        'furniture': furniture,
    }
    return render(request, 'test/furniture.html', context)
