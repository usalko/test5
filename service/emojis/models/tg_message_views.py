from django.db import models
from .tg_message import TgMessage
from .tg_input_peer import TgInputPeer


class TgMessageViews(models.Model):
    
    stamp = models.DateTimeField('Datetime of reaction request')

    peer_id: int
    peer = models.ForeignKey[TgInputPeer](
        TgInputPeer,
        on_delete=models.CASCADE,
        related_name='tg_message_views_tg_input_peers',
        related_query_name='tg_message_views_tg_input_peer',
    )
    message_id: int
    message = models.ForeignKey[TgMessage](
        TgMessage,
        on_delete=models.CASCADE,
        related_name='tg_message_views_tg_messages',
        related_query_name='tg_message_views_tg_message',
    )
    
    views = models.IntegerField('View count of message', null=True)
    forwards = models.IntegerField('Forward count of message', null=True)

    class Meta:
        verbose_name = 'реакция'
        verbose_name_plural = 'реакции'
