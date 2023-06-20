from django.shortcuts import render
from .models import Employee


# Create your views here.
def index(request):
    employee= Employee.objects.all()
    print(employee)
    return render(request, 'web/index.html')
