# urls.py

from django.urls import path, include
from . import views

urlpatterns = [ 
    path("studLogin/",views.studLogin, name="student_login"),
    path("getfaculty/",views.getFaculty, name="Get Faculties"),
    path("getdept/<int:Fid>/",views.getDepartments, name="Get Departments"),
    path("subjects/<int:dept>/<int:year>/",views.getSubject, name="Get Subjects"), #api/programs/1/1 
    path("topics/<int:fid>/<int:did>/<int:year>/<int:sid>/",views.getTopics,name="Get Topics"),
    path('getvideo/<int:dID>/<int:year>/<int:subID>/<int:tid>/',views.getVideo,name="get video"),
]    