# Fullstack Fiction: Lockdown

Fullstack Fiction's rebrand has gone a little TOO well - the public is starting to add & remove books at random! It's up to you to protect the library's catalog by adding roles, authentication, and permissions to the Fullstack Fiction API.

## Objectives

**NOTE**: Some of this is _non-trivial_.  It includes some things that we haven't discussed. There are some familiar things here, but there's also a lot of moving parts that we haven't discussed.  However, I think it should be within your reach if you're up for a challenge.

### Learning Objectives

After completing this assignment, you should be able to:

- Implement authentication and authorization at the API level in Django.
- Use JSON Web Tokens (JWTs) to persist authentication with isolated frontends.
- Integrate React frontends with Django API backends.

## Details

### Deliverables

- Django project for the Fullstack Fiction app, including:
  - A simple welcome page + logo
  - A Book model with `title`, `author`, and `description` attributes
  - Appropriate serializer(s) and other supporting classes for Book
  - An API exposing endpoints for all standard CRUD features, including an index & individal Book view
    - A set of Groups and Permissions limiting access for certain users in the API.
  - A React frontend with components supporting full CRUD functionality
    - Create, Update, and Delete functionality shold be restricted to a limited subset of users.
    - Read for both individual and lists of Books should be open to everyone.

## Instructions

### "I'm a Python Developer" mode

#### Start Here 👇

_We're doing this homework a little different than others. We first recommend working through [this Medium tutorial](https://medium.com/@ronakchitlangya1997/jwt-authentication-with-react-js-and-django-c034aae1e60d) on integrating Django, DRF, and React into a fullstack application. This will take the majority of your time, and there's no required deliverable from this portion. After you have completed that tutorial, follow the steps below to the best of your ability._

**NOTE**: There are a few parts missing from this tutorial, you'll need some additional libraries and to load some things that get left out.

- You will need to install `setuptools`, otherwise you'll get an error when you try to start the server (or run migrations)
  - `pip install setuptools`
- When you're creating the logout api, you'll need to import the `RefreshToken` method
  - `from rest_framework_simplejwt.tokens import RefreshToken`
- The article was written before `create-react-app` was deprecated, so the instructions still mention it.
  - Use `npm create vite@latest` instead.

#### Build your own 👍

- Create a copy of your submission from ["Fullstack Fiction: API Edition"](../django-fullstack-fiction-api/)
- In the new copy, add a Group called `Librarians`
- Add Permissions for `add_book`, `remove_book`, and `update_book`. Only the `Librarians` group should hold these permissions.
- Create at least three Users in your database that are members of the `Librarians` group.
- In your React frontend, update the "Create", "Update", and "Delete" components to be behind a private route
  - The private routes should only display if a user is logged in and is a member of the `Librarians` group
  - _Hint: You can use JWTs to verify **authentication**, and add an extra key to localStorage for **authorization** purposes._
- Test your app with these three scenarios:
  - As a logged-in Librarian, I can create, read, update, and delete any `Book` resource.
  - As a logged-in user who is NOT a Librarian, I can read or list any `Book` resource but may not create, edit, or delete them.
  - As a logged-out user, I can read or list any `Book` resource but may not create, edit, or delete them.

### "Hey Mikey, I think they like it!" mode

- Add another role for `LibraryMember`.
- The `LibraryMember` role should be assigned to any logged-in user, and grant the `add_book` and `update_book` permissions, but NOT `remove_book`.
- Test your app with these modified scenarios:
  - As a logged-in Librarian, I can create, read, update, and delete any `Book` resource.
  - As a logged-in user who is NOT a Librarian, I can create, read, or update any `Book` resource but may not delete them.
  - As a logged-out user, I can read or list any `Book` resource but may not create, edit, or delete them.
