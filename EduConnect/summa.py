from home.models import Department,Faculty,Program

artsdep = [
    'BioChemistry',
    'Biotechnology',
    'Chemistry',
    'Commerce',
    'Computer Application',
    'Computer Science',
    'Computer Technology',
    'Languages',
    'Management',
    'Mathematics',
    'Microbiology',
    'Physics',
]

engdep =[
    'Biomedical Engineering',
    'Computer Science and Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Biotechnology Engineering',
    'Mechanical Engineering',
    'Food Technology',
    'Electrical and Electronics Engineering',
    'Electronics and Communication Engineering',
]

fac = Faculty.objects.get(id=1)


for i in engdep:
    x = Department(
        facultyname=fac,
        departmentName = i 
    )
    x.save()


dept = Department.objects.get()