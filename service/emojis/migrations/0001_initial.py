# Generated by Django 4.1.7 on 2023-02-19 11:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TgChat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('private', 'private'), ('group', 'group'), ('supergroup', 'supergroup'), ('channel', 'channel')], default='private', help_text='Type of chat, can be either “private”, “group”, “supergroup” or “channel”', max_length=10)),
                ('title', models.CharField(help_text='Optional. Title, for supergroups, channels and group chats', max_length=128, null=True)),
            ],
            options={
                'verbose_name': 'чат, группа, супергруппа, канал',
                'verbose_name_plural': 'чаты, группы, супергруппы, каналы',
            },
        ),
        migrations.CreateModel(
            name='TgInputPeer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('empty', 'empty'), ('self', 'self'), ('chat', 'chat'), ('user', 'user'), ('channel', 'channel'), ('user_from_message', 'user from message'), ('channel_from_message', 'channel from message')], default='empty', help_text='Type of peer, can be either “empty”, “self”, “chat”, “user”, “channel”, “user from message” or “channel from message”', max_length=20)),
                ('channel', models.ForeignKey(help_text='Defines a channel for further interaction.', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tg_input_peer_tg_channels', related_query_name='tg_input_peer_tg_channel', to='emojis.tgchat')),
                ('chat', models.ForeignKey(help_text='Defines a chat for further interaction.', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tg_input_peer_tg_chats', related_query_name='tg_input_peer_tg_chat', to='emojis.tgchat')),
                ('peer', models.ForeignKey(help_text='Defines a min user that was seen in a certain message of a certain chat or defines a min channel that was seen in a certain message of a certain chat', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tg_input_peer_tg_peers', related_query_name='tg_input_peer_tg_peer', to='emojis.tginputpeer')),
            ],
            options={
                'verbose_name': 'Источник реакции',
                'verbose_name_plural': 'Источники реакции',
            },
        ),
        migrations.CreateModel(
            name='TgMessage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stamp', models.DateTimeField(verbose_name='First datetime of message')),
                ('updated1', models.DateTimeField(null=True, verbose_name='First update stamp of message')),
                ('updated2', models.DateTimeField(null=True, verbose_name='Second update stamp of message')),
                ('updated3', models.DateTimeField(null=True, verbose_name='Third update stamp of message')),
                ('updated4', models.DateTimeField(null=True, verbose_name='Forth update stamp of message')),
                ('thread_id', models.IntegerField(null=True, verbose_name='Optional. Unique identifier of a message thread to which the message belongs; for supergroups only')),
            ],
            options={
                'verbose_name': 'сообщение',
                'verbose_name_plural': 'сообщения',
            },
        ),
        migrations.CreateModel(
            name='TgUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_bot', models.BooleanField(help_text='True, if this user is a bot')),
                ('first_name', models.CharField(max_length=64, verbose_name="User's or bot's first name")),
                ('last_name', models.CharField(max_length=64, null=True, verbose_name="Optional. User's or bot's last name")),
                ('username', models.CharField(max_length=64, null=True, verbose_name="Optional. User's or bot's username")),
                ('language_code', models.CharField(max_length=5, verbose_name="Optional. IETF language tag of the user's language")),
            ],
            options={
                'verbose_name': 'пользователь',
                'verbose_name_plural': 'пользователи',
            },
        ),
        migrations.CreateModel(
            name='TgReaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stamp', models.DateTimeField(verbose_name='Datetime of reaction request')),
                ('type', models.CharField(choices=[('empty', 'empty'), ('emoji', 'emoji'), ('custom_emoji', 'custom emoji')], default='empty', help_text='Type of reaction, can be either “empty”, “emoji” or “custom emoji”', max_length=12)),
                ('emoticon', models.CharField(max_length=1, null=True)),
                ('document_id', models.IntegerField(null=True, verbose_name='Custom emoji (fro details @see https://core.telegram.org/api/custom-emoji)')),
                ('message', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tg_reaction_tg_messages', related_query_name='tg_reaction_tg_message', to='emojis.tgmessage')),
                ('peer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tg_reaction_tg_input_peers', related_query_name='tg_reaction_tg_input_peer', to='emojis.tginputpeer')),
            ],
            options={
                'verbose_name': 'реакция',
                'verbose_name_plural': 'реакции',
            },
        ),
        migrations.CreateModel(
            name='TgMessageViews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stamp', models.DateTimeField(verbose_name='Datetime of reaction request')),
                ('views', models.IntegerField(null=True, verbose_name='View count of message')),
                ('forwards', models.IntegerField(null=True, verbose_name='Forward count of message')),
                ('message', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tg_message_views_tg_messages', related_query_name='tg_message_views_tg_message', to='emojis.tgmessage')),
                ('peer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tg_message_views_tg_input_peers', related_query_name='tg_message_views_tg_input_peer', to='emojis.tginputpeer')),
            ],
            options={
                'verbose_name': 'реакция',
                'verbose_name_plural': 'реакции',
            },
        ),
        migrations.CreateModel(
            name='TgMessageReplies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comments', models.BooleanField(null=True, verbose_name='Whether message-replies contains information about the comment section of a channel post, or a simple message thread')),
                ('replies', models.IntegerField(verbose_name='Contains the total number of replies in this thread or comment section.')),
                ('replies_pts', models.IntegerField(verbose_name='PTS of the message that started this thread.')),
                ('channel', models.ForeignKey(help_text='For channel post comments, contains the ID of the associated discussion supergroup', null=True, on_delete=django.db.models.deletion.PROTECT, related_name='tg_message_replies_tg_channels', related_query_name='tg_message_replies_tg_channel', to='emojis.tgchat')),
                ('max', models.ForeignKey(help_text='ID of the latest message in this thread or comment section.', null=True, on_delete=django.db.models.deletion.PROTECT, related_name='tg_message_replies_tg_maxes', related_query_name='tg_message_replies_tg_max', to='emojis.tgmessage')),
                ('message_views', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='tg_message_replies_tg_message_views', related_query_name='tg_message_replies_tg_message_views', to='emojis.tgmessageviews')),
                ('read_max', models.ForeignKey(help_text='Contains the ID of the latest read message in this thread or comment section.', null=True, on_delete=django.db.models.deletion.PROTECT, related_name='tg_message_replies_tg_read_maxes', related_query_name='tg_message_replies_tg_read_max', to='emojis.tgmessage')),
                ('recent_repliers', models.ManyToManyField(blank=True, help_text='For channel post comments, contains information about the last few comment posters for a specific thread, to show a small list of commenter profile pictures in client previews.', related_name='tg_message_replies_tg_input_peer', to='emojis.tginputpeer')),
            ],
            options={
                'verbose_name': 'ответ',
                'verbose_name_plural': 'ответы',
            },
        ),
        migrations.AddField(
            model_name='tgmessage',
            name='_from',
            field=models.ForeignKey(help_text='Optional. Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tg_message_tg_users', related_query_name='tg_message_tg_user', to='emojis.tguser'),
        ),
        migrations.AddField(
            model_name='tgmessage',
            name='chat',
            field=models.ForeignKey(help_text='Conversation the message belongs to.', on_delete=django.db.models.deletion.CASCADE, related_name='tg_message_tg_chats', related_query_name='tg_message_tg_chat', to='emojis.tgchat'),
        ),
        migrations.AddField(
            model_name='tgmessage',
            name='sender_chat',
            field=models.ForeignKey(help_text='Optional. Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tg_message_tg_sender_chats', related_query_name='tg_message_tg_sender_chat', to='emojis.tgchat'),
        ),
        migrations.AddField(
            model_name='tginputpeer',
            name='user',
            field=models.ForeignKey(help_text='Defines a user for further interaction.', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tg_input_peer_tg_users', related_query_name='tg_input_peer_tg_user', to='emojis.tguser'),
        ),
    ]
