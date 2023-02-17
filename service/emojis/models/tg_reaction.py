from django.db import models
from .tg_message import TgMessage
from .tg_input_peer import TgInputPeer

# Create your models here.


class TgReaction(models.Model):
    
    class ReactionType(models.TextChoices):
        # No reaction.
        EMPTY = 'empty', 'empty'
        # Normal emoji message reaction.
        EMOJI = 'emoji', 'emoji'
        # Custom emoji message reaction.
        CUSTOM_EMOJI = 'custom_emoji', 'custom emoji'

    peer_id: int
    peer = models.ForeignKey[TgInputPeer](
        TgInputPeer,
        on_delete=models.CASCADE,
        related_name='tg_reaction_tg_input_peers',
        related_query_name='tg_reaction_tg_input_peer',
    )
    message_id: int
    message = models.ForeignKey[TgMessage](
        TgMessage,
        on_delete=models.CASCADE,
        related_name='tg_reaction_tg_messages',
        related_query_name='tg_reaction_tg_message',
    )
    
    type = models.CharField(max_length=12, choices=ReactionType.choices, default=ReactionType.EMPTY,
                          help_text='Type of reaction, can be either “empty”, “emoji” or “custom emoji”')
    emoticon = models.CharField(null=True, max_length=1)
    document_id = models.IntegerField('Custom emoji (fro details @see https://core.telegram.org/api/custom-emoji)', null=True)

    class Meta:
        verbose_name = 'реакция'
        verbose_name_plural = 'реакции'
