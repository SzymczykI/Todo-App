import React from 'react';
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

interface TodoListProps {
  todos: { id: string, title: string, description: string, completed: boolean }[],
  removeTodo: (todoId: string) => void;
  toggleTodo: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <div className='todoList'>
      <ul data-testid='todoList' id='todoList'>
        {todos.map((todo) => {
          return <TodoItem
            key={todo.id}
            {...todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo} />
        })}
      </ul>
    </div>
  );
}

export default TodoList;