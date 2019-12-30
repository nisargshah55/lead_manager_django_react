from .models import Leads
from rest_framework import viewsets, permissions
from .serializers import LeadsSerializer

class LeadsViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing leads.
    """
    queryset = Leads.objects.all()
    serializer_class = LeadsSerializer
    permission_classes = [permissions.AllowAny]