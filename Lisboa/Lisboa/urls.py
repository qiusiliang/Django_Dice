from django.conf.urls import url, include
import xadmin
from Lisboa.settings import MEDIA_ROOT
from django.views.static import serve
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from rest_framework_jwt.views import obtain_jwt_token

from pools.urls import router as pools_router
from apps.users.views import SmsCodeViewset, UserViewset

router = DefaultRouter()

router.register(r'codes', SmsCodeViewset, base_name="codes")
router.register(r'users', UserViewset,base_name="users")
urlpatterns = [
    url('xadmin/', xadmin.site.urls),
    url('media/(?P<path>.*)$', serve, {"document_root": MEDIA_ROOT}),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^api/', include(router.urls)),
    url(r'^api/', include(pools_router.urls)),
    url(r'^docs/', include_docs_urls(title="葡京骰子")),
    url(r'^api-token-auth/', views.obtain_auth_token),
]
