# Generated by Django 2.1 on 2018-11-20 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pools', '0003_auto_20181120_1409'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pools',
            name='bonus_sn',
            field=models.CharField(default='', max_length=50, verbose_name='奖池产品编码'),
        ),
        migrations.AlterField(
            model_name='pools',
            name='name',
            field=models.CharField(max_length=100, verbose_name='奖池产品名称'),
        ),
        migrations.AlterField(
            model_name='pools',
            name='pools_sn',
            field=models.CharField(default='', max_length=50, verbose_name='奖池产品货号'),
        ),
    ]
