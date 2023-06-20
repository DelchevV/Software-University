from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('furnitures/', views.display_furniture, name='display_furniture')

]
