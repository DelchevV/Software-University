from django import template

from regular_exam.fruitpedia.models import Profile

register = template.Library()


@register.simple_tag
def get_user_profile():
    profile = Profile.objects.first()
    return profile
