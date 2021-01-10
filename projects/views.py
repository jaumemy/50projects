from django.shortcuts import render

# Create your views here.

def index (request):
    return render(request,"index.html")

def expanding_cards(request):
    return render(request,"projects/expanding_cards.html")

def progress_steps(request):
    return render(request,"projects/progress_steps.html")

def rotating_nav_animation(request):
    return render(request,"projects/rotating_nav_animation.html")

def hidden_search(request):
    return render(request,"projects/hidden_search.html")

def blurry_loading(request):
    return render(request,"projects/blurry_loading.html")

def scroll_animation(request):
    return render(request,"projects/scroll_animation.html")

def split_landing_page(request):
    return render(request,"projects/split_landing_page.html")

def form_input_wave(request):
    return render(request,"projects/form_input_wave.html")

def sound_board(request):
    return render(request,"projects/sound_board.html")

def dad_jokes(request):
    return render(request,"projects/dad_jokes.html")

def event_keycodes(request):
    return render(request,"projects/event_keycodes.html")

def django_facts(request):
    return render(request,"projects/django_facts.html")

def random_choice(request):
    return render(request,"projects/random_choice.html")

def animated_navigation(request):
    return render(request,"projects/animated_navigation.html")

def incrementing_counter(request):
    return render(request,"projects/incrementing_counter.html")

def movie_app(request):
    return render(request,"projects/movie_app.html")
