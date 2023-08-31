from .base import *

# REST_FRAMEWORK = {
#     'DATE_FORMAT': "%Y-%m-%d",
#     'DATE_INPUT_FORMATS': ['iso-8601', '%Y-%m-%d'],
# }

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
