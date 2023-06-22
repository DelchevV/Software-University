from django import template
from game_play_app.games_play.models import Profile

register = template.Library()


@register.simple_tag
def get_user_profile():
    profile = Profile.objects.first()
    return profile
