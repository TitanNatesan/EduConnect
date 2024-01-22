from django.contrib import admin
from .models import Branch,Department,Program,Student,Video
# Register your models here.
class BranchAdmin(admin.ModelAdmin):
    list_display = [
        "branchName",
    ]
admin.site.register(Branch,BranchAdmin)
admin.site.register(Department)
admin.site.register(Program)
admin.site.register(Student)
admin.site.register(Video)