# -*- coding:utf-8 -*-
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import mixins
from rest_framework import generics
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.throttling import UserRateThrottle

from rest_framework_extensions.cache.mixins import CacheResponseMixin

from apps.pools.serializers import *
from apps.pools.models import *


class PoolsPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'page_size'
    page_query_param = "page"
    max_page_size = 100

class PoolsViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    List all pools
    """
    queryset = Pools.objects.all().order_by("pools_sn")
    serializer_class = PoolsSerializer

