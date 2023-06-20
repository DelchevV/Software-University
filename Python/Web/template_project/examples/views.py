import random

from django.shortcuts import render


def index(request):
    context = {
        'title': "Home",
        'random_int': random.random()
    }
    return (render(request, 'examples/index.html', context=context))
