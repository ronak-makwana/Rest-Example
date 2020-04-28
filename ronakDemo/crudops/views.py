from django.shortcuts import render
from rest_framework import viewsets
from . import serializer
from .models import DemoModel
# Create your views here.
class modelviewset(viewsets.ModelViewSet):
    queryset = DemoModel.objects.all()
    serializer_class= serializer.modelserializer