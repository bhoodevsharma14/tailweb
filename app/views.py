from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Student, Subject, StudentSubjectMarks
from .serializers import *
from rest_framework import exceptions
# Create your views here.

class StudentViewSet(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class SubjectViewSet(ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class StudentSubjectMarksViewSet(ModelViewSet):
    try:
        queryset = StudentSubjectMarks.objects.all()
        serializer_class = StudentSubjectMarksSerializer
        filterset_fields = ['student__student','student','subject','subject__subject']

        def create(self,request,*args,**kwargs):
            data = request.data
            obj = StudentSubjectMarks.objects.filter(student__student=data['student_name'],subject__subject=data['subject_name'])
            stu_obj = Student.objects.filter(student=data['student_name'])
            sub_obj = Subject.objects.filter(subject=data['subject_name'])
            if obj:
                obj = obj[0]
                obj.marks = float(obj.marks) + float(data['marks'])
                obj.save()
                serializer = StudentSubjectMarksSerializer(obj)
                return Response(serializer.data)
            
            else:
                if stu_obj:
                    stu_obj = stu_obj[0]
                else:
                    stu_obj = Student.objects.create(student=data['student_name'])
                if sub_obj:
                    sub_obj = sub_obj[0]
                else:
                    sub_obj = Subject.objects.create(subject=data['subject_name'])
                
                record = {
                    "student":stu_obj,
                    "subject":sub_obj,
                    "marks":data['marks']
                }
                new_record = StudentSubjectMarks.objects.create(**record)
                serialize = StudentSubjectMarksSerializer(new_record)
                return Response(serialize.data)
    except Exception as e:
        
        raise exceptions.ValidationError({"error":e},400)
