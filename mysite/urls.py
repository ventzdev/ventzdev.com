from django.contrib import admin
from django.urls import path
from . import view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", view.index_view,name="home"),
    path("about", view.about_view,name="about"),
    path("service", view.service_view,name="service"),
    path("contactez-nous", view.contact_view,name="contact"),
    path("Lire-plus",view.list_view,name="liste"),
    path("Mon-CV",view.CV_view,name="cv"),
    path("mes-projets", view.project_view,name="project"),

]

if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

