from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator


class Branch(models.Model):
    branchName = models.CharField(max_length=50)
    course_duration = models.IntegerField(validators=[MinValueValidator(limit_value=1, message="Course duration must be greater than or equal to 1."),MaxValueValidator(limit_value=5, message="Course duration must be less than or equal to 5."),])

    def __str__(self) -> str:
        return f"{self.branchName}"

class Department(models.Model):
    branchName = models.ForeignKey(Branch,on_delete=models.PROTECT)
    departmentName = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f"{self.departmentName} ({self.branchName})"

class Program(models.Model):
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
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

class Student(models.Model):
    name = models.CharField(max_length=100)
    regno = models.CharField(max_length=12,primary_key=True) 
    password = models.CharField(max_length=200)
    branch = models.ForeignKey(Branch,on_delete=models.PROTECT)
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
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

class Video(models.Model):
    url = models.URLField()
    branch = models.ForeignKey(Branch,on_delete=models.PROTECT)
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    opt = (
        ("1st-Year","1st-Year"),
        ("2nd-Year","2nd-Year"),
        ("3rd-Year","3rd-Year"),
        ("4th-Year","4th-Year"),
        ("5th-Year","5th-Year"),
    )
    year = models.CharField(choices=opt, max_length=50)
    program = models.ForeignKey(Program,on_delete=models.PROTECT,null=True)
    description = models.TextField(null=True)
    def __str__(self) -> str:
        return f"{self.url}"

