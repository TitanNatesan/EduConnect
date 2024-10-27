# views.py
from django.db.models import Sum
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import (
    Faculty,
    Department,
    Program,
    Subject,
    Topic,
    Video,
    Student,
    Comments,
    VideoRuntime,
)
from .serializers import (
    FacultySerializer,
    DepartmentSerializer,
    ProgramSerializer,
    SubjectSerializer,
    TopicSerializer,
    VideoSerializer,
    StudentSerializer,
    CommentSerializer,
    VRSerial,
    ASubjectSerializer,
    VideoRuntimeSerializer,
)
import re
from decimal import Decimal


@api_view(["GET"])
def getFaculty(request):
    if request.method == "GET":
        faculties = Faculty.objects.all().values()
        serial = FacultySerializer(faculties, many=True)
        return Response(serial.data)


@api_view(["GET"])
def getDepart(request, fid):
    if request.method == "GET":
        try:
            fac = Faculty.objects.get(id=fid)
            depart = Department.objects.filter(facultyname=fac)
            serial = DepartmentSerializer(depart, many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("Faulty not Exist")


@api_view(["GET"])
def getProgram(request, fid, did):
    if request.method == "GET":
        try:
            fac = Faculty.objects.get(id=fid)
            depart = Department.objects.get(id=did)
            program = Program.objects.filter(faculty=fac, department=depart)
            serial = ProgramSerializer(program, many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("Faulty not Exist")
        except Department.DoesNotExist:
            return Response("Department not Found")


@api_view(["GET"])
def getSubject(request, fid, did, pid, year):
    if request.method == "GET":
        try:
            fac = Faculty.objects.get(id=fid)
            depart = Department.objects.get(id=did)
            prog = Program.objects.get(id=pid)
            if year == 1:
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
            subj = Subject.objects.filter(
                faculty=fac, department=depart, program=prog, year=year
            )
            serial = SubjectSerializer(subj, many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("Faulty not Exist")
        except Department.DoesNotExist:
            return Response("Department not Found")
        except Program.DoesNotExist:
            return Response("Program not found")


@api_view(["GET"])
def getTopic(request, fid, did, pid, year, sid):
    if request.method == "GET":
        try:
            fac = Faculty.objects.get(id=fid)
            depart = Department.objects.get(id=did)
            prog = Program.objects.get(id=pid)
            subj = Subject.objects.get(id=sid)
            if year == 1:
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
            top = Topic.objects.filter(
                faculty=fac, department=depart, program=prog, year=year, subject=subj
            )
            serial = TopicSerializer(top, many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("Faulty not Exist")
        except Department.DoesNotExist:
            return Response("Department not Found")
        except Program.DoesNotExist:
            return Response("Program not found")
        except Subject.DoesNotExist:
            return Response("Subject not Found")


@api_view(["GET"])
def getvideo(request, fid, did, pid, year, sid, tid):
    if request.method == "GET":
        try:
            fac = Faculty.objects.get(id=fid)
            depart = Department.objects.get(id=did)
            prog = Program.objects.get(id=pid)
            subj = Subject.objects.get(id=sid)
            top = Topic.objects.get(id=tid)
            if year == 1:
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
                faculty=fac, department=depart, program=prog, subject=subj, topic=top
            )
            for video in videos:
                video.url = video.url.split("/")[-1]
            serial = VideoSerializer(videos, many=True)
            return Response(serial.data)
        except Faculty.DoesNotExist:
            return Response("Faulty not Exist")
        except Department.DoesNotExist:
            return Response("Department not Found")
        except Program.DoesNotExist:
            return Response("Program not found")
        except Subject.DoesNotExist:
            return Response("Subject not Found")
        except Topic.DoesNotExist:
            return Response("Topic not Found")


@api_view(["POST"])
def Login(request):
    """
    {
        "username":"22becse059",
        "password":"1234567890"
    }"""

    if request.method == "POST":
        data = request.data
        try:
            user = Student.objects.get(regno=data["username"])
            if user.password == data["password"]:
                serial = StudentSerializer(user)
                cont = {
                    "message": "1",
                    "userdata": serial.data,
                }
                return Response(cont, status=status.HTTP_200_OK)
            else:
                return Response(
                    "Invalid Credentials", status=status.HTTP_401_UNAUTHORIZED
                )
        except Student.DoesNotExist:
            return Response("Student ID not found", status=status.HTTP_404_NOT_FOUND)


@api_view(["GET", "POST"])
def comment(request, vid, un):
    """
    {
    "username":"22bebme057",
    "video_id":2,
    "comment":"Not BAD"
    }
    """
    if request.method == "GET":
        user = Student.objects.get(regno=un)
        video = Video.objects.get(id=vid)
        seen = video.viewby.filter(regno=un).exists()
        liked = True if video.like.filter(regno=un).exists() else False
        if seen:
            pass
        else:
            video.viewby.add(user)
            print(video.view)

        comment = Comments.objects.filter(video=video)
        serial = CommentSerializer(comment, many=True)
        video.url = video.url.split("/")[-1]

        cont = {
            "likes": len(video.like.all()),
            "liked": liked,
            "views": len(video.viewby.all()),
            "urls": video.url,
            "commment": serial.data,
        }
        return Response(cont)
    if request.method == "POST":
        video = Video.objects.get(id=request.data["video_id"])
        user = Student.objects.get(regno=request.data["username"])
        comment = Comments(video=video, student=user, comment=request.data["comment"])
        comment.save()
        comments = Comments.objects.filter(video=video)
        serial = CommentSerializer(comments, many=True)
        video.url = video.url.strip("/")[-1]
        print(video.url)
        cont = {
            "views": len(video.viewby.all()),
            "urls": video.url,
            "commment": serial.data,
        }
        return Response(cont)


@api_view(["POST"])
def likekaro(request):
    """
    {
    "username":"22bebme057",
    "video_id":2
    }
    """
    if request.method == "POST":
        user = Student.objects.get(regno=request.data["username"])
        video = Video.objects.get(id=request.data["video_id"])
        seen = video.like.filter(regno=request.data["username"]).exists()
        if seen:
            video.like.remove(user)
            return Response("Disliked")
        else:
            video.like.add(user)
            return Response("Liked")


@api_view(["POST"])
def updateRunTime(request):
    """{
    "video_id": 2,
    "runTime": 3.2,
    "student_id": "22becse049"
    }"""
    if request.method == "POST":
        videoID = request.data.get("video_id")
        runtime = request.data.get("runTime")
        studentID = request.data.get("student_id")

        if not all([videoID, runtime, studentID]):
            return Response({"error": "Missing required fields"}, status=400)

        try:
            studentin = Student.objects.get(regno=studentID)
            videoin = Video.objects.get(pk=videoID)
        except Student.DoesNotExist:
            return Response({"error": "Student not found"}, status=404)
        except Video.DoesNotExist:
            return Response({"error": "Video not found"}, status=404)

        runtime = Decimal(runtime)

        curVideo, created = VideoRuntime.objects.get_or_create(
            video=videoin, student=studentin, defaults={"timerunned": Decimal("0.0")}
        )

        curVideo.timerunned += runtime

        curVideo.save()
        return Response({"message": "Success"})


@api_view(["GET"])
def ViewRun(request):
    if request.method == "GET":
        # Aggregate the total runtime for each video
        video_runtime_data = VideoRuntime.objects.values("video").annotate(
            total_runtime=Sum("timerunned")
        )

        # Create a dictionary to hold total runtimes for each video
        video_runtime_mapping = {video.id: 0 for video in Video.objects.all()}

        # Populate the dictionary with actual aggregated values
        for runtime_data in video_runtime_data:
            video_runtime_mapping[runtime_data["video"]] = (
                runtime_data["total_runtime"] or 0
            )

        # Prepare the response data
        response_data = []
        vidobj = VideoRuntime.objects.all()
        resvid = VRSerial(vidobj, many=True)
        for video in Video.objects.all():
            video_data = {
                "video_id": video.id,
                "description": video.description,
                "total_runtime": float(video_runtime_mapping[video.id]),
                "raw_data": resvid.data,
            }
            response_data.append(video_data)

        return Response(response_data)


# @api_view(["POST"])
# def newResquest(request):
#     if request.method == "POST":
#         # fid = request.data['fid']
#         # dep = request.data['dep']
#         pro = request.data["pro"]
#         year = request.data["year"]
#         program = Program.objects.get(pk=pro)
#         courses = Subject.objects.filter(program=program).filter(year=year)
#         topics = []
#         for course in courses:
#             topics.append(Topic.objects.filter(subject=course))
#         videos = []
#         for topic in topics:
#             # videos.append(Video.objects.filter(topic=topic))
#             print(topic)
            
#         print(videos)
#         # videos = Video.objects.filter(topic=topics)

#         cs = SubjectSerializer(courses, many=True)
#         # ts = TopicSerializer(topics, many=True)
#         # vs = VideoSerializer(videos, many=True)
#         print(courses)
#         print("hi")
#         cont = {
#             "Course Data": cs.data,
#             # "Topic Data": ts.data,
#             # "Video Data": vs.data,
#             "message":"hi"
#         }
#         return Response(cont)


@api_view(['POST'])
def newResquest(request):
    try:        
        program = Program.objects.get(id=request.data['pro'])
        subjects = Subject.objects.filter(program=program, year=request.data['year'])
        serialized_data = ASubjectSerializer(subjects, many=True).data
        
        return Response(serialized_data)
    except Program.DoesNotExist:
        return Response({'error': 'Program not found'}, status=404)
    except Exception as e:
        return Response({'error': str(e)}, status=500)