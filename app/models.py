from django.db import models

# Create your models here.
class Student(models.Model):
    student = models.CharField(max_length=50,unique=True,null=True)

    def __str__(self) -> str:
        return self.student

class Subject(models.Model):
    subject = models.CharField(max_length=50,unique=True,null=True)

    def __str__(self) -> str:
        return self.subject

class StudentSubjectMarks(models.Model):
    student = models.ForeignKey(Student,on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject,on_delete=models.CASCADE)
    marks = models.FloatField()

    class Meta:
        unique_together = ('student','subject')

    def __str__(self) -> str:
        return f"{self.student}\t{self.subject}\t{self.marks}"