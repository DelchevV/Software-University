from django.shortcuts import render
from .forms import TodoForm


def form(request):
    form = TodoForm()
    if request.method == "POST":
        form = TodoForm(request.POST)

    context = {
        'form': form,
    }
    return render(request, "form.html", context)


# Create your views here.
def home_page(request):
    return render(request, 'home-page.html')


def create_profile(request):
    return render(request, 'create-profile.html')


def catalogue(request):
    return render(request, 'catalogue.html')


def details(request, pk):
    return render(request, "plant-details.html")


def edit_plant(request, pk):
    return render(request, 'edit-plant.html')


def delete_plant(request, pk):
    return render(request, 'delete-plant.html')


def profile_details(request):
    return render(request, 'profile-details.html')


def profile_edit(request):
    return render(request, 'edit-profile.html')


def profile_delete(request):
    return render(request, 'delete-profile.html')
