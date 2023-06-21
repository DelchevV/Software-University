from django.shortcuts import render, redirect
from .models import Profile, Album
from .forms import ProfileModelForm, AlbumModelForm, EditAlbumModelForm, DeleteAlbumModelForm


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


def details_album(request, pk):
    album = Album.objects.filter(pk=pk).get()
    context = {
        'album': album
    }
    return render(request, 'music_app/album-details.html', context)


def edit_album(request, pk):
    album = Album.objects.filter(pk=pk).get()

    form = EditAlbumModelForm(request.POST or None, instance=album)
    if form.is_valid():
        form.save()
        return redirect('home-page')

    context = {
        'form': form,
        'album': album
    }
    return render(request, 'music_app/edit-album.html', context)


def delete_album(request, pk):
    album = Album.objects.filter(pk=pk).get()

    form = DeleteAlbumModelForm(request.POST or None, instance=album)
    context = {
        'form': form,
        'album': album
    }

    if form.is_valid():
        album.delete()
        return redirect('home-page')

    return render(request, 'music_app/delete-album.html', context)


def profile_details(request):
    profile = Profile.objects.get()
    albums = Album.objects.all()
    context = {
        'profile': profile,
        'album': albums

    }
    return render(request, 'music_app/profile-details.html', context)


def profile_delete(request):
    albums = Album.objects.all()
    profile = Profile.objects.get()
    context = {
        'profile': profile,
        'album': albums

    }

    if request.method == "GET":
        profile.delete()
        albums.delete()
        return redirect('home-page')

    return render(request, 'music_app/profile-delete.html', context)
