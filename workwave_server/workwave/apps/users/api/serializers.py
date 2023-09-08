from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from workwave.apps.users.models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    password = serializers.CharField(write_only=True, required=False)
    password2 = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = CustomUser
        fields = ("id", "email", "password", "password2", "first_name", "last_name", "phone_number", "country")

    def create(self, validated_data):
        """
        Create and return a 'CustomUser' instance, given the validated data.
        """
        if validated_data["password"] != validated_data["password2"]:
            raise serializers.ValidationError("Passwords do not match.")
        validate_password(validated_data["password"])
        validated_data.pop("password2")
        user = super().create(validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user

    def update (self, instance, validated_data):
        """
        Update and return an existing 'CustomUser' instance, given the validated data.
        """
        instance.name = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.country = validated_data.get('country', instance.country)
        instance.is_active = validated_data.get('active', instance.is_active)
        if validated_data["password"]:
            validate_password(validated_data["password"])
            instance.password = instance.set_password(validated_data.get('password', instance.password))
        print(instance.first_name, validated_data["first_name"])
        instance.save()
        return instance
        



