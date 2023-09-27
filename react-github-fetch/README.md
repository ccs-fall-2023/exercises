# Github Fetch

## Github Users Query

But now, with 100% more React!

## Goals

- Accept user input via a form that recieves a Github username.
- Search for that user via the Github Users API endpoint: `https://api.github.com/users/[some_user_name]`
- Return that user's information.

## User Lookup Guidelines

- Load the lookup form in its own component
- Clear the form's state after each search
- Pass the user information into its own component via `props`
- load the user information component inside the form component
- Load the form component in `App.jsx`

## Level Up

- Using props, can you load _both_ the form and the user information components in `App.jsx`?
  - You'll need to find a way to move the data _from_ the form, to `App.jsx`, and _then_ to the user information component.
  - **NOTE**: This isn't a trivial task, and the methods for doing so aren't ideal. But, it's a good exercise for a topic we'll discuss in the next class.

## UI

- Render the user information using "card" layout [Example](https://uxplanet.org/using-card-based-design-to-enhance-ux-51f965ab70cb)
- Append new user cards with each search.

---

## Github Issues Lookup

- Query the Github Issues API for the app `create-react-app` via this endpoint: `https://api.github.com/repos/facebook/create-react-app/issues`
- Return a list of all the issues, display the `title` and the `body` information in the DOM.

## Issue Lookup Guidelines

- Load the lookup form in its own component
- Clear the form's state after each search
- Pass the issue information into its own component via `props`
- Load the issue information component inside the form component
  - You'll want to `map()` through all of the issues and return the issue component
  - You'll pass the issue data passed via props into the issue component
- Load the form component in `App.jsx`
