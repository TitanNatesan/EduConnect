# urls.py

from django.urls import path, include
from . import views  

urlpatterns = [
    path("getfaculty/",views.getFaculty,name="Get Faculty"),
    path("getdepartment/<int:fid>/",views.getDepart,name="Get Departments"),
    path("getprogram/<int:fid>/<int:did>/",views.getProgram,name="Get Program"),
    path('getsubject/<int:fid>/<int:did>/<int:pid>/<int:year>/',views.getSubject,name='Get Subjects'),
    path("gettopic/<int:fid>/<int:did>/<int:pid>/<int:year>/<int:sid>/",views.getTopic,name="Get Topic"),
    path("getvideo/<int:fid>/<int:did>/<int:pid>/<int:year>/<int:sid>/<int:tid>/",views.getvideo,name="Get Video"),
    path("login/",views.Login,name='Login'),
]
 