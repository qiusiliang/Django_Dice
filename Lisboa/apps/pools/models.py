# -*- coding:utf-8 -*-
from datetime import datetime
from django.db import models


# Create your models here.
class Pools(models.Model):
    """
    奖池
    """
    pools_sn = models.CharField(max_length=50, default="", verbose_name="奖池产品编号")
    name = models.CharField(max_length=100, verbose_name="奖池产品名称")
    bonus_sn = models.CharField(max_length=50, default="", verbose_name="奖池产品编码")
    bonus = models.IntegerField(default=0, verbose_name="倍数")
    pools_brief = models.TextField(max_length=500, verbose_name="简短描述")
    pools_front_image = models.ImageField(upload_to="pools/images/", null=True, blank=True, verbose_name="封面图")
    is_new = models.BooleanField(default=False, verbose_name="是否新品")
    is_hot = models.BooleanField(default=False, verbose_name="是否热销")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="时间戳")

    class Meta:
        verbose_name = '奖池产品规则'
        verbose_name_plural = verbose_name


    def __str__(self):
        return self.name


class PoolsImage(models.Model):
    """
    轮播图
    """
    pools = models.ForeignKey(Pools, verbose_name="奖品", on_delete=models.CASCADE,related_name="images")
    image = models.ImageField(upload_to="", verbose_name="图片", null=True, blank=True)
    add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")

    class Meta:
        verbose_name = '中奖标识'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.pools.name


class Banner(models.Model):
    """
    轮播的
    """
    pools = models.ForeignKey(Pools, verbose_name="商品",on_delete=models.CASCADE)
    image = models.ImageField(upload_to='banner', verbose_name="轮播图片")
    index = models.IntegerField(default=0, verbose_name="轮播顺序")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")

    class Meta:
        verbose_name = '中将标识轮播'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.pools.name