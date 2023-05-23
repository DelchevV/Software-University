from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    return HttpResponse('index')


def details(request, department_id):
    department_map = {
        '1': 'Dev',
        '2': "QA"
    }
    payload = f"Department: {department_map.get(str(department_id), 'Unknown')}"
    return HttpResponse(payload)

def details_template(request, department_id):
    department_map = {
        '1': 'Dev',
        '2': "QA"
    }
    payload = f"Department: {department_map.get(str(department_id), 'Unknown')}"
    context={
        'title': 'Departments title from context',
        'payload': payload
    }
    return render(request, 'departments/details.html', context=context)


