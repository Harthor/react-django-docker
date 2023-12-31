from django.db.models import fields
from rest_framework import serializers
from .models import TestUserModel, Post  # Import Post model

class TestUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestUserModel
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):  # New serializer for Post model
    class Meta:
        model = Post
        fields = '__all__'  # Include all fields for now; adjust as needed
