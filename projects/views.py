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
