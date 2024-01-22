# urls.py

from django.urls import path, include
from . import views

urlpatterns = [
    path("studLogin/",views.studLogin, name="student_login"),
    # path("teachLogin/",views.teachLogin, name="student_login"),
    path("getbranches/",views.getBranches, name="Get Branches"),
    path("getdept/<int:id>/",views.getDepartments, name="Get Departments"),
    path("programs/<int:dept>/<int:year>/",views.getProgram, name="Get Programs"), #api/programs/1/1 
    # path('uploadVideo/',views.uploadVideo,name="upload video"),
    path('getvideo/<int:dID>/<int:year>/<int:subID>/',views.getVideo,name="get video"),
]   