from django.urls import path

from . import views

app_name = "projects"

urlpatterns = [
    path('', views.index, name='index'),
    path('expanding_cards/', views.expanding_cards, name='expanding_cards'),
    path('progress_steps/', views.progress_steps, name='progress_steps'),
    path('rotating_nav_animation/', views.rotating_nav_animation, name='rotating_nav_animation'),
    path('hidden_search/', views.hidden_search, name='hidden_search'),
    path('blurry_loading/', views.blurry_loading, name='blurry_loading'),
    path('scroll_animation/', views.scroll_animation, name='scroll_animation'),
    path('split_landing_page/', views.split_landing_page, name='split_landing_page'),
    path('form_input_wave/', views.form_input_wave, name='form_input_wave'),
    path('sound_board/', views.sound_board, name='sound_board'),
    path('dad_jokes/', views.dad_jokes, name='dad_jokes'),
    path('event_keycodes/', views.event_keycodes, name='event_keycodes'),
    path('django_facts/', views.django_facts, name='django_facts'),
    path('random_choice/', views.random_choice, name='random_choice'),
    path('animated_navigation/', views.animated_navigation, name='animated_navigation'),
    path('incrementing_counter/', views.incrementing_counter, name='incrementing_counter'),
    path('drink_blood/', views.drink_blood, name='drink_blood'),
    path('movie_app/', views.movie_app, name='movie_app'),
    path('background_slider/', views.background_slider, name='background_slider'),
    path('theme_clock/', views.theme_clock, name='theme_clock'),
    path('ripple_effect/', views.ripple_effect, name='ripple_effect'),
    path('minecraft_drag/', views.minecraft_drag, name='minecraft_drag'),
    path('drawing_app/', views.drawing_app, name='drawing_app'),
    path('kinetic_loader/', views.kinetic_loader, name='kinetic_loader'),
    path('content_placeholder/', views.content_placeholder, name='content_placeholder'),
    path('sticky_navbar/', views.sticky_navbar, name='sticky_navbar'),
    path('double_vertical_slider/', views.double_vertical_slider, name='double_vertical_slider'),
    path('positive_notification/', views.positive_notification, name='positive_notification'),
    path('github_profiles/', views.github_profiles, name='github_profiles'),
    path('like_it/', views.like_it, name='like_it'),




    path('blog_cards/', views.blog_cards, name='blog_cards'),
    path('nice_login/', views.nice_login, name='nice_login'),
    path('ads_manager/', views.ads_manager, name='ads_manager'),



    path('portfolio_index/', views.portfolio_index, name='portfolio_index'),
    path('portfolio_frontend/', views.portfolio_frontend, name='portfolio_frontend'),
    path('portfolio_backend/', views.portfolio_backend, name='portfolio_backend'),

]
