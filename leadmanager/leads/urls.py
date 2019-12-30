from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import LeadsViewSet

router = DefaultRouter()
router.register(r'api/leads', LeadsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]