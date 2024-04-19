from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator


class Faculty(models.Model):
    facultyname = models.CharField(max_length=150)

    def __str__(self) -> str:
        return f"{self.facultyname}"


class Department(models.Model):
    facultyname = models.ForeignKey(Faculty,on_delete=models.PROTECT)
    departmentName = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f"{self.departmentName} | {self.facultyname}"


class Program(models.Model):
    faculty = models.ForeignKey(Faculty, on_delete=models.PROTECT)
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    programname = models.CharField(max_length=200)
    course_duration = models.IntegerField(validators=[MinValueValidator(limit_value=1, message="Course duration must be greater than or equal to 1."),MaxValueValidator(limit_value=5, message="Course duration must be less than or equal to 5."),])

    def __str__(self) -> str:
        return f"{self.programname}"


class Subject(models.Model):
    faculty = models.ForeignKey(Faculty, on_delete=models.PROTECT)
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    program = models.ForeignKey(Program, on_delete=models.PROTECT)
    opt = (
        ("1st-Year","1st-Year"),
        ("2nd-Year","2nd-Year"),
        ("3rd-Year","3rd-Year"),
        ("4th-Year","4th-Year"),
        ("5th-Year","5th-Year"),
    )
    year = models.CharField(choices=opt, max_length=50)
    subject = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f"{self.subject}, {self.department}"


class Topic(models.Model):
    faculty = models.ForeignKey("home.Faculty", on_delete=models.PROTECT)
    department = models.ForeignKey("home.Department", on_delete=models.PROTECT)
    program = models.ForeignKey(Program, on_delete=models.PROTECT)
    opt = (
        ("1st-Year","1st-Year"),
        ("2nd-Year","2nd-Year"),
        ("3rd-Year","3rd-Year"),
        ("4th-Year","4th-Year"),
        ("5th-Year","5th-Year"),
    )
    year = models.CharField(choices=opt, max_length=50)
    subject = models.ForeignKey("home.Subject", on_delete=models.PROTECT)
    topic = models.CharField(max_length=100)

    def __str__(self) -> str:
        return f"{self.topic} | {self.department} | {self.faculty}"


class Video(models.Model):
    faculty = models.ForeignKey(Faculty, on_delete=models.PROTECT)
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    program = models.ForeignKey(Program, on_delete=models.PROTECT)
    opt = (
        ("1st-Year","1st-Year"),
        ("2nd-Year","2nd-Year"),
        ("3rd-Year","3rd-Year"),
        ("4th-Year","4th-Year"),
        ("5th-Year","5th-Year"),
    )
    year = models.CharField(choices=opt, max_length=50)
    subject = models.ForeignKey(Subject, on_delete=models.PROTECT)
    topic = models.ForeignKey(Topic, on_delete=models.PROTECT)
    description = models.TextField()
    url = models.URLField()
    viewby = models.ManyToManyField('home.Student', related_name='videos_viewed',null=True,blank=True)  
    like = models.ManyToManyField('home.Student', related_name='videos_liked',null=True,blank=True)  
    def __str__(self) -> str:
        return f"{self.description}"  


class Student(models.Model): 
    name = models.CharField(max_length=150)
    regno = models.CharField(max_length=12,primary_key=True) 
    password = models.CharField(max_length=200)
    faculty = models.ForeignKey(Faculty,on_delete=models.PROTECT)
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    program = models.ForeignKey(Program, on_delete=models.CASCADE)
    opt = (
        ("1st-Year","1st-Year"),
        ("2nd-Year","2nd-Year"),
        ("3rd-Year","3rd-Year"),
        ("4th-Year","4th-Year"),
        ("5th-Year","5th-Year"),
    )
    year = models.CharField(choices=opt, max_length=50)

    def __str__(self) -> str:
        return f"{self.regno}, {self.department}"
    
class Comments(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    comment = models.TextField()
    time = models.DateTimeField(auto_now_add=True,null=True)
