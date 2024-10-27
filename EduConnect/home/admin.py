from django.contrib import admin
from .models import Faculty,Department,Subject,Student,Video,Topic,Program,Comments,VideoRuntime
# Register your models here.

@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = [
        'faculty',
        'programname',
        'department',
        'course_duration',
    ]

@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = [
        'faculty',
        'year',
        "program",
        'subject',
        'topic',
    ]

admin.site.register(Faculty)
admin.site.register(Department)
@admin.register(Subject)
class AdminSubject(admin.ModelAdmin):
    list_display = [
        'faculty',
        'department',
        'program',
        'year',
        'subject',
        "img"
    ]

@admin.register(Video)
class AdminVideo(admin.ModelAdmin):
    list_display = [
        'year',
        'subject',
        'topic',
        'faculty',
        'program',
        'url',
        'description',
        "id",
    ]

@admin.register(Student)
class AdminStudent(admin.ModelAdmin):
    list_display = [
        'name',
        'regno',
        'faculty',
        'department',
        'program',
        'year',
    ]

@admin.register(VideoRuntime)
class AdminVideoRunTime(admin.ModelAdmin):
    list_display = [
        'student',
        'video',
        'timerunned',
    ]

admin.site.register(Comments)