from typing import Optional

from django.contrib.auth import models as auth_models
from emojis import models as emojis_models
from strawberry_django_plus import gql


@gql.django.aggregations(auth_models.User)
class UserAggregations:

    first_name: gql.auto
    last_name: gql.auto


@gql.django.aggregations(emojis_models.TgChat)
class TgChatAggregations:

    id: gql.auto
    type: gql.auto
    title: gql.auto


@gql.django.aggregations(emojis_models.TgInputPeer)
class TgInputPeerAggregations:

    id: gql.auto
    type: gql.auto
    chat: Optional['TgChatAggregations']
    user: Optional['TgUserAggregations']
    channel: Optional['TgChatAggregations']
    peer: Optional['TgInputPeerAggregations']


@gql.django.aggregations(emojis_models.TgMessageViews)
class TgMessageViewsAggregations:

    id: gql.auto
    stamp: gql.auto
    peer: Optional['TgInputPeerAggregations']
    message: Optional['TgMessageAggregations']
    views: gql.auto
    forwards: gql.auto


@gql.django.aggregations(emojis_models.TgMessageReplies)
class TgMessageRepliesAggregations:

    id: gql.auto
    message_views: Optional['TgMessageViewsAggregations']
    comments: gql.auto
    replies: gql.auto
    replies_pts: gql.auto
    recent_repliers: Optional['TgInputPeerAggregations']
    channel: Optional['TgChatAggregations']
    max: Optional['TgMessageAggregations']
    read_max: Optional['TgMessageAggregations']


@gql.django.aggregations(emojis_models.TgMessage)
class TgMessageAggregations:

    id: gql.auto
    stamp: gql.auto
    chat: Optional['TgChatAggregations']


@gql.django.aggregations(emojis_models.TgReaction)
class TgReactionAggregations:

    id: gql.auto
    peer: Optional['TgInputPeerAggregations']
    message: Optional['TgMessageAggregations']
    type: gql.auto
    emoticon: gql.auto


@gql.django.aggregations(emojis_models.TgUser)
class TgUserAggregations:

    id: gql.auto
    is_bot: gql.auto
    first_name: gql.auto
    last_name: gql.auto
    username: gql.auto
    language_code: gql.auto
