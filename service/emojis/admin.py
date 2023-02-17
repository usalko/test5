from django.contrib import admin

from .models import *


class TgChatAdmin(admin.ModelAdmin):
    ...


class TgInputPeerAdmin(admin.ModelAdmin):
    ...


class TgMessageAdmin(admin.ModelAdmin):
    ...


class TgReacttionAdmin(admin.ModelAdmin):
    ...


class TgUserAdmin(admin.ModelAdmin):
    ...


admin.site.register(TgChat, TgChatAdmin)
admin.site.register(TgInputPeer, TgInputPeerAdmin)
admin.site.register(TgMessage, TgMessageAdmin)
admin.site.register(TgReaction, TgReacttionAdmin)
admin.site.register(TgUser, TgUserAdmin)
