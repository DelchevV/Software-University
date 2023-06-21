from django.urls import path
from .views import home_page, profile_create, catalogue, plant_create, plant_details, plant_edit, plant_delete, \
    profile_details, profile_edit, profile_delete

"""
•	http://localhost:8000/ - home page
•	http://localhost:8000/profile/create/ - profile create page
•	http://localhost:8000/catalogue/ - catalogue
•	http://localhost:8000/create/ - plant create page
•	http://localhost:8000/details/<plant_id>/ - plant details page
•	http://localhost:8000/edit/<plant_id>/ - plant edit page
•	http://localhost:8000/delete/<plant_id>/ - plant delete page

•	http://localhost:8000/profile/details/ - profile details page
•	http://localhost:8000/profile/edit/ - profile edit page
•	http://localhost:8000/profile/delete/ - profile delete page

"""
urlpatterns = [
    path('', home_page, name='home-page'),
    path('profile/create/', profile_create, name='profile-create'),
    path('catalogue/', catalogue, name='catalogue'),
    path('create/', plant_create, name='plant-create'),
    path('details/<int:pk>/', plant_details, name='plant-details'),
    path('edit/<int:pk>/', plant_edit, name='plant-edit'),
    path('delete/<int:pk>/', plant_delete, name='plant-delete'),
    path('profile/details/', profile_details, name='profile-details'),
    path('profile/edit/', profile_edit, name='profile-edit'),
    path('profile/delete/', profile_delete, name='profile-delete')
]
