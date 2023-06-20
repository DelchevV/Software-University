from django.shortcuts import render, redirect
from .models import Profile, Album
from .forms import ProfileModelForm, AlbumModelForm


# Create your views here.
def home_page(request):
    profile = Profile.objects.first()
    if profile is None:
        if request.method == 'GET':
            form = ProfileModelForm()
        else:
            form = ProfileModelForm(request.POST)
            if form.is_valid():
                form.save()
                return redirect('home-page')

        context = {
            'profile': profile,
            'form': form
        }

        return render(request, 'music_app/home-no-profile.html', context)
    else:
        albums = Album.objects.all()
        context = {
            'profile': profile,
            'albums': albums

        }
        return render(request, 'music_app/home-with-profile.html', context)


def add_album(request):
    form = AlbumModelForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect("home-page")

    context = {
        'form': form
    }

    return render(request, 'music_app/add-album.html', context)


def edit_album(request):
    return None


def delete_album(request):
    return None


def profile_details(request):
    return None


def profile_delete(request):
    return None


def details_album(request):
    return None
