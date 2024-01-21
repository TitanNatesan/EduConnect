# views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Teacher,Student,Branch,Department,Program,Video
from .serializers import DepartmentSerializer,ProgramSerial,VideoSerial
import re

@api_view(["POST"])
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


@api_view(["POST"])      # {"username":"teacherthree","password":"1234567890"}
def teachLogin(request):
    if request.method == "POST":
        data = request.data 
        print(data)
        username = data["username"]
        password = data['password']
        print(data)
        try:
            teach = Teacher.objects.get(regno=username)
            if teach.password == password:
                return Response("1")
            else:
                return Response("Invalid Password")
        except Teacher.DoesNotExist:
            return Response("UserNotFound")


@api_view(['GET'])
def getBranches(request):
    if request.method == "GET":
        branches = Branch.objects.all().values()
        return Response(branches)
    
@api_view(["GEt"])
def getDepartments(request,id):
    if request.method == "GET":
        try:
            branch = Branch.objects.get(id=id)
            departments = Department.objects.filter(branchName=branch)
            serial = DepartmentSerializer(departments,many=True)
            bn=branch.branchName
            cont ={}
            cont['Branch']=bn
            cont['departments']=serial.data
            return Response(cont)
        except Branch.DoesNotExist:
            return Response("BranchNotFound")
        except Department.DoesNotExist:
            return Response("No Departments at this moment")

@api_view(["GET"])
def getProgram(request,dept,year):
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
            programs = Program.objects.filter(department=department,year=year)
            serial = ProgramSerial(programs,many=True)
            return Response(serial.data)
        except Branch.DoesNotExist:
            return Response("BranchNotFound")
        except Department.DoesNotExist:
            return Response("No Departments at this moment")

@api_view(["POST"])
def uploadVideo(request):
    '''
   
     {
      "url": "https://example.com/video1",
      "bid": 1,
      "department_id": 1,
      "uploaded_by": "teacherone",
      "year": "1st-Year",
      "program_id": 1
    }
    '''

    if request.method == "POST":
        data = request.data
        url = data['url']

        def is_youtube_url(url):
            youtube_regex = (
                r'(https?://)?(www\.)?'
                '(youtube|youtu|youtube-nocookie)\.(com|be)/'
                '(watch\?v=|embed/|v/|.+\?v=)?([^&=%\?]{11})')
            youtube_match = re.match(youtube_regex, url)
            return youtube_match is not None
        if not is_youtube_url(url=url):
            return Response("Not a YouTube URL")
        
        url = url.split("/")[-1]
        branch_id = data['bid']
        dept_id = data['department_id']
        uploadedBy = data['uploaded_by']
        print(uploadedBy)
        year = data['year']
        program_id = data['program_id']
        description = data['description']
        try:
            branch = Branch.objects.get(id=branch_id)
            department = Department.objects.get(id=dept_id)
            uploadedby = Teacher.objects.get(regno=uploadedBy)
            program = Program.objects.get(id=program_id)
            video = Video(
                url = url,
                branch = branch,
                department=department,
                uploaded_by=uploadedby,
                year = year,
                program = program,
                description=description,
            )
            print(video.uploaded_by)
            video.save()
            return Response("Uploaded")
        except Branch.DoesNotExist:
            return Response("BranchNotExist")
        except Department.DoesNotExist:
            return Response("Department Don't Exist")
        except Teacher.DoesNotExist:
            return Response("UserNotFound")
        except Program.DoesNotExist:
            return Response("Program not Found at this moment")

@api_view(["GET"])
def getVideo(request,dID,year,subID):
    if request.method == "GET":
        year = "1st-Year" if year==1 else "2nd-Year" if year==2 else "3rd-Year" if year==3 else "4th-Year" if year==4 else "5th-Year" if year==5 else "invalid"
        if year == "invalid":
            return Response("Year Invalid")
        try:
            department = Department.objects.get(id=dID)
            program = Program.objects.get(id=subID)
            videos = Video.objects.filter(department=department,year=year,program=program)
            serial = VideoSerial(videos,many=True)
            return Response(serial.data)
        except Department.DoesNotExist:
            return Response("DepartmentNotFound")
        except Program.DoesNotExist:
            return Response("ProgramNotFound")
        except Video.DoesNotExist:
            return Response("VideoNotFound")
