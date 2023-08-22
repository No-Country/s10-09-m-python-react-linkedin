from django.db import models
from datetime import date

# Create your models here.
class User(models.Model):
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birthdate = models.DateField(default=date.today)
    phone_number = models.CharField(max_length=50, unique=True, null=True, blank=True)
    country = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        created = not self.pk
        super().save(*args, **kwargs)
        if created:
            Profile.objects.create(user=self)
    
    
    def __str__(self):
        return f'{self.name} {self.last_name} | {self.email}'
    
    class Meta():
        ordering = ["created_at"]


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.PROTECT, primary_key=True, verbose_name="User Profile", related_name="profile")
    avatar = models.ImageField(null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    sector = models.CharField(max_length=100)

    def __str__(self):
        return f'Profile: {self.user}'
    
    