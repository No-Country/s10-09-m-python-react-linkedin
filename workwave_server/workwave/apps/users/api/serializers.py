from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from workwave.apps.users.models import CustomUser, Profile


class CustomUserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)


    class Meta:
        model = CustomUser
        fields = ("id", "email", "password", "password2", "first_name", "last_name", "phone_number", "country", "is_active")

    def create(self, validated_data):
        validate_password(validated_data["password"])
        if validated_data["password"] != validated_data["password2"]:
            raise serializers.ValidationError("Passwords do not match.")
        validated_data.pop("password2")
        user = super().create(validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"



