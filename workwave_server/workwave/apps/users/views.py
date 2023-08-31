from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from cryptography.fernet import Fernet
from .api.serializers import *



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


class SingInUserView(APIView):
    def post(self, request):
        email = request.POST.get("email")
        password = request.POST.get("password")
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {"error": "User does not exist"}, status=status.HTTP_404_NOT_FOUND
            )

        if user.password == password:
            # Autenticar al usuario
            login(request, user)
            return Response({"message": "Login successful."}, status=status.HTTP_200_OK)
        else:
            return Response(
                {"error": "Incorrect password"}, status=status.HTTP_401_UNAUTHORIZED
            )