# -*- coding:utf-8 -*-
from datetime import datetime

from django.db import models
from django.contrib.auth import get_user_model

from apps.pools.models import Pools

User = get_user_model()


class Betting(models.Model):
    """
    投注单
    """


user = models.ForeignKey(User, verbose_name=u"用户", on_delete=models.CASCADE)
pool = models.ForeignKey(Pools, verbose_name=u"奖池商品", on_delete=models.CASCADE)
betting_sn = models.CharField(max_length=50, default="", verbose_name="购买期号")
nums = models.IntegerField(default=0, verbose_name="购买数量")
add_time = models.DateTimeField(default=datetime.now, verbose_name=u"时间戳")


class Meta:
    verbose_name = '投注单'
    verbose_name_plural = verbose_name


def __str__(self):
    return str(self.betting_sn)


class OrderInfo(models.Model):
    """
    支付生效单
    """
    ORDER_STATUS = (
        ("TRADE_SUCCESS", "成功"),
        ("TRADE_CLOSED", "超时关闭"),
        ("WAIT_BUYER_PAY", "交易创建"),
        ("TRADE_FINISHED", "交易结束"),
        ("paying", "待支付"),
    )

    betting = models.ForeignKey(Betting, verbose_name=u"投注单号", on_delete=models.CASCADE)
    order_sn = models.CharField(max_length=30, null=True, blank=True, unique=True, verbose_name="订单号")
    trade_no = models.CharField(max_length=100, unique=True, null=True, blank=True, verbose_name=u"交易号")
    pay_status = models.CharField(choices=ORDER_STATUS, default="paying", max_length=30, verbose_name="订单状态")
    post_script = models.CharField(max_length=200, verbose_name="订单留言")
    order_mount = models.FloatField(default=0.0, verbose_name="订单金额")
    pay_time = models.DateTimeField(null=True, blank=True, verbose_name="支付时间")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="时间戳")

    class Meta:
        verbose_name = u"支付生效单"
        verbose_name_plural = verbose_name

    def __str__(self):
        return str(self.betting.betting_sn)


class OrderPools(models.Model):
    """
    订单的商品详情
    """
    order = models.ForeignKey(OrderInfo, verbose_name="订单信息", related_name="Pools", on_delete=models.CASCADE)
    pools = models.ForeignKey(Pools, verbose_name="奖池商品", on_delete=models.CASCADE)
    pools_num = models.IntegerField(default=0, verbose_name="奖池商品数量")
    betting_sn = models.CharField(max_length=50, default="", verbose_name="购买期号")
    bonus = models.IntegerField(default=0, verbose_name="中奖金额")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="时间戳")

    class Meta:
        verbose_name = "奖池订单商品"
        verbose_name_plural = verbose_name

    def __str__(self):
        return str(self.order.order_sn)
