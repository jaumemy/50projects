from django.urls import path

from . import views

app_name = "projects"

urlpatterns = [
    path('', views.index, name='index'),
    path('expanding_cards/', views.expanding_cards, name='expanding_cards'),
]
