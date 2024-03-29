# Generated by Django 4.1.7 on 2023-06-21 17:03

import django.core.validators
from django.db import migrations, models
import music_app_prep.music_app.models


class Migration(migrations.Migration):

    dependencies = [
        ('music_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='artist',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='profile',
            name='username',
            field=models.CharField(max_length=30, validators=[django.core.validators.MaxLengthValidator(15), django.core.validators.MinLengthValidator(2), music_app_prep.music_app.models.check_valid_username]),
        ),
    ]
