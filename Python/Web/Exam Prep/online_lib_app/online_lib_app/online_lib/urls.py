from django.urls import path
from .views import home_page, add_book, edit_book, details_book, profile, edit_profile, delete_profile, book_delete

""""
•	http://localhost:8000/ - home page
•	http://localhost:8000/add/ - add book page
•	http://localhost:8000/edit/:id - edit book page
•	http://localhost:8000/details/:id - book details page
•	http://localhost:8000/profile/ - profile page
•	http://localhost:8000/profile/edit/ - edit profile page
•	http://localhost:8000/profile/delete/ - delete profile page

"""
urlpatterns = [
    path('', home_page, name='home-page'),
    path('add/', add_book,name= 'add-book'),
    path('edit/<int:pk>/', edit_book, name='edit-book'),
    path('details/<int:pk>/', details_book, name='details-book'),
    path('profile/', profile, name='profile'),
    path('profile/edit/', edit_profile, name='edit-profile'),
    path('profile/delete/', delete_profile, name='delete-profile'),
    path('delete/book/<int:pk>', book_delete, name='book-delete' )
]
