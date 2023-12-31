from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from django.http import JsonResponse

from .serializers import TestUserSerializer, PostSerializer  # Import PostSerializer
from .models import TestUserModel, Post  # Import Post model


# Create your views here.
class HomeView(APIView):  

 def get(self, request, format=None):
    return JsonResponse({"message":
    'HOLA MUNDO DESDE DJANGO, MYSQL Y DOCKER', "content":
    'Por Mario Medina'}) 

class TestUserView(RetrieveAPIView):
   serializer_class = TestUserSerializer
   queryset = TestUserModel.objects.all()

   def get(self, request):
      test_user = self.get_queryset().get(pk=1)
      data = self.serializer_class(instance=test_user)                
        
      return Response(data={
         "message":"",
         "content": data.data
      })
   
class PostListAPIView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetailAPIView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


