from django.db import models
from django.core.validators import MinLengthValidator, EmailValidator
from datetime import date
from django.contrib.auth.models import AbstractUser
from workwave.apps.users.managers import CustomUserManager

# Create your models here.
class User(AbstractUser):
    username = None
    email = models.EmailField(max_length=100, unique=True, validators=[EmailValidator])
    first_name = models.CharField(max_length=50,validators=[MinLengthValidator(2)])
    last_name = models.CharField(max_length=50,validators=[MinLengthValidator(2)])
    phone_number = models.CharField(max_length=50, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} | {self.email}"

    class Meta:
        ordering = ["date_joined"]


class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
        verbose_name="User Profile",
        related_name="profile",
    )
    avatar = models.ImageField(null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    sector = models.CharField(max_length=100)

    def __str__(self):
        return f"Profile: {self.user}"
