from typing import List, Optional

from strawberry.types.info import Info
from strawberry_django_plus import gql
from strawberry_django_plus.directives import SchemaDirectiveExtension
from strawberry_django_plus.gql import relay
from strawberry_django_plus.optimizer import DjangoOptimizerExtension

from .filters import *
from .order import *
from .types import *


@gql.type
class Query:

    node: Optional[gql.Node] = gql.django.node()

    tg_chats: List[TgChat] = gql.django.field(
        filters=TgChatFilters, order=TgChatOrder, pagination=True)
    tg_chats_relay_connection: relay.Connection[TgChat] = gql.django.connection(
        filters=TgChatFilters, order=TgChatOrder)

    tg_input_peers: List[TgInputPeer] = gql.django.field(
        filters=TgInputPeerFilters, order=TgInputPeerOrder, pagination=True)
    tg_input_peers_relay_connection: relay.Connection[TgInputPeer] = gql.django.connection(
        filters=TgInputPeerFilters, order=TgInputPeerOrder)

    tg_message_views: List[TgMessageViews] = gql.django.field(
        filters=TgMessageViewsFilters, order=TgMessageViewsOrder, pagination=True)
    tg_message_views_relay_connection: relay.Connection[TgMessageViews] = gql.django.connection(
        filters=TgMessageViewsFilters, order=TgMessageViewsOrder)

    tg_message_replies: List[TgMessageReplies] = gql.django.field(
        filters=TgMessageRepliesFilters, order=TgMessageRepliesOrder, pagination=True)
    tg_message_replies_relay_connection: relay.Connection[TgMessageReplies] = gql.django.connection(
        filters=TgMessageRepliesFilters, order=TgMessageRepliesOrder)

    tg_messages: List[TgMessage] = gql.django.field(
        filters=TgMessageFilters, order=TgMessageOrder, pagination=True)
    tg_messages_relay_connection: relay.Connection[TgMessage] = gql.django.connection(
        filters=TgMessageFilters, order=TgMessageOrder)

    tg_reactions: List[TgReaction] = gql.django.field(
        filters=TgReactionFilters, order=TgReactionOrder, pagination=True)
    tg_reactions_relay_connection: relay.Connection[TgReaction] = gql.django.connection(
        filters=TgReactionFilters, order=TgReactionOrder)

    tg_users: List[TgUser] = gql.django.field(
        filters=TgUserFilters, order=TgUserOrder, pagination=True)
    tg_users_relay_connection: relay.Connection[TgUser] = gql.django.connection(
        filters=TgUserFilters, order=TgUserOrder)


schema = gql.Schema(
    query=Query,
    mutation=None,
    extensions=[
        SchemaDirectiveExtension,
        DjangoOptimizerExtension,
    ],
)
