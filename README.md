# Grocery List API

To be used to practice React and testing.

## Set Up

Clone down this repo. (Do **NOT** nest it inside a React repo!)

CD into this repo.

Run `npm install`.

Run `npm start` to start the server.

## Endpoints

### GET all grocery list items

URL: `http://localhost:3001/api/v1/list`

Sample response (200):

```js
[
  {id: 1, item: 'apples', quantity: '3 pieces'},
  {id: 2, item: 'frozen tamales', quantity: '1 bag'},
  {id: 3, item: 'Hibiscus La Croix', quantity: 'As many cases as possible'},
]
```

### GET an item by its id

URL: `http://localhost:3001/api/v1/list/:id`

Sample URL: `http://localhost:3001/api/v1/list/3`

Sample response (200):

```js
{id: 3, item: 'Hibiscus La Croix', quantity: 'As many cases as possible'}
```

Sample response (404):

```js
{message: 'No grocery list item found with an id of 3'}
```

### POST a new idea

URL: `http://localhost:3001/api/v1/list`

Sample request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 98623913021,
    item: 'ginger kombucha',
    quantity: '2 bottles'
  })
}
```

Sample response (201): This is the idea that was submitted in the POST request

```js
  { id: 98623913021, item: 'ginger kombucha', quantity: '2 bottles' }
```

Sample BAD request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 98623913021,
    item: 'ginger kombucha'
  })
}
```

Sample BAD response (422):

```js
  { message: 'You are missing a required parameter of quantity' }
```

### DELETE an idea

URL: `http://localhost:3001/api/v1/list/:id`

Sample URL: `http://localhost:3001/api/v1/list/2`

Sample response (204): no content in the body, nothing to parse

Sample BAD response (404):

```js
{message: 'No grocery list item found with an id of 2'}
```
