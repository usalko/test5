from django.db import models

from .tg_user import TgUser
from .tg_chat import TgChat

# Create your models here.


class TgMessage(models.Model):
    stamp = models.DateTimeField('First datetime of message')
    updated1 = models.DateTimeField('First update stamp of message', null=True)
    updated2 = models.DateTimeField('Second update stamp of message', null=True)
    updated3 = models.DateTimeField('Third update stamp of message', null=True)
    updated4 = models.DateTimeField('Forth update stamp of message', null=True)
    thread_id = models.IntegerField('Optional. Unique identifier of a message thread to which the message belongs; for supergroups only', null=True)
    _from_id: int
    _from = models.ForeignKey[TgUser](
        TgUser,
        on_delete=models.CASCADE,
        related_name='tg_message_tg_users',
        related_query_name='tg_message_tg_user',
        null=True,
        help_text='Optional. Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.'
    )
    sender_chat_id: int
    sender_chat = models.ForeignKey[TgChat](
        TgChat,
        on_delete=models.CASCADE,
        related_name='tg_message_tg_sender_chats',
        related_query_name='tg_message_tg_sender_chat',
        null=True,
        help_text='Optional. Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.'
    )
    chat_id: int
    chat = models.ForeignKey[TgChat](
        TgChat,
        on_delete=models.CASCADE,
        related_name='tg_message_tg_chats',
        related_query_name='tg_message_tg_chat',
        help_text='Conversation the message belongs to.'
    )

    class Meta:
        verbose_name = 'сообщение'
        verbose_name_plural = 'сообщения'
