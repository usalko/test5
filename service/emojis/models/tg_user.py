from django.db import models


class TgUser(models.Model):

    is_bot = models.BooleanField(help_text='True, if this user is a bot')
    first_name = models.CharField(
        'User\'s or bot\'s first name', max_length=64)
    last_name = models.CharField(
        'Optional. User\'s or bot\'s last name', max_length=64, null=True)
    username = models.CharField(
        'Optional. User\'s or bot\'s username', max_length=64, null=True)
    language_code = models.CharField(
        'Optional. IETF language tag of the user\'s language', max_length=5)

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
