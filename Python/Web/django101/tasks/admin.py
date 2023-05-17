from django.contrib import admin
from tasks.models import Tasks


# Register your models here.


class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title','description')


admin.site.register(Tasks, TaskAdmin)
