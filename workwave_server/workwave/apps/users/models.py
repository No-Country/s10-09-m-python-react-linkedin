from django.db import models
from datetime import date
from django.contrib.auth.models import User
from cryptography.fernet import Fernet


# Create your models here.
class User(models.Model):
    email = models.EmailField(max_length=100, unique=True)
    password = models.BinaryField()
    name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birthdate = models.DateField(default=date.today)
    phone_number = models.CharField(max_length=50, unique=True, null=True, blank=True)
    country = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def password_plane(self):
        # Este método no almacenará nunca la contraseña en texto plano, para eso esta el siguiente método
        raise AttributeError("The password cannot be accessed directly")

    @password_plane.setter
    def password_save(self, value):
        # Genera la clave en secuencia de bytes
        key = Fernet.generate_key()
        # Objeto que contiene la llave de cifrado y descifrado
        cipher_suite = Fernet(key)
        password = cipher_suite.encrypt(value.encode())
        self.password = password

    def verify_password(self, value):
        # Verifica si la contraseña proporcionada coincide con la contraseña almacenada
        cipher_suite = Fernet(Fernet.generate_key())
        decrypted_password = cipher_suite.decrypt(self.password).decode()
        return value == decrypted_password

    def __str__(self):
        return f"{self.name} {self.last_name} | {self.email}"

    class Meta:
        ordering = ["created_at"]


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
