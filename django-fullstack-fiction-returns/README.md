# Fullstack Fiction: Save a librarian today

Like any good horror film, the end is _rarely_ the end. So we're going _back_ to FullStack Fiction and building their API _and_ a React frontend!

## Objectives

### Learning Objectives

After completing this assignment, you should be able to:

- Implement API endpoints for CRUD patterns using the Django Rest Framework.
- Discuss CRUD functionality in APIs, focusing on the role of an application's API layer.
- Build simple React applications & components from scratch.
- Integrate React frontends with Django API backends.

## Details

### Deliverables

- Django project for the Fullstack Fiction app, including:
  - A simple welcome page + logo
  - A Book model with `title`, `author`, and `description` attributes
  - Appropriate serializer(s) and other supporting classes for Book
  - An API exposing endpoints for all standard CRUD features, including an index & individal Book view
  - A React frontend with components support full CRUD functionality

## Instructions

### "I'm a Python Developer" mode

- Create a Django project & app for Fullstack Fiction, and install the Django Rest Framework
- Add a Book model with `title`, `author`, and `description` attributes
  - Don't forget to create & run appropriate migrations!
- Build a serializer and viewset for the Book model
- Wire up the viewset to URLs in the Django API
- Create a new React application using Vite
- Add views/components to the app to support full CRUD functionality
- Link the React views/components to the Django API using the native `fetch()` method.
- Test & verify you can completed all pieces of CRUD in your application.
