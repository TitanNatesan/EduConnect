from rest_framework import serializers
from .models import Department,Program,Video

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'branchName', 'departmentName']

class ProgramSerial(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ['id', 'year', 'department',"subject"]

class VideoSerial(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'