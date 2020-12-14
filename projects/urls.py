from django.urls import path

from . import views

app_name = "projects"

urlpatterns = [
    path('', views.index, name='index'),
    path('expanding_cards/', views.expanding_cards, name='expanding_cards'),
    path('progress_steps/', views.progress_steps, name='progress_steps'),
    path('rotating_nav_animation/', views.rotating_nav_animation, name='rotating_nav_animation'),
]
