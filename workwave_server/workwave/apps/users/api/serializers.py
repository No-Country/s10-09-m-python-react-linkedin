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
            "phone_number",
            "country",
            "created_at",
            "password",
        )

    """def create(self, validated_data):
        user = User(**validated_data)
        #user.password = validated_data["password"]  # Utiliza el setter del modelo
        user.save()
        return user"""



