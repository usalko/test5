from datetime import date, datetime, timedelta, timezone

from emojis.models import TgChat, TgInputPeer, TgMessage, TgReaction, TgUser
from faker import Faker
from unit_tests.snapshot_database_test_case import \
    SnapshotDatabaseStateTestCase


class TestsMessage(SnapshotDatabaseStateTestCase):

    def setUp(self):
        Faker.seed(0)
        faker = Faker()

        # References ==============================================

        TgUser.objects.create(is_bot=False, first_name='user1')
        TgUser.objects.create(is_bot=False, first_name='user2')

        TgChat.objects.create(type=TgChat.ChatType.PRIVATE,
                              title='simple private chat')

        TgMessage.objects.create(stamp=datetime.utcnow(),
                                 chat_id=1)

    def test_utility(self):
        chat1 = TgChat.objects.get(title='simple private chat')
        self.assertEqual(chat1.title, 'simple private chat')
