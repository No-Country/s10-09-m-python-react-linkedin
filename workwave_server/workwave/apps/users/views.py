from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from cryptography.fernet import Fernet
from .api.serializers import *
from workwave.apps.users.api.serializers import UserSerializer, PasswordSerializer


class CreateUserView(APIView):
    def validate_password(self, data):
        if data["password"] != data["password2"]:
            raise serializers.ValidationError({"Error": "Passwords are not the same"})

    def post(self, request):
        user_data = request.data
        self.validate_password(user_data)  # Llama al método de validación de contraseña

        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            return Response(user_serializer.data, status=201)
        return Response(user_serializer.errors, status=400)
