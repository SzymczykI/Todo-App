import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem component', () => {

  test('check remove button', () => {
    const removeTodo = jest.fn();
    const toggleTodo = jest.fn();
     
    render(<TodoItem id="1da67807-adaf-4b31-bae9-2c2ada3c20bd" title='send cv' description='tomorrow morning' completed={false} 
    removeTodo={removeTodo} toggleTodo={toggleTodo} />);
      
    const removeButton = screen.getByTestId('remove-btn');
    expect(removeButton).toHaveClass('todo__button--remove');

    fireEvent.click(removeButton);
    expect(removeTodo).toHaveBeenCalledTimes(1);
   });
   
  test('diplay correct content', () => {
    const removeTodo = jest.fn();
    const toggleTodo = jest.fn();
    
    render(<TodoItem id="1da67807-adaf-4b31-bae9-2c2ada3c20bd" title='send cv' description='tomorrow morning' completed={false} 
     removeTodo={removeTodo} toggleTodo={toggleTodo} />);
     
    const title = screen.getByTestId('todo-title');
    const description = screen.getByTestId('todo-description')
    expect(title).toHaveTextContent('send cv');
    expect(description).toHaveTextContent('tomorrow morning');
  });

  test('check toggle functionality', () => {
    const removeTodo = jest.fn();
    const toggleTodo = jest.fn();
      
    render(<TodoItem id="1da67807-adaf-4b31-bae9-2c2ada3c20bd" title='send cv' description='tomorrow morning' completed={false} 
    removeTodo={removeTodo} toggleTodo={toggleTodo} />);
       
    const toggleSection = screen.getByTestId('toggle-field');
    fireEvent.click(toggleSection);
  
    expect(toggleTodo).toHaveBeenCalledTimes(1);
    expect(toggleSection).toHaveClass('todo--toggle-completed');
  });
})
