# Creating Your First "Hello, World" in Django

Let's build our first Django app & view, giving us full control of our user experience.

## Objectives

### Learning Objectives

After completing this assignment, you should be able to:

- Explain the strengths and weaknesses of the Django framework.
- Build a simple application with Django, including setting up a project, installing a new view, and configuring the URL for that view.

## Details

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

### Create a view

1. Open or create the `views.py` file in your app's root directory.
2. Create a new view function using the following syntax:

```python
def home_view(request, *args, **kwargs):
    return render(
        request,
        [YOUR TEMPLATE FILE, SEE BELOW],
    )
```

### Define a new URL

1. Open the `urls.py` file in your app directory.
2. Define a new URL function for the new view:

```python
urlpatterns = [
    path([YOUR_PATH, YOUR_VIEW, YOUR_PATH_NAME]),
]
```

_Hint: This should probably all just be an `index` route!_

### Create your templates

1. Create a `templates` directory.
2. Create a `base.html` template.
3. Create a `hello.html` template, this will load HTML that says "Hello World" in an `h1` element.

### Test your app

1. Start the Django development server using `python manage.py runserver`.
2. Open your web browser and access the app at the provided local development server URL.
3. Verify that you can navigate to `/` and that you see your "Hello, World" message.
