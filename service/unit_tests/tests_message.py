from datetime import date, datetime, timedelta, timezone
from random import randint, sample

from emojis.models import TgChat, TgInputPeer, TgMessage, TgReaction, TgUser, TgMessageViews
from faker import Faker
from unit_tests.snapshot_database_test_case import \
    SnapshotDatabaseStateTestCase
from itertools import chain, combinations


class TestsMessage(SnapshotDatabaseStateTestCase):

    def setUp(self):
        Faker.seed(0)
        faker = Faker()

        # References ==============================================

        TgUser.objects.create(is_bot=False, first_name='@Павел')
        TgUser.objects.create(is_bot=False, first_name='@Глеб')
        TgUser.objects.create(is_bot=False, first_name='@Егор')

        TgInputPeer.objects.create(type=TgInputPeer.PeerType.USER,
                                   access_hash=0,
                                   user=TgUser.objects.get(pk=1)
                                   )
        TgInputPeer.objects.create(type=TgInputPeer.PeerType.USER,
                                   access_hash=0,
                                   user=TgUser.objects.get(pk=2)
                                   )
        TgInputPeer.objects.create(type=TgInputPeer.PeerType.USER,
                                   access_hash=0,
                                   user=TgUser.objects.get(pk=3)
                                   )

        TgChat.objects.create(type=TgChat.ChatType.PRIVATE,
                              title='simple private chat')

        emoticons = ['\U0001F600', '\U0001F603',
                     '\U0001F604', '\U0001F601', '\U0001F606']

        for i in range(0, 100):
            message = TgMessage.objects.create(stamp=datetime.utcnow(),
                                               updated1=None,
                                               _from=TgUser.objects.get(
                pk=randint(1, 3)),
                chat=TgChat.objects.get(pk=1)
            )

            possible_reacting_users = [e for e in list(
                chain(*map(lambda x: combinations([1, 2, 3], x), range(0, 3+1)))) if len(e) > 1]

            for samples in sample(possible_reacting_users, 1):
                for pk in samples:
                    TgReaction.objects.create(stamp=datetime.utcnow(),
                                              peer=TgInputPeer.objects.get(
                                                  pk=pk),
                                              message=message,
                                              type=TgReaction.ReactionType.EMOJI,
                                              emoticon=emoticons[randint(
                                                  0, len(emoticons) - 1)]
                                              )
            for peer_pk in range(1, 4):
                TgMessageViews.objects.create(stamp=datetime.utcnow(),
                                              peer=TgInputPeer.objects.get(
                                                  pk=peer_pk),
                                              message=message,
                                              views=1
                                              )

    def test_utility(self):
        chat1 = TgChat.objects.get(title='simple private chat')
        self.assertEqual(chat1.title, 'simple private chat')
