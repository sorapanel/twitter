# Generated by Django 5.1.3 on 2024-11-29 05:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manageusers', '0004_alter_customuser_email_alter_customuser_phone_num'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='email',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='phone_num',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
    ]
