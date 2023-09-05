runserver:
	python manage.py runserver --settings=workwave.config.dev

runprod:
	python manage.py runserver --settings=workwave.config.prod

collectprod:
	python manage.py collectstatic --settings=workwave.config.prod

superuserprod:
	python manage.py createsuperuser --settings=workwave.config.prod

migrationsprod:
	python manage.py makemigrations --settings=workwave.config.prod

migrateprod:
	python manage.py migrate --settings=workwave.config.prod