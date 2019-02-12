# -*- coding:utf-8 -*-
from datetime import datetime
from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):
    name = models.CharField(max_length=30, null=True, blank=True, verbose_name="姓名")
    birthday = models.DateField(null=True, blank=True, verbose_name="出生日期")
    mobile = models.CharField(max_length=11, null=True, blank=True, verbose_name="电话")
    email = models.CharField(max_length=100, null=True, blank=True, verbose_name="邮件")
    gender = models.CharField(max_length=6, choices=(("male", u"男"), ("female", "女")), default="female",
                              verbose_name="gender")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="时间戳")


class Meta:
    ordering = ['add_time']
    verbose_name = "用户"
    verbose_name_plural = "用户"

    def __str__(self):
        return self.name


class VerifyCode(models.Model):
    code = models.CharField(max_length=10, verbose_name="验证码")
    mobile = models.CharField(max_length=11, verbose_name="电话")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="时间戳")

    class Meta:
        verbose_name = "验证码"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.code
