from typing import Optional

from django.contrib.auth import models as auth_models
from emojis import models as emojis_models
from strawberry_django_plus import gql


@gql.django.filter(auth_models.User, lookups=True)
class UserFilters:

    first_name: gql.auto
    last_name: gql.auto


@gql.django.filter(emojis_models.TgChat, lookups=True)
class TgChatFilters:

    id: gql.auto
    type: gql.auto
    title: gql.auto


@gql.django.filter(emojis_models.TgInputPeer, lookups=True)
class TgInputPeerFilters:

    id: gql.auto
    type: gql.auto
    chat: Optional['TgChatFilters']
    user: Optional['TgUserFilters']
    channel: Optional['TgChatFilters']
    peer: Optional['TgInputPeerFilters']


@gql.django.filter(emojis_models.TgMessageViews, lookups=True)
class TgMessageViewsFilters:

    id: gql.auto
    stamp: gql.auto
    peer: Optional['TgInputPeerFilters']
    message: Optional['TgMessageFilters']
    views: gql.auto
    forwards: gql.auto


@gql.django.filter(emojis_models.TgMessageReplies, lookups=True)
class TgMessageRepliesFilters:

    id: gql.auto
    message_views: Optional['TgMessageViewsFilters']
    comments: gql.auto
    replies: gql.auto
    replies_pts: gql.auto
    recent_repliers: Optional['TgInputPeerFilters']
    channel: Optional['TgChatFilters']
    max: Optional['TgMessageFilters']
    read_max: Optional['TgMessageFilters']


@gql.django.filter(emojis_models.TgMessage, lookups=True)
class TgMessageFilters:

    id: gql.auto
    stamp: gql.auto
    chat: Optional['TgChatFilters']


@gql.django.filter(emojis_models.TgReaction, lookups=True)
class TgReactionFilters:

    id: gql.auto
    peer: Optional['TgInputPeerFilters']
    message: Optional['TgMessageFilters']
    type: gql.auto
    emoticon: gql.auto


@gql.django.filter(emojis_models.TgUser, lookups=True)
class TgUserFilters:

    id: gql.auto
    is_bot: gql.auto
    first_name: gql.auto
    last_name: gql.auto
    username: gql.auto
    language_code: gql.auto
