from rest_framework import serializers
from .models import *


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class StudentSubjectMarksSerializer(serializers.ModelSerializer):
    student_name = serializers.SerializerMethodField()
    subject_name = serializers.SerializerMethodField()

    def get_student_name(self,instance):
        stu_name = instance.student.student
        return stu_name

    def get_subject_name(self,instance):
        sub_name = instance.subject.subject
        return sub_name

    class Meta:
        model = StudentSubjectMarks
        fields = '__all__'
