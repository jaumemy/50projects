from django.shortcuts import render

# Create your views here.

def index (request):
    return render(request,"index.html")

def expanding_cards(request):
    return render(request,"projects/expanding_cards.html")
