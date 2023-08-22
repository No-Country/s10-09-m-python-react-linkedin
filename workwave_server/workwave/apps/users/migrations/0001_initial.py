# Generated by Django 4.2.4 on 2023-08-22 19:59

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('birthdate', models.DateField(default=datetime.date.today)),
                ('phone_number', models.CharField(blank=True, max_length=50, null=True, unique=True)),
                ('country', models.CharField(max_length=100)),
                ('postal_code', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['created_at'],
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='profile', serialize=False, to='users.user', verbose_name='User Profile')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='')),
                ('about', models.TextField(blank=True, null=True)),
                ('sector', models.CharField(max_length=100)),
            ],
        ),
    ]
