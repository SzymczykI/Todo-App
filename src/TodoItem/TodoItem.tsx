import React from 'react';
import './TodoItem.css';

interface TodoProps {
  id: string;
  title: string,
  description: string,
  completed: boolean,
  removeTodo: (todoId: string) => void;
  toggleTodo: (todoId: string) => void;
}

const TodoItem: React.FC<TodoProps> = ({ id, title, description, completed, removeTodo, toggleTodo }) => {

  return (
    <li className={(completed) ? "todo--completed" : "todo"} >
      <section data-testid='toggle-field' className='todo--toggle-completed' onClick={() => toggleTodo(id)}>
        <h2 data-testid='todo-title' className='todo__title'>{title}</h2>
        <p data-testid='todo-description' className='todo__description'>{description}</p>
      </section>
      <button data-testid='remove-btn' className='todo__button--remove' onClick={() => removeTodo(id)} >Remove</button>
    </li>
  )
}

export default TodoItem;