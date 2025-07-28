const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];
let id = 1;

//login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'test' && password === 'test123') {
    return res.status(200).json({
      status: 'success',
      message: 'Login successful',
      code: 200,
      data: { 
          token: 'jwt-token'
       }
    });
  }

  return res.status(401).json({
    status: 'error',
    message: 'Invalid credentials',
    code: 401,
    data: null
  });
});

//get all
app.get('/items', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Todos fetched successfully',
    code: 200,
    data: todos
  });
});

//get one
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find(i => i.id == id);

  if (!todo) {
    return res.status(404).json({
      status: 'error',
      message: 'Todo not found',
      code: 404,
      data: null
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Todo fetched successfully',
    code: 200,
    data: todo
  });
});

//add item
app.post('/items', [
  body('text').isString().notEmpty().withMessage('Text is required'), 
  body('completed').optional().isBoolean().withMessage('Completed must be a boolean')
], (req, res) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      code: 400,
      data: { errors: errors.array() }
    });
  }

  const item = { id: id++, ...req.body };
  todos.push(item);

  res.status(201).json({
    status: 'success',
    message: 'Todo created successfully',
    code: 201,
    data: item
  });
});

//edit item
app.put('/items/:id', [
  body('text').optional().isString().notEmpty().withMessage('Text must be a non-empty string'), 
  body('completed').optional().isBoolean().withMessage('Completed must be a boolean')
], (req, res) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      code: 400,
      data: { errors: errors.array() }
    });
  }

  const { id } = req.params;
  const index = todos.findIndex(i => i.id == id);
  
  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Todo not found',
      code: 404,
      data: null
    });
  }

  todos[index] = { ...todos[index], ...req.body };

  res.status(200).json({
    status: 'success',
    message: 'Todo updated successfully',
    code: 200,
    data: todos[index]
  });
});

//delete item
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(i => i.id == id);

  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Todo not found',
      code: 404,
      data: null
    });
  }

  todos = todos.filter(i => i.id != id);

  res.status(204).json({
    status: 'success',
    message: 'Todo deleted successfully',
    code: 204,
    data: null
  });
});

module.exports = app;
