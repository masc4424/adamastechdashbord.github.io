# from django.contrib import admin
from django.contrib.admin.models import LogEntry
from django.contrib import admin
from ATCdash.models import UserActivity


class UserActivityAdmin(admin.ModelAdmin):
    list_display = ('username', 'first_name', 'last_name', 'login_time', 'logout_time')


admin.site.register(UserActivity, UserActivityAdmin)
admin.site.register(LogEntry)
