# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Connectionrequests(models.Model):
    receiveruserid = models.IntegerField(db_column='receiverUserId')  # Field name made lowercase.
    status = models.TextField()  # This field type is a guess.
    createdat = models.DateTimeField(db_column='createdAt')  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='updatedAt')  # Field name made lowercase.
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.CASCADE, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ConnectionRequests'


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
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.CASCADE, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Experiences'


#esta si
class Jobs(models.Model):
    job_position = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    description = models.TextField()
    ubication = models.CharField(max_length=255, blank=True, null=True)
    salary = models.IntegerField(blank=True, null=True)
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.CASCADE, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.
    typesofemploymentid = models.ForeignKey('TypesOfEmployments', models.DO_NOTHING, db_column='typesOfEmploymentId', blank=True, null=True)  # Field name made lowercase.
    typesofubicationid = models.ForeignKey('TypesOfUbications', models.DO_NOTHING, db_column='typesOfUbicationId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Jobs'


class Posts(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField()
    post_date = models.DateTimeField()
    photo = models.CharField(max_length=255, blank=True, null=True)
    video = models.CharField(max_length=255, blank=True, null=True)
    userscustomuserid = models.ForeignKey('UsersCustomuser', models.CASCADE, db_column='usersCustomuserId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Posts'


