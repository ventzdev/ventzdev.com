# Generated by Django 4.2.2 on 2023-07-01 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_blog', '0005_about_me_apropos_about_me_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tarrife',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('categorie', models.CharField(max_length=50)),
                ('prix', models.IntegerField()),
                ('detay1', models.TextField()),
                ('detay2', models.TextField()),
                ('detay3', models.TextField()),
            ],
        ),
    ]