from .base import *

REST_FRAMEWORK = {
    'DATE_INPUT_FORMATS': ['iso-8601', '%Y-%m-%dT%H:%M:%S.%fZ'],
}