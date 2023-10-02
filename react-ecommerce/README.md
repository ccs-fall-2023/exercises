# Make an Online Store with React

This exercise will use React + React Router (+ possibly Context API?)

## Goals

* Use the [FakeStore API](https://fakestoreapi.com/docs) as your backend to populate your store.
* Use [React-Router](https://reactrouter.com/en/main/start/tutorial) to allow browsing.

### Product Browsing

* Use the [FakeStore API](https://fakestoreapi.com/docs) to query for products in your store.
* Using [React-Router](https://reactrouter.com/en/main/start/tutorial), allow a user to click on a product and `fetch()` that products data.

### Category Browsing

* Use the FakeStore API to query the available categories in your store.
* Allow a user to click a specific category and see all the products in that category.
* Allow a user to click on a product in that category and `fetch()` that products data.

### Checkout Cart

* Use the FakeStore API to allow a user to add a product to their cart (see the "Update a cart" entry in the docs).
* View a user's cart to see the available products.
  * NOTE: This endpoint returns a product ID, you'll need to `fetch()` the product data for each product to see the details.
* Can you delete content from the user's cart? (there is a mockup for this in the documentation).

## UI

* Render the product information using "card" layout [Example](https://uxplanet.org/using-card-based-design-to-enhance-ux-51f965ab70cb)
* Use Styled-Components, Bulma, or [Tailwind](https://tailwindcss.com/docs/guides/vite).

## Level Up

* Can you use the [React Context API](https://react.dev/learn/passing-data-deeply-with-context#step-1-create-the-context) to store the user's cart data locally?
