from .views import index, details, details_template
from django.urls import path

urlpatterns = [
    path('', index),
    path('template/<int:department_id>', details_template),
    path('<int:department_id>', details),

]
