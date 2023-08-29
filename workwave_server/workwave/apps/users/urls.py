from django.urls import path
from .views import *
from workwave.apps.users.views import CreateUserView

urlpatterns = [
    path("sign_up/", CreateUserView.as_view(), name="sign_up"),
]
