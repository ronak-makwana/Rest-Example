from django.db import models


class DemoModel(models.Model):
    First_Name=models.CharField(max_length=255)
    Last_Name=models.CharField(max_length=255)
    Email_id  = models.EmailField(verbose_name="Email")
