set -o errexit

pip install --upgrade pip

pipenv install

pipenv run pip install -r workwave_server/requirements.txt

python manage.py collectstatic --no-input --settings=workwave.config.render
python manage.py migrate --settings=workwave.config.render