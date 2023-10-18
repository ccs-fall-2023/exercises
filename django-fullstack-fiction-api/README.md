# Fullstack Fiction: Save a librarian today

Your local library has rebranded themselves as "Fullstack Fiction", the hippest place in town for reading. They'd like to drive the library experience into the 21st century, starting with the book management experience!

## Objectives

### Learning Objectives

After completing this assignment, you should be able to:

- Implement API endpoints for CRUD patterns using the Django Rest Framework.
- Discuss CRUD functionality in APIs, focusing on the role of an application's API layer.


## Details

### Deliverables

Django project for the Fullstack Fiction app, including:

- A Book model with `title`, `author`, and `description` attributes
- Appropriate serializer(s) and other supporting classes for Book
- An API exposing endpoints for all standard CRUD features, including an index & individal Book view

## Instructions

### "I'm a Python Developer" mode

- Create a Django project & app for Fullstack Fiction, and install the Django Rest Framework
- Add a Book model with `title`, `author`, and `description` attributes
  - Don't forget to create & run appropriate migrations!
- Build a serializer and viewset for the Book model
- Wire up the viewset to URLs in the Django API
- Add views/components to the app to support full CRUD functionality
- Test & verify you can completed all pieces of CRUD in your application.
