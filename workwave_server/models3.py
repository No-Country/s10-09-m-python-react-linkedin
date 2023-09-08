# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Comments(models.Model):
    content = models.TextField()
    date_comment = models.DateTimeField()
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.DO_NOTHING, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.
    postid = models.ForeignKey('Posts', models.DO_NOTHING, db_column='PostId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Comments'


class Connectionrequests(models.Model):
    receiveruserid = models.IntegerField(db_column='receiverUserId')  # Field name made lowercase.
    status = models.TextField()  # This field type is a guess.
    createdat = models.DateTimeField(db_column='createdAt')  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt')  # Field name made lowercase.
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.DO_NOTHING, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ConnectionRequests'


class Education(models.Model):
    educational_institution = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    academic_discipline = models.CharField(max_length=255)
    note = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    activities_and_groups = models.TextField(blank=True, null=True)
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.DO_NOTHING, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Education'


class Experiences(models.Model):
    job_position = models.CharField(max_length=255, blank=True, null=True)
    company_name = models.CharField(max_length=255, blank=True, null=True)
    ubication = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateTimeField(blank=True, null=True)
    end_date = models.DateTimeField(blank=True, null=True)
    typesofemploymentid = models.ForeignKey('TypesOfEmployments', models.DO_NOTHING, db_column='typesOfEmploymentId', blank=True, null=True)  # Field name made lowercase.
    typesofubicationid = models.ForeignKey('TypesOfUbications', models.DO_NOTHING, db_column='typesOfUbicationId', blank=True, null=True)  # Field name made lowercase.
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.DO_NOTHING, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Experiences'


class Jobapplications(models.Model):
    cv = models.TextField()
    resume = models.TextField()
    reason_for_interest = models.TextField()
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.DO_NOTHING, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.
    jobid = models.ForeignKey('Jobs', models.DO_NOTHING, db_column='JobId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'JobApplications'


class Jobpreferences(models.Model):
    data_preference = models.DateTimeField()
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.DO_NOTHING, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.
    jobid = models.ForeignKey('Jobs', models.DO_NOTHING, db_column='JobId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'JobPreferences'


class Jobs(models.Model):
    job_position = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    description = models.TextField()
    ubication = models.CharField(max_length=255, blank=True, null=True)
    salary = models.IntegerField(blank=True, null=True)
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.DO_NOTHING, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.
    typesofemploymentid = models.ForeignKey('TypesOfEmployments', models.DO_NOTHING, db_column='typesOfEmploymentId', blank=True, null=True)  # Field name made lowercase.
    typesofubicationid = models.ForeignKey('TypesOfUbications', models.DO_NOTHING, db_column='typesOfUbicationId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Jobs'


class Likes(models.Model):
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.DO_NOTHING, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.
    postid = models.ForeignKey('Posts', models.DO_NOTHING, db_column='PostId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Likes'


class Posts(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField()
    post_date = models.DateTimeField()
    photo = models.CharField(max_length=255, blank=True, null=True)
    video = models.CharField(max_length=255, blank=True, null=True)
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.DO_NOTHING, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Posts'


class Skills(models.Model):
    skill_name = models.CharField(max_length=255)
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.DO_NOTHING, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Skills'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthtokenToken(models.Model):
    key = models.CharField(primary_key=True, max_length=40)
    created = models.DateTimeField()
    user_id = models.BigIntegerField(unique=True)

    class Meta:
        managed = False
        db_table = 'authtoken_token'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user_id = models.BigIntegerField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class TypesOfEmployments(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'types_of_employments'


class TypesOfUbications(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'types_of_ubications'


class UsersCustomuser(models.Model):
    password = models.CharField(max_length=255)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField(blank=True, null=True)
    is_staff = models.BooleanField(blank=True, null=True)
    date_joined = models.DateTimeField(blank=True, null=True)
    email = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users_customuser'


class UsersCustomuserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    customuser_id = models.BigIntegerField()
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'users_customuser_groups'
        unique_together = (('customuser_id', 'group'),)


class UsersCustomuserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    customuser_id = models.BigIntegerField()
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'users_customuser_user_permissions'
        unique_together = (('customuser_id', 'permission'),)


class UsersProfile(models.Model):
    user_id = models.BigIntegerField(primary_key=True)
    avatar = models.CharField(max_length=100, blank=True, null=True)
    about = models.TextField(blank=True, null=True)
    sector = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'users_profile'
