from rest_framework import routers
from .views import PoolsViewSet

router = routers.DefaultRouter()
router.register(r'pools', PoolsViewSet)
