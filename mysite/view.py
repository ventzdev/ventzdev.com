from django.shortcuts import render
from my_blog.models import *


def index_view(request):
    about = About_me.objects.all()
    tarif=Tarrife.objects.all()
    asosye=Asoye.objects.all()
    context = context = {"about": about,"tarif":tarif,"asosye":asosye}
    return render(request, "home.html", context)


def about_view(request):
    about = About_me.objects.all()
    context = context = {"about": about}
    return render(request, "about.html", context)


def contact_view(request):
    return render(request, "contact.html")


def service_view(request):
    return render(request, "services.html")


def project_view(request):
    project = Article.objects.all()
    context = context = {"project": project}
    return render(request, "projet.html", context)

def list_view(request):
    return render(request,'list.html')

def CV_view(request):
    return render(request,"cv.html")