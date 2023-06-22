from django.shortcuts import render, redirect
from .forms import ProfileModelForm, GameModelForm, GameEditForm, GameDeleteForm, ProfileEditModel, ProfileDeleteForm
from .models import Profile, Game


# Create your views here.
def home_page(request):
    return render(request, 'home-page.html')


def create_profile(request):
    form = ProfileModelForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home-page')

    context = {
        'form': form
    }
    return render(request, 'create-profile.html', context)


def dashboard(request):
    games = Game.objects.all()
    context = {
        'games': games
    }
    return render(request, 'dashboard.html', context)


def create_game(request):
    form = GameModelForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('dashboard')
    context = {
        'form': form
    }
    return render(request, 'create-game.html', context)


def details_game(request, pk):
    game = Game.objects.filter(pk=pk).get()

    context = {
        'game': game
    }
    return render(request, 'details-game.html', context)


def edit_game(request, pk):
    game = Game.objects.filter(pk=pk).get()
    form = GameEditForm(request.POST or None, instance=game)
    if form.is_valid():
        form.save()
        return redirect('dashboard')

    context = {
        'form': form,
        'game': game
    }
    return render(request, 'edit-game.html', context)


def delete_game(request, pk):
    game = Game.objects.filter(pk=pk).get()
    form = GameDeleteForm(request.POST or None, instance=game)
    if form.is_valid():
        game.delete()
        return redirect('dashboard')

    context = {
        'game': game,
        'form': form
    }
    return render(request, 'delete-game.html', context)


def details_profile(request):
    profile = Profile.objects.get()
    games = Game.objects.all()

    average_rating = 0
    for game in games:
        average_rating += game.rating
    average_rating /= games.count()

    context = {
        'profile': profile,
        'games': games,
        'average_rating': average_rating
    }
    return render(request, 'details-profile.html', context)


def edit_profile(request):
    profile = Profile.objects.get()
    form = ProfileEditModel(request.POST or None, instance=profile)
    if form.is_valid():
        form.save()
        return redirect('details-profile')
    context = {
        'form': form
    }
    return render(request, 'edit-profile.html', context)


def delete_profile(request):
    profile = Profile.objects.get()
    form = ProfileDeleteForm()
    games = Game.objects.all()
    if request.method == "GET":
        profile.delete()
        games.delete()
        return redirect('home-page')

    return render(request, 'delete-profile.html')
