from django.urls import path
from .views import *
from workwave.apps.users.api.views import RegisterUserView, LoginUserView, LogoutUserView, UserDetailView

urlpatterns = [
    path("register/", view=RegisterUserView.as_view(), name="register"),
    path("login/", view=LoginUserView.as_view(), name="login"),
    path("logout/", view=LogoutUserView.as_view(), name="logout"),
    path("user/update/<int:pk>", view=UserDetailView.as_view(), name="user_update"),
    path("user/delete/<int:pk>", view=UserDetailView.as_view(), name="user_update")
]
