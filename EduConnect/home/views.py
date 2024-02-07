# views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Student,Faculty,Department,Subject,Video,Topic
from .serializers import DepartmentSerializer,SubjectSerial,VideoSerial,TopicSerial
import re

@api_view(["POST"])                # {"username":"teacherthree","password":"1234567890"}
def studLogin(request):          
    if request.method == "POST":
        data = request.data 
        username = data["username"]
        password = data['password']
        print(data)
        try:
            stud = Student.objects.get(regno=username)
            if stud.password == password:
                print("1")
                return Response("1")
            else:
                print("invalid")
                return Response("Invalid Password")
        except Student.DoesNotExist:
            return Response("UserNotFound")
        

@api_view(['GET'])
def getFaculty(request):
    if request.method == "GET":
        faculties = Faculty.objects.all().values()
        return Response(faculties)
    
@api_view(["GEt"])
def getDepartments(request,Fid):
    if request.method == "GET":
        try:
            faculty = Faculty.objects.get(id=Fid)
            departments = Department.objects.filter(facultyname=faculty)
            serial = DepartmentSerializer(departments,many=True)
            fl=faculty.facultyname
            cont ={}
            cont['Faculty']=fl
            cont['departments']=serial.data
            return Response(cont)
        except Faculty.DoesNotExist:
            return Response("FacultyNotFound")
        except Department.DoesNotExist:
            return Response("No Departments at this moment")

@api_view(["GET"])
def getSubject(request,dept,year):
    if request.method == "GET":
        try:
            department = Department.objects.get(id=dept)
            if   year == 1:
                year = "1st-Year"
            elif year == 2:
                year = "2nd-Year"
            elif year == 3:
                year = "3rd-Year"
            elif year == 4:
                year = "4th-Year"
            elif year == 5:
                year = "5th-Year"
            else:
                return Response("year Invalid")
            subjects = Subject.objects.filter(department=department,year=year)
            serial = SubjectSerial(subjects,many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("FacultyNotFound")
        except Department.DoesNotExist:
            return Response("No Departments at this moment")

@api_view(["GET"])
def getTopics(request,fid,did,year,sid):
    if request.method == "GET":
        try:
            faculty = Faculty.objects.get(id=fid)
            department = Department.objects.get(id=did)
            if   year == 1:
                year = "1st-Year"
            elif year == 2:
                year = "2nd-Year"
            elif year == 3:
                year = "3rd-Year"
            elif year == 4:
                year = "4th-Year"
            elif year == 5:
                year = "5th-Year"
            else:
                return Response("year Invalid")
            subject = Subject.objects.get(id=sid)
            topics = Topic.objects.filter(faculty=faculty,department=department,year=year,subject=subject)
            serial = TopicSerial(topics,many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("not found")

@api_view(["GET"])
def getVideo(request,dID,year,subID,tid):
    if request.method == "GET":
        year = "1st-Year" if year==1 else "2nd-Year" if year==2 else "3rd-Year" if year==3 else "4th-Year" if year==4 else "5th-Year" if year==5 else "invalid"
        if year == "invalid":
            return Response("Year Invalid")
        try:
            department = Department.objects.get(id=dID)
            subject = Subject.objects.get(id=subID)
            topic = Topic.objects.get(id= tid)
            videos = Video.objects.filter(department=department,year=year,subject=subject,topic=topic)
            for video in videos:
                video.url = video.url.split("/")[-1]
            serial = VideoSerial(videos,many=True)
            return Response(serial.data)
        except Department.DoesNotExist:
            return Response("DepartmentNotFound")
        except Subject.DoesNotExist:
            return Response("SubjectNotFound")
        except Video.DoesNotExist:
            return Response("VideoNotFound")
