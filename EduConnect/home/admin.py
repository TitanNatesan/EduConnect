from django.contrib import admin
from .models import Faculty,Department,Subject,Student,Video,Topic,Program,Comments
# Register your models here.

admin.site.register(Faculty)
admin.site.register(Department)
admin.site.register(Program)
admin.site.register(Subject)
admin.site.register(Topic)
admin.site.register(Video)
admin.site.register(Student)
admin.site.register(Comments)