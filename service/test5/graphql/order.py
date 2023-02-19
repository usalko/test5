from typing import Optional

from django.contrib.auth import models as auth_models
from emojis import models as emojis_models
from strawberry_django_plus import gql


@gql.django.order(auth_models.User)
class UserOrder:

    first_name: gql.auto
    last_name: gql.auto


@gql.django.order(emojis_models.TgChat)
class TgChatOrder:

    id: gql.auto
    type: gql.auto
    title: gql.auto


@gql.django.order(emojis_models.TgInputPeer)
class TgInputPeerOrder:

    id: gql.auto
    type: gql.auto
    chat: Optional['TgChatOrder']
    user: Optional['TgUserOrder']
    channel: Optional['TgChatOrder']
    peer: Optional['TgInputPeerOrder']


@gql.django.order(emojis_models.TgMessageViews)
class TgMessageViewsOrder:

    id: gql.auto
    stamp: gql.auto
    peer: Optional['TgInputPeerOrder']
    message: Optional['TgMessageOrder']
    views: gql.auto
    forwards: gql.auto


@gql.django.order(emojis_models.TgMessageReplies)
class TgMessageRepliesOrder:

    id: gql.auto
    message_views: Optional['TgMessageViewsOrder']
    comments: gql.auto
    replies: gql.auto
    replies_pts: gql.auto
    recent_repliers: Optional['TgInputPeerOrder']
    channel: Optional['TgChatOrder']
    max: Optional['TgMessageOrder']
    read_max: Optional['TgMessageOrder']


@gql.django.order(emojis_models.TgMessage)
class TgMessageOrder:

    id: gql.auto
    stamp: gql.auto
    chat: Optional['TgChatOrder']


@gql.django.order(emojis_models.TgReaction)
class TgReactionOrder:

    id: gql.auto
    peer: Optional['TgInputPeerOrder']
    message: Optional['TgMessageOrder']
    type: gql.auto
    emoticon: gql.auto


@gql.django.order(emojis_models.TgUser)
class TgUserOrder:

    id: gql.auto
    is_bot: gql.auto
    first_name: gql.auto
    last_name: gql.auto
    username: gql.auto
    language_code: gql.auto
