from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.mail import send_mail
from workwave.config import dev 
from .models import User, Profile

@receiver(post_save, sender=User)
def send_email_verification(sender, instance, created, **kwargs):
    if created:

        Profile.objects.create(user=instance)

        subject = 'Welcome to Workwave!'
        message = f'Hello {instance.name}!\n\nWelcome to Workwave. Thank you for joining us.'
        from_email = 'from@yourdjangoapp.com'
        recipient_list = (dev.EMAIL_HOST_USER,)
        send_mail(subject, message, from_email,recipient_list)