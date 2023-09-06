from django.db import models
from django.core.validators import MinLengthValidator, EmailValidator
from datetime import date
from django.contrib.auth.models import AbstractUser
from workwave.apps.users.managers import CustomUserManager

# Create your models here.
class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(max_length=100, unique=True, validators=[EmailValidator])
    first_name = models.CharField(max_length=50,validators=[MinLengthValidator(2)])
    last_name = models.CharField(max_length=50,validators=[MinLengthValidator(2)])
    phone_number = models.CharField(max_length=50, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    is_active = models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} | {self.email}"

    class Meta:
        ordering = ["date_joined"]
        verbose_name = "User"
        verbose_name_plural = "Users"


class Profile(models.Model):
    user = models.OneToOneField(
        CustomUser,
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
