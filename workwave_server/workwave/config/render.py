from .base import *

import os
import dj_database_url

DEBUG = 'RENDER' not in os.environ

SECRET_KEY = os.environ.get('SECRET_KEY')


ALLOWED_HOSTS = []

RENDER_EXTERNAL_HOSTNAME = os.environ.get('RENDER_EXTERNAL_HOSTNAME')
if RENDER_EXTERNAL_HOSTNAME:
    ALLOWED_HOSTS.append(RENDER_EXTERNAL_HOSTNAME)

DATABASES = {
    'default': dj_database_url.config(
        default = os.environ.get('DATABASE_URL')
    )
}

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ]
}


AUTH_PASSWORD_VALIDATORS += [
    {
        "NAME": "workwave.apps.users.validators.CustomPasswordValidator",
    },
]

#Email settings
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_USE_TLS = True
EMAIL_HOST = env('EMAIL_HOST')
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD') 
EMAIL_PORT = env('EMAIL_PORT')

STATIC_ROOT = BASE_DIR / 'static'