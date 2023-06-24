from django.shortcuts import render, redirect
from .models import Profile, FruitModel
from .forms import ProfileAddModelForm, FruitAddModelForm, FruitEditModel, FruitDeleteModel, ProfileEditModelForm, \
    PofileDeleteModelForm


# Create your views here.
def index(request):
    return render(request, 'index.html')


def dashboard(request):
    fruits = FruitModel.objects.all()
    context = {
        'fruits': fruits
    }
    return render(request, 'dashboard.html', context)


def fruit_create(request):
    form = FruitAddModelForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('dashboard')
    context = {
        'form': form
    }
    return render(request, 'create-fruit.html', context)


def fruit_details(request, pk):
    fruit = FruitModel.objects.filter(pk=pk).get()
    context = {
        'fruit': fruit
    }
    return render(request, 'details-fruit.html', context)


def fruit_edit(request, pk):
    fruit = FruitModel.objects.filter(pk=pk).get()
    form = FruitEditModel(request.POST or None, instance=fruit)
    if form.is_valid():
        form.save()
        return redirect('dashboard')

    context = {
        'fruit': fruit,
        'form': form
    }
    return render(request, 'edit-fruit.html', context)


def fruit_delete(request, pk):
    fruit = FruitModel.objects.filter(pk=pk).get()
    form = FruitDeleteModel(request.POST or None, instance=fruit)
    if form.is_valid():
        form.save()
        fruit.delete()
        return redirect("dashboard")
    context = {
        'fruit': fruit,
        'form': form
    }
    return render(request, 'delete-fruit.html', context)


def profile_create(request):
    form = ProfileAddModelForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('dashboard')
    context = {
        'form': form
    }
    return render(request, 'create-profile.html', context)


def profile_details(request):
    profile = Profile.objects.get()
    fruits = FruitModel.objects.all()

    fruits_count = 0
    if fruits:
        fruits_count = fruits.count()

    context = {
        'profile': profile,
        'fruits_count': fruits_count
    }
    return render(request, 'details-profile.html', context)


def profile_edit(request):
    profile = Profile.objects.get()
    form = ProfileEditModelForm(request.POST or None, instance=profile)
    if form.is_valid():
        form.save()
        return redirect('profile-details')

    context = {
        'profile': profile,
        'form': form
    }
    return render(request, 'edit-profile.html', context)


def profile_delete(request):
    profile = Profile.objects.get()
    fruits = FruitModel.objects.all()

    if request.method == 'POST':
        profile.delete()
        fruits.delete()
        return redirect('index')

    context = {
        'profile': profile
    }

    return render(request, 'delete-profile.html', context)
