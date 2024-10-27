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
    faculty = FacultySerializer()
    department = DepartmentSerializer()
    program = ProgramSerializer()
    class Meta:
        model = Student
        exclude = ['password']

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

#################################################################33333

class AVideoSerializer(serializers.ModelSerializer):
    like_count = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = ['url', 'description', 'like_count']

    def get_like_count(self, obj):
        return obj.like.count()  # Count of students who liked the video


class ATopicSerializer(serializers.ModelSerializer):
    videos = AVideoSerializer(many=True, source='video_set')

    class Meta:
        model = Topic 
        fields = ['topic', 'videos']


class ASubjectSerializer(serializers.ModelSerializer):
    topics = serializers.SerializerMethodField()

    class Meta:
        model = Subject
        fields = ['subject', 'year', 'program', 'department', 'faculty', 'topics',"img"]

    def get_topics(self, obj):
        topics = Topic.objects.filter(subject=obj)
        return ATopicSerializer(topics, many=True).data