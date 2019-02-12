# -*- coding:utf-8 -*-
from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'apps.users'
    verbose_name = u"用户信息设定"


def ready(self):
    import users.signals
