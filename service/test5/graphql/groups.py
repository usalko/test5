from typing import Optional

from django.contrib.auth import models as auth_models
from emojis import models as emojis_models
from strawberry_django_plus import gql


@gql.django.groups(auth_models.User)
class UserGroups:

    first_name: gql.auto
    last_name: gql.auto


@gql.django.groups(emojis_models.TgChat)
class TgChatGroups:

    id: gql.auto
    type: gql.auto
    title: gql.auto


@gql.django.groups(emojis_models.TgInputPeer)
class TgInputPeerGroups:

    id: gql.auto
    type: gql.auto
    chat: Optional['TgChatGroups']
    user: Optional['TgUserGroups']
    channel: Optional['TgChatGroups']
    peer: Optional['TgInputPeerGroups']


@gql.django.groups(emojis_models.TgMessageViews)
class TgMessageViewsGroups:

    id: gql.auto
    stamp: gql.auto
    peer: Optional['TgInputPeerGroups']
    message: Optional['TgMessageGroups']
    views: gql.auto
    forwards: gql.auto


@gql.django.groups(emojis_models.TgMessageReplies)
class TgMessageRepliesGroups:

    id: gql.auto
    message_views: Optional['TgMessageViewsGroups']
    comments: gql.auto
    replies: gql.auto
    replies_pts: gql.auto
    recent_repliers: Optional['TgInputPeerGroups']
    channel: Optional['TgChatGroups']
    max: Optional['TgMessageGroups']
    read_max: Optional['TgMessageGroups']


@gql.django.groups(emojis_models.TgMessage)
class TgMessageGroups:

    id: gql.auto
    stamp: gql.auto
    chat: Optional['TgChatGroups']


@gql.django.groups(emojis_models.TgReaction)
class TgReactionGroups:

    id: gql.auto
    peer: Optional['TgInputPeerGroups']
    message: Optional['TgMessageGroups']
    type: gql.auto
    emoticon: gql.auto


@gql.django.groups(emojis_models.TgUser)
class TgUserGroups:

    id: gql.auto
    is_bot: gql.auto
    first_name: gql.auto
    last_name: gql.auto
    username: gql.auto
    language_code: gql.auto
