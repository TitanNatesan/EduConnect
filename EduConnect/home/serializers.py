from rest_framework import serializers
from .models import Department,Subject,Video,Topic

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'facultyname', 'departmentName']

class SubjectSerial(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'year', 'department',"subject"]

class VideoSerial(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'

class TopicSerial(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'