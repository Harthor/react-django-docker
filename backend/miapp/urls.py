from django.urls import path
from .views import HomeView, TestUserView


urlpatterns= [
    # path("", HomeView.as_view()),
    path("", TestUserView.as_view()),
]
