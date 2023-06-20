from django.shortcuts import render, redirect
from .models import Car
from .forms import CarCreateForm


# Create your views here.
def car_create(request):
    form = CarCreateForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('catalogue')

    context = {
        "form": form,
    }

    return render(request, 'car/car-create.html', context)


def car_edit(request, pk):
    pass


def car_details(request, pk):
    pass


def car_delete(request, pk):
    pass
