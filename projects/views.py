from django.shortcuts import render

# Create your views here.

def index (request):
    return render(request,"index.html")

# def blog_cards(request):
#     return render(request,"practiceapp/blog_cards.html")
