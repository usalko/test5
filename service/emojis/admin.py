from django.contrib import admin

from .models import *


class TgBasicAdmin(admin.ModelAdmin):
    ...


admin.site.register(TgChat, TgBasicAdmin)
admin.site.register(TgInputPeer, TgBasicAdmin)
admin.site.register(TgMessage, TgBasicAdmin)
admin.site.register(TgReaction, TgBasicAdmin)
admin.site.register(TgMessageViews, TgBasicAdmin)
admin.site.register(TgMessageReplies, TgBasicAdmin)
admin.site.register(TgUser, TgBasicAdmin)
