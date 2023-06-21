from django import template
from my_plant_app.my_plant.models import Profile

register = template.Library()


@register.simple_tag
def get_user_profile():
    profile = Profile.objects.first()
    return profile
