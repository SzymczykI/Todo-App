import React, { useEffect } from 'react';
import './App.css';
import UseTodoState from './hooks/useTodoState';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

const App: React.FC = () => {

  const initialTodos = JSON.parse(localStorage.getItem("todos") || "[]")
  const {todos, todoAddHandler, todoRemoveHandler, todoToggleHandler} = UseTodoState(initialTodos);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <header className='header'>
        <h1 className='header__title'>Todo App</h1>
      </header>
      <main className='main'>
        <TodoForm addTodo={todoAddHandler} />
        <TodoList todos={todos} removeTodo={todoRemoveHandler} toggleTodo={todoToggleHandler} />
      </main>
    </div>
  );
}

export default App;
