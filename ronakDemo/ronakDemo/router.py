from crudops.views import modelviewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('data',modelviewset)