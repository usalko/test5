from django.db import models

from .tg_chat import TgChat
from .tg_user import TgUser

# For more details @see https://core.telegram.org/type/InputPeer


class TgInputPeer(models.Model):

    class PeerType(models.TextChoices):
        # An empty constructor, no user or chat is defined.
        EMPTY = 'empty', 'empty'
        # Defines the current user.
        SELF = 'self', 'self'
        # Defines a chat for further interaction.
        CHAT = 'chat', 'chat'
        # Defines a user for further interaction.
        USER = 'user', 'user'
        # Defines a channel for further interaction.
        CHANNEL = 'channel', 'channel'
        # Defines a min user that was seen in a certain message of a certain chat.
        USER_FROM_MESSAGE = 'user_from_message', 'user from message'
        # Defines a min channel that was seen in a certain message of a certain chat.
        CHANNEL_FROM_MESSAGE = 'channel_from_message', 'channel from message'

    type = models.CharField(max_length=20, choices=PeerType.choices, default=PeerType.EMPTY,
                            help_text='Type of peer, can be either “empty”, “self”, “chat”, “user”, “channel”, “user from message” or “channel from message”')
    chat_id: int
    chat = models.ForeignKey[TgChat](
        TgChat,
        on_delete=models.CASCADE,
        related_name='tg_input_peer_tg_chats',
        related_query_name='tg_input_peer_tg_chat',
        help_text='Defines a chat for further interaction.',
        null=True
    )
    user_id: int
    user = models.ForeignKey[TgUser](
        TgUser,
        on_delete=models.CASCADE,
        related_name='tg_input_peer_tg_users',
        related_query_name='tg_input_peer_tg_user',
        help_text='Defines a user for further interaction.',
        null=True
    )
    channel_id: int
    channel = models.ForeignKey[TgChat](
        TgChat,
        on_delete=models.CASCADE,
        related_name='tg_input_peer_tg_channels',
        related_query_name='tg_input_peer_tg_channel',
        help_text='Defines a channel for further interaction.',
        null=True
    )
    access_hash: models.IntegerField(
        'Access hash for “user” or “channel” access type')

    peer_id: int
    peer = models.ForeignKey['TgInputPeer'](
        'TgInputPeer',
        on_delete=models.CASCADE,
        related_name='tg_input_peer_tg_peers',
        related_query_name='tg_input_peer_tg_peer',
        help_text='Defines a min user that was seen in a certain message of a certain chat or defines a min channel that was seen in a certain message of a certain chat',
        null=True
    )

    class Meta:
        verbose_name = 'Источник реакции'
        verbose_name_plural = 'Источники реакции'
