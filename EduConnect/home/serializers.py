from rest_framework import serializers
from .models import Faculty,Department,Program,Subject,Video,Topic,Student,Comments,VideoRuntime


class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = "__all__"

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id','student','comment','time']
        
class VRSerial(serializers.ModelSerializer):
    student = StudentSerializer()
    video = VideoSerializer()
    class Meta:
        model = VideoRuntime
        fields = "__all__"
    
class VideoRuntimeSerializer(serializers.Serializer):
    video_id = serializers.IntegerField()
    description = serializers.CharField()
    total_runtime = serializers.FloatField()