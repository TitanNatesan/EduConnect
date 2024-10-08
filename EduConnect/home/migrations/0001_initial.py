# Generated by Django 5.0.1 on 2024-08-19 03:47

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('facultyname', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('departmentName', models.CharField(max_length=200)),
                ('facultyname', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.faculty')),
            ],
        ),
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('programname', models.CharField(max_length=200)),
                ('course_duration', models.IntegerField(validators=[django.core.validators.MinValueValidator(limit_value=1, message='Course duration must be greater than or equal to 1.'), django.core.validators.MaxValueValidator(limit_value=5, message='Course duration must be less than or equal to 5.')])),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.department')),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.faculty')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('name', models.CharField(max_length=150)),
                ('regno', models.CharField(max_length=12, primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=200)),
                ('year', models.CharField(choices=[('1st-Year', '1st-Year'), ('2nd-Year', '2nd-Year'), ('3rd-Year', '3rd-Year'), ('4th-Year', '4th-Year'), ('5th-Year', '5th-Year')], max_length=50)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.department')),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.faculty')),
                ('program', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.program')),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.CharField(choices=[('1st-Year', '1st-Year'), ('2nd-Year', '2nd-Year'), ('3rd-Year', '3rd-Year'), ('4th-Year', '4th-Year'), ('5th-Year', '5th-Year')], max_length=50)),
                ('subject', models.CharField(max_length=200)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.department')),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.faculty')),
                ('program', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.program')),
            ],
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.CharField(choices=[('1st-Year', '1st-Year'), ('2nd-Year', '2nd-Year'), ('3rd-Year', '3rd-Year'), ('4th-Year', '4th-Year'), ('5th-Year', '5th-Year')], max_length=50)),
                ('topic', models.CharField(max_length=100)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.department')),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.faculty')),
                ('program', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.program')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.subject')),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.CharField(choices=[('1st-Year', '1st-Year'), ('2nd-Year', '2nd-Year'), ('3rd-Year', '3rd-Year'), ('4th-Year', '4th-Year'), ('5th-Year', '5th-Year')], max_length=50)),
                ('description', models.TextField()),
                ('url', models.URLField()),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.department')),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.faculty')),
                ('like', models.ManyToManyField(blank=True, null=True, related_name='videos_liked', to='home.student')),
                ('program', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.program')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.subject')),
                ('topic', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='home.topic')),
                ('viewby', models.ManyToManyField(blank=True, null=True, related_name='videos_viewed', to='home.student')),
            ],
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
                ('time', models.DateTimeField(auto_now_add=True, null=True)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.student')),
                ('video', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.video')),
            ],
        ),
    ]
