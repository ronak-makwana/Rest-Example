from rest_framework import serializers
from .models import DemoModel

class modelserializer(serializers.ModelSerializer):
    class Meta:
        model = DemoModel
        fields ='__all__'