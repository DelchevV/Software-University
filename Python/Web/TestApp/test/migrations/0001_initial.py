# Generated by Django 4.2.2 on 2023-06-05 17:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Furniture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('furniture_name', models.CharField(max_length=20)),
                ('furniture_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('purchased_date', models.DateField(verbose_name=datetime.datetime(2023, 6, 5, 17, 44, 13, 748952, tzinfo=datetime.timezone.utc))),
            ],
        ),
    ]
