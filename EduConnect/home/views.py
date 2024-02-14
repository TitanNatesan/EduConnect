# views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Faculty,Department,Program,Subject,Topic,Video,Student
from .serializers import FacultySerializer,DepartmentSerializer,ProgramSerializer,SubjectSerializer,TopicSerializer,VideoSerializer,StudentSerializer
import re


@api_view(['GET'])
def getFaculty(request):
    if request.method=="GET":
        faculties = Faculty.objects.all().values()
        serial = FacultySerializer(faculties,many=True)
        return Response(serial.data)


@api_view(["GET"])
def getDepart(request,fid):
    if request.method == "GET":
        try:
            fac = Faculty.objects.get(id=fid)
            depart = Department.objects.filter(facultyname=fac)
            serial = DepartmentSerializer(depart,many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("Faulty not Exist")
        

@api_view(["GET"])
def getProgram(request,fid,did):
    if request.method == "GET":
        try:
            fac = Faculty.objects.get(id=fid)
            depart = Department.objects.get(id=did)
            program = Program.objects.filter(faculty=fac,department=depart)
            serial = ProgramSerializer(program,many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("Faulty not Exist")
        except Department.DoesNotExist:
            return Response("Department not Found")
        

@api_view(['GET'])
def getSubject(request,fid,did,pid,year):
    if request.method == "GET":
        try:
            fac = Faculty.objects.get(id=fid)
            depart = Department.objects.get(id=did)
            prog = Program.objects.get(id=pid)
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
            subj = Subject.objects.filter(faculty=fac,department=depart,program=prog,year=year)
            serial = SubjectSerializer(subj,many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("Faulty not Exist")
        except Department.DoesNotExist:
            return Response("Department not Found")
        except Program.DoesNotExist:
            return  Response("Program not found")


@api_view(["GET"])
def getTopic(request,fid,did,pid,year,sid):
    if request.method == "GET":
        try:
            fac = Faculty.objects.get(id=fid)
            depart = Department.objects.get(id=did)
            prog = Program.objects.get(id=pid)
            subj = Subject.objects.get(id=sid)
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
            top = Topic.objects.filter(faculty=fac,department=depart,program=prog,year=year,subject=subj)
            serial = TopicSerializer(top,many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("Faulty not Exist")
        except Department.DoesNotExist:
            return Response("Department not Found")
        except Program.DoesNotExist:
            return  Response("Program not found")
        except Subject.DoesNotExist:
            return Response("Subject not Found")



@api_view(["GET"])
def getvideo(request,fid,did,pid,year,sid,tid):
    if request.method == "GET":
        try:
            fac = Faculty.objects.get(id=fid)
            depart = Department.objects.get(id=did)
            prog = Program.objects.get(id=pid)
            subj = Subject.objects.get(id=sid)
            top = Topic.objects.get(id=tid)
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
            videos = Video.objects.filter(
                faculty=fac,
                department=depart,
                program=prog,
                subject=subj,
                topic=top
            )
            for video in videos:
                video.url = video.url.split("/")[-1]
            serial = VideoSerializer(videos,many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("Faulty not Exist")
        except Department.DoesNotExist:
            return Response("Department not Found")
        except Program.DoesNotExist:
            return  Response("Program not found")
        except Subject.DoesNotExist:
            return Response("Subject not Found")
        except Topic.DoesNotExist:
            return Response("Topic not Found")


@api_view(["POST"])
def Login(request):

    '''
    {
        "username":"22becse059",
        "password":"1234567890"
    } '''

    if request.method=="POST":
        data =request.data 
        try:    
            user = Student.objects.get(regno=data['username'])
            if user.password == data['password']:
                serial = StudentSerializer(user)
                print(serial.data)
                cont = {
                    "message":"1",
                    "userdata":serial.data,
                }
                return Response(cont)
            else:
                return Response("Invalid Credentials")
        except Student.DoesNotExist:
            return Response("Student ID not found")
