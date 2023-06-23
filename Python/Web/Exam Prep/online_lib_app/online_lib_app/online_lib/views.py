from django.shortcuts import render, redirect
from .models import Profile, Book
from .forms import ProfileModelForm, BookModelForm, BookEditForm, ProfileEditForm, ProfileDeleteForm


def get_profile():
    try:
        return Profile.objects.get()
    except:
        return None


# Create your views here.
def home_page(request):
    profile = get_profile()
    if not profile:
        form = ProfileModelForm(request.POST or None)
        if form.is_valid():
            form.save()
            return redirect('home-page')
        context = {
            "profile": profile,
            'form': form
        }
        return render(request, 'home-no-profile.html', context)
    else:
        books = Book.objects.all()
        context = {
            "books": books
        }
        return render(request, 'home-with-profile.html', context)


def add_book(request):
    form = BookModelForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home-page')
    context = {
        'form': form
    }
    return render(request, 'add-book.html', context)


def edit_book(request, pk):
    book = Book.objects.filter(pk=pk).get()
    form = BookEditForm(request.POST or None, instance=book)
    if form.is_valid():
        form.save()
        return redirect('home-page')
    context = {
        "book": book,
        'form': form
    }
    return render(request, 'edit-book.html', context)


def details_book(request, pk):
    book = Book.objects.filter(pk=pk).get()
    context = {
        "book": book
    }
    return render(request, 'book-details.html', context)


def book_delete(request, pk):
    book = Book.objects.filter(pk=pk).get()
    book.delete()
    return redirect('home-page')


def profile(request):
    profile = get_profile()
    context = {
        'profile': profile
    }
    return render(request, 'profile.html', context)


def edit_profile(request):
    profile = get_profile()
    form = ProfileEditForm(request.POST or None, instance=profile)

    if form.is_valid():
        form.save()
        return redirect('profile')
    context = {
        'form': form

    }
    return render(request, 'edit-profile.html', context)


def delete_profile(request):
    profile = Profile.objects.get()
    books = Book.objects.all()

    if request.method == 'GET':
        form = ProfileDeleteForm(instance=profile)
    else:
        form = ProfileDeleteForm(request.POST, instance=profile)
        form.save()
        books.delete()
        return redirect('home-page')

    context = {
        'form': form,
        'profile': profile
    }
    return render(request, 'delete-profile.html', context)
