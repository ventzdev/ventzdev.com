from django.db import models

class Article(models.Model):
    titre=models.CharField(max_length=50)
    desc=models.TextField()
    video=models.FileField(upload_to="media/video")
    lien_site=models.TextField()
    prix_site=models.IntegerField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.titre
    
    # fin table

class About_me(models.Model):
    apropos=models.TextField()
    img=models.ImageField(upload_to="media/images")    

    def __str__(self):
        return self.apropos
    # fin table


class Tarrife(models.Model):
    categorie=models.CharField(max_length=50)
    prix=models.IntegerField()
    detay1=models.TextField()
    detay2=models.TextField()
    detay3=models.TextField()

    def __str__(self):
        return self.categorie
    # fin table

class Asoye(models.Model):
    img=models.ImageField()
    name=models.CharField(max_length=30)
    fonsyon=models.TextField()
    lien_facebook=models.TextField()
    lien_instagrame=models.TextField()
    lien_twitter=models.TextField()
    autre_lien=models.TextField()

    def __str__(self):
        return self.name
    # fin table 

