# # -*- coding: utf-8 -*-
# import django_filters
#
# from .models import Pools
#
#
# class PoolsFilter(django_filters.rest_framework.FilterSet):
#     bonusmin = django_filters.NumberFilter(name='bonus', help_text="最低赔率", lookup_expr='gte')
#     bouusmax = django_filters.NumberFilter(name='bonus', help_text="最高赔率", lookup_expr='lte')
#
#
# class Meta:
#     model = Pools
#     fields = ['bonusmin', 'bouusmax', 'is_hot', 'is_new']
