from django.urls import path
from .views import HomeView, TestUserView, PostListAPIView, PostDetailAPIView  # Import new views

urlpatterns = [
    # path("", HomeView.as_view()),  # Uncomment if needed
    path("", TestUserView.as_view()),
    # Blog post URLs
    path('posts/', PostListAPIView.as_view(), name='post-list'),
    path('posts/<int:pk>/', PostDetailAPIView.as_view(), name='post-detail'),
]