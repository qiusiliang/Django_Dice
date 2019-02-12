import xadmin
from .models import Pools, PoolsImage, Banner


class PoolsAdmin(object):
    list_display = ["pools_sn", "name", "bonus_sn", "bonus", "pools_brief", "is_new", "is_hot", "add_time"]
    list_per_page = 10
    show_detail_fields=['name']
    refresh_times=(3,5,10)
    search_fields = ['name', ]
    list_filter = ["pools_sn", "name", "bonus_sn", "bonus", "pools_brief", "is_new", "is_hot", "add_time"]
    style_fields = {"goods_desc": "ueditor"}
    show_bookmarks = False

    class GoodsImagesInline(object):
        model = PoolsImage
        exclude = ["add_time"]
        extra = 1
        style = 'tab'

    inlines = [GoodsImagesInline]


xadmin.site.register(Pools, PoolsAdmin)
