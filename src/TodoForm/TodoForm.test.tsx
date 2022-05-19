import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';

test('title input field is required', () => {
  const addTodo = jest.fn();

  render(<TodoForm addTodo={addTodo}/>);
  const titleInput = screen.getByPlaceholderText('title');
  expect(titleInput).toBeRequired();
});

test('handles addTodo on click', () => {
  const addTodo = jest.fn();
  render(<TodoForm addTodo={addTodo}/>);
  const buttonElement = screen.getByText('Add todo');
  fireEvent.click(buttonElement);

  expect(addTodo).toHaveBeenCalledTimes(1);
});

test('check button attributes', () => {
  const addTodo = jest.fn();
  render(<TodoForm addTodo={addTodo}/>);
  const buttonElement = screen.getByText('Add todo');
  
  expect(buttonElement).toHaveAttribute('id', 'btnAddTodo');
  expect(buttonElement).toHaveAttribute('type', 'submit');
});