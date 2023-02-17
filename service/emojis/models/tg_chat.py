from django.db import models


class TgChat(models.Model):

    class ChatType(models.TextChoices):
        PRIVATE = 'private', 'private'
        GROUP = 'group', 'group'
        SUPERGROUP = 'supergroup', 'supergroup'
        CHANNEL = 'channel', 'channel'

    type = models.CharField(max_length=10, choices=ChatType.choices, default=ChatType.PRIVATE,
                              help_text='Type of chat, can be either “private”, “group”, “supergroup” or “channel”')
    title = models.CharField(null=True, max_length=128,
                             help_text='Optional. Title, for supergroups, channels and group chats')

    class Meta:
        verbose_name = 'чат, группа, супергруппа, канал'
        verbose_name_plural = 'чаты, группы, супергруппы, каналы'
