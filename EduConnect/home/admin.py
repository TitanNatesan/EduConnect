from django.contrib import admin
from .models import Faculty,Department,Subject,Student,Video,Topic
# Register your models here.
class FacultyAdmin(admin.ModelAdmin):
    list_display = [
        "facultyname",
    ]
admin.site.register(Faculty,FacultyAdmin)
admin.site.register(Department)
admin.site.register(Subject)
admin.site.register(Topic)
admin.site.register(Student)
admin.site.register(Video)