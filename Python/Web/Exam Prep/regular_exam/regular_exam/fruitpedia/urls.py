from django.urls import path
from .views import index, dashboard, fruit_create, fruit_details, fruit_edit, fruit_delete, profile_create, \
    profile_details, profile_edit, profile_delete

""""
•	http://localhost:8000/ - index page
•	http://localhost:8000/dashboard/ - dashboard page
•	http://localhost:8000/create/ - fruit create page
•	http://localhost:8000/<fruitId>/details/ - fruit details page
•	http://localhost:8000/<fruitId>/edit/ - fruit edit page
•	http://localhost:8000/<fruitId>/delete/ - fruit delete page

•	http://localhost:8000/profile/create/ - profile create page
•	http://localhost:8000/profile/details/ - profile details page
•	http://localhost:8000/profile/edit/ - profile edit page
•	http://localhost:8000/profile/delete/ - profile delete page

"""
urlpatterns = [
    path('', index, name='index'),
    path('dashboard/', dashboard, name='dashboard'),
    path('create/', fruit_create, name='fruit-create'),
    path('<int:pk>/details/', fruit_details, name='fruit-details'),
    path('<int:pk>/edit/', fruit_edit, name='fruit-edit'),
    path('<int:pk>/delete/', fruit_delete, name='fruit-delete'),
    path('profile/create/', profile_create, name='profile-create'),
    path('profile/details/', profile_details, name='profile-details'),
    path('profile/edit/', profile_edit, name='profile-edit'),
    path('profile/delete/', profile_delete, name='profile-delete')
]
