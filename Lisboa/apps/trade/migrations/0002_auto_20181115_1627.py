# Generated by Django 2.1 on 2018-11-15 16:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trade', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='betting',
            name='add_time',
        ),
        migrations.RemoveField(
            model_name='betting',
            name='betting_sn',
        ),
        migrations.RemoveField(
            model_name='betting',
            name='nums',
        ),
        migrations.RemoveField(
            model_name='betting',
            name='pool',
        ),
        migrations.RemoveField(
            model_name='betting',
            name='user',
        ),
    ]
