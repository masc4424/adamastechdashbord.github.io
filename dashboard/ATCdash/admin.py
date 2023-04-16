from django.contrib.admin.models import LogEntry
from django.contrib import admin
from ATCdash.models import UserActivity

admin.site.register(UserActivity)
admin.site.register(LogEntry)
