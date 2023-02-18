from django.db import models

from .tg_chat import TgChat
from .tg_input_peer import TgInputPeer
from .tg_user import TgUser
from .tg_message_views import TgMessageViews
from .tg_message import TgMessage


class TgMessageReplies(models.Model):

    message_views_id: int
    message_views = models.ForeignKey[TgMessageViews](
        TgMessageViews,
        on_delete=models.PROTECT,
        related_name='tg_message_replies_tg_message_views',
        related_query_name='tg_message_replies_tg_message_views',
    )

    comments = models.BooleanField(
        'Whether message-replies contains information about the comment section of a channel post, or a simple message thread', null=True)
    replies = models.IntegerField(
        'Contains the total number of replies in this thread or comment section.')
    replies_pts = models.IntegerField(
        'PTS of the message that started this thread.')

    recent_repliers = models.ManyToManyField[TgInputPeer](
        TgInputPeer,
        blank=True,
        related_name='tg_message_replies_tg_input_peer',
        help_text='For channel post comments, contains information about the last few comment posters for a specific thread, to show a small list of commenter profile pictures in client previews.',
    )

    channel_id: int
    channel = models.ForeignKey[TgChat](
        TgChat,
        null=True,
        on_delete=models.PROTECT,
        related_name='tg_message_replies_tg_channels',
        related_query_name='tg_message_replies_tg_channel',
        help_text='For channel post comments, contains the ID of the associated discussion supergroup',
    )

    _max_id: int
    _max = models.ForeignKey[TgMessage](
        TgMessage,
        null=True,
        on_delete=models.PROTECT,
        related_name='tg_message_replies_tg_maxes',
        related_query_name='tg_message_replies_tg_max',
        help_text='ID of the latest message in this thread or comment section.',
    )

    read_max_id: int
    read_max = models.ForeignKey[TgMessage](
        TgMessage,
        null=True,
        on_delete=models.PROTECT,
        related_name='tg_message_replies_tg_read_maxes',
        related_query_name='tg_message_replies_tg_read_max',
        help_text='Contains the ID of the latest read message in this thread or comment section.',
    )

    class Meta:
        verbose_name = 'ответ'
        verbose_name_plural = 'ответы'
