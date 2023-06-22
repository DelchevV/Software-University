from django.urls import path
from .views import home_page, create_profile, dashboard, create_game, details_game, edit_game, delete_game, \
    details_profile, edit_profile, delete_profile

urlpatterns = [
    path("", home_page, name='home-page'),
    path('profile/create/', create_profile, name='create-profile'),
    path('dashborad/', dashboard, name='dashboard'),
    path('game/create/', create_game, name='create-game'),
    path('game/details/<int:pk>/', details_game, name='details-game'),
    path('game/edit/<int:pk>/', edit_game, name='edit-game'),
    path('game/delete/<int:pk>/', delete_game, name='delete-game'),
    path('profile/details/', details_profile, name='details-profile'),
    path('profile/edit/', edit_profile, name='edit-profile'),
    path('profile/delete/', delete_profile, name='delete-profile'),

]
