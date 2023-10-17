# Django + Apple CEOs

## Objectives

Combine Django + PostgreSQL using the Apple CEOs data we've worked with previously.

### Learning Objectives

After completing this assignment, you should be able to:

- Configure Django to use PostgreSQL.
- Use Django migrations to update a database.

### Deliverables

- A GitHub repository including a Django project with one app & one view.

## Instructions

### Set up a new Django project

1. Create a virtual environment for your project.
2. Install Django using pip.
3. Initialize a new Django project using the `django-admin startproject` command.

### Create a Django app

1. Inside your project directory, create a new Django app using the `python manage.py startapp` command.
2. Configure the app by adding it to the project's `settings.py` file under the `INSTALLED_APPS` list.

### Update the database type

1. In the `settings.py` change the database from SQLite to PostgreSQL

    _Hint: You'll need to add an additional module for PSQL!_

### Update the Model

1. Create a new class to setup the database with the following columns:
    - Name
    - Slug (lowercase version of the name without spaces)
    - First Year Active
2. Make and run your migrations

### Create your views

1. Open or create the `views.py` file in your app's root directory.
2. Create a new view function using the following syntax:

```python
def index(request):
    return render(
        request,
        [YOUR TEMPLATE FILE, SEE BELOW],
        context={[THE NUMBER OF CEOS AND THE CEO LIST SHOULD BE ASSIGNED TO VARIABLES HERE]},
    )
```

### Define your URLs

1. Open the `urls.py` file in your app directory.
2. Define a new URL function for the new view:

```python
urlpatterns = [
    path([YOUR_PATH, YOUR_VIEW, YOUR_PATH_NAME]),
]
```

### Create your templates

1. Create a `tempalates` directory.
2. Create a "base" template.
3. Create a `index.html` template, this will load your context items from your view.

### Test your app

1. Start the Django development server using `python manage.py runserver`.
2. Open your web browser and access the app at the provided local development server URL.
3. Verify that you can navigate to `/` and that you see a list of the CEOs from the database.
