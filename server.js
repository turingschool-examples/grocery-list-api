const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.locals.title = 'Grocery List API';
app.locals.list = [
  {id: 1, item: 'apples', quantity: '3 pieces'},
  {id: 2, item: 'frozen tamales', quantity: '1 bag'},
  {id: 3, item: 'Hibiscus La Croix', quantity: 'As many cases as possible'},
];

app.set('port', 3001);

app.get('/api/v1/list', (request, response) => {
  response.status(200).json(app.locals.list);
});

app.get('/api/v1/list/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.list.find(item => item.id === parseInt(id));

  if (!match) return response.status(404).json({message: `No grocery list item found with an id of ${id}`});

  return response.status(200).json(match);
});

app.post('/api/v1/list', (request, response) => {
  const newItem = request.body;

  for (let requiredParameter of ['id', 'item', 'quantity']) {
    if (!newItem[requiredParameter]) return response.status(422).json({message: `You are missing a required parameter of ${requiredParameter}`});
  }

  app.locals.list = [...app.locals.list, newItem];

  return response.status(201).json(newItem);
});

app.delete('/api/v1/list/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.list.find(item => item.id === parseInt(id));

  if (!match) return response.status(404).json({message: `No grocery list item found with an id of ${id}`});

  const filteredlist = app.locals.list.filter(item => item.id !== parseInt(id));

  app.locals.list = filteredlist;

  return response.sendStatus(204);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on port ${app.get('port')}!`);
});
