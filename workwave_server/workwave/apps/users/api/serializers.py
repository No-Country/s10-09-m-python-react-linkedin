from rest_framework import serializers
from workwave.apps.users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "email",
            "name",
            "last_name",
            "birthdate",
            "phone_number",
            "country",
            "postal_code",
            "created_at",
            "password",
        )

    def create(self, validated_data):
        user = User(**validated_data)
        user.password = validated_data["password"]  # Utiliza el setter del modelo
        user.save()
        return user


class PasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=128, min_length=6, write_only=True)
    password2 = serializers.CharField(max_length=128, min_length=6, write_only=True)

    # Verifica que el usuario coloque bien la contraseña
    def validate(self, data):
        if data["password"] != data["password2"]:
            raise serializers.ValidationError({"Error": "Passwords are not the same"})
        return data
