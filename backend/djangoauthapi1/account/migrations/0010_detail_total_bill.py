# Generated by Django 4.0.3 on 2022-07-22 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0009_detail_product_quantity_alter_detail_cart_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='detail',
            name='total_bill',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
    ]
