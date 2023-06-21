from django.shortcuts import render, redirect
from .forms import ProfileModelForm, PlantModelForm, PlantEditModelForm, PlantDeleteModelForm, ProfileEditModelForm, \
    ProfileDeleteModelForm
from .models import Plant, Profile


# Create your views here.
def home_page(request):
    return render(request, 'home-page.html')


def profile_create(request):
    form = ProfileModelForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('catalogue')

    context = {
        'form': form
    }
    return render(request, 'create-profile.html', context)


def catalogue(request):
    plants = Plant.objects.all()
    context = {
        'plants': plants
    }
    return render(request, 'catalogue.html', context)


def plant_create(request):
    form = PlantModelForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect('catalogue')

    context = {
        'form': form
    }
    return render(request, 'create-plant.html', context)


def plant_details(request, pk):
    plant = Plant.objects.filter(pk=pk).get()
    context = {
        'plant': plant
    }
    return render(request, 'plant-details.html', context)


def plant_edit(request, pk):
    plant = Plant.objects.filter(pk=pk).get()
    form = PlantEditModelForm(request.POST or None, instance=plant)

    context = {
        'form': form,
        'plant': plant
    }
    if form.is_valid():
        form.save()
        return redirect('catalogue')

    return render(request, 'edit-plant.html', context)


def plant_delete(request, pk):
    plant = Plant.objects.filter(pk=pk).get()
    form = PlantDeleteModelForm(request.POST or None, instance=plant)
    if form.is_valid():
        plant.delete()
        return redirect("catalogue")

    context = {
        'form': form,
        'plant': plant
    }
    return render(request, 'delete-plant.html', context)


def profile_details(request):
    profile = Profile.objects.get()
    plants = Plant.objects.all()

    context = {
        'profile': profile,
        'plants': plants
    }

    return render(request, 'profile-details.html', context)


def profile_edit(request):
    profile = Profile.objects.get()
    form = ProfileEditModelForm(request.POST or None, instance=profile)
    if form.is_valid():
        form.save()
        return redirect('profile-details')

    context = {
        'form': form
    }

    return render(request, 'edit-profile.html', context)


def profile_delete(request):
    profile = Profile.objects.get()
    plants = Plant.objects.all()

    if request.method == 'GET':
        profile.delete()
        plants.delete()
        return redirect('home-page')

    return render(request, 'delete-profile.html')
