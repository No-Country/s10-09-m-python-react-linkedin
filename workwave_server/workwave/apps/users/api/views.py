from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from workwave.apps.users.api.serializers import CustomUserSerializer
from workwave.apps.users.models import CustomUser

class RegisterUserView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginUserView(APIView):
    authentication_classes = [TokenAuthentication]

    def post(self, request):
        user = authenticate(
            username=request.data["email"], 
            password=request.data["password"])
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token':token.key})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
class LogoutUserView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        try:
            user = CustomUser.objects.get(pk=pk)
        except ObjectDoesNotExist as e:
            return Response({"error": "user doesn't exist"}, status=status.HTTP_404_NOT_FOUND)
        serializer = CustomUserSerializer(user, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
    def delete(self, request,pk):
        user = CustomUser.objects.get(pk=pk)
        user.delete()
        return Response({"message": "user account deleted successfully"})