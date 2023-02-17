# types.py
from typing import Optional

from django.contrib.auth import models as auth_models
from emojis import models as emojis_models
from strawberry_django_plus import gql
from strawberry_django_plus.gql import relay


@gql.django.type(auth_models.User)
class User(relay.Node):

    first_name: gql.auto
    last_name: gql.auto


@gql.django.type(emojis_models.TgChat)
class TgChat(relay.Node):

    id: gql.auto
    type: gql.auto
    title: gql.auto


@gql.django.type(emojis_models.TgInputPeer)
class TgInputPeer(relay.Node):

    id: gql.auto
    type: gql.auto
    chat: Optional['TgChat']
    user: Optional['TgUser']
    channel: Optional['TgChat']
    peer: Optional['TgInputPeer']


@gql.django.type(emojis_models.TgMessage)
class TgMessage(relay.Node):

    id: gql.auto
    stamp: gql.auto
    chat: Optional['TgChat']


@gql.django.type(emojis_models.TgReaction)
class TgReaction(relay.Node):

    id: gql.auto
    peer: Optional['TgInputPeer']
    message: Optional['TgMessage']
    type: gql.auto
    emoticon: gql.auto


@gql.django.type(emojis_models.TgUser)
class TgUser(relay.Node):

    id: gql.auto
    is_bot: gql.auto
    first_name: gql.auto
    last_name: gql.auto
    username: gql.auto
    language_code: gql.auto
