# Generated by Django 5.0.1 on 2024-02-15 05:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_comments_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='view',
            field=models.IntegerField(null=True),
        ),
    ]
