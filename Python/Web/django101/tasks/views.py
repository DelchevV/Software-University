from django.shortcuts import render
from django.http import HttpResponse
from .models import Tasks


# Create your views here.
def index(request):
    return HttpResponse('It works!')


def list_tasks(request):
    all_tasks = Tasks.objects.all()
    return HttpResponse(f'{t.id} {t.title} {t.priority}' for t in all_tasks)


def list_tasks_template(request):
    context = {
        'title': 'My tasks for today',
        "tasks": Tasks.objects.order_by('id').all()
    }

    return render(request, 'tasks.html', context=context)
