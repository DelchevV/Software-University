from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.form, name='form'),
    path('home/', views.home_page, name='home-page'),
    path('profile/create/', views.create_profile, name='create-profile'),
    path('catalogue/', views.catalogue, name='catalogue'),
    path('details/<int:pk>/', views.details, name='details'),
    path('edit/<int:pk>', views.edit_plant, name='edit-plant'),
    path('delete/<int:pk>', views.delete_plant, name='delete-plant'),
    path('profile/details', views.profile_details, name='profile-details'),
    path('profile/edit', views.profile_edit, name='profile-edit'),
    path('profile/delete', views.profile_delete, name='profile-delete'),

]
