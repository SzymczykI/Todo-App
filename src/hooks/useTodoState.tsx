
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Todos {
  id: string
  title: string,
  description: string,
  completed: boolean,
} 

const UseTodoState = (initialTodos:Todos[])  => {
  const [todos, setTodos] = useState<Todos[]>(initialTodos);

  return {
    todos, 
    todoAddHandler: (title: string, description: string,) => {
      setTodos(prevTodos => [...prevTodos,
      { id: uuidv4(), title: title, description: description, completed: false }
      ])
    },
    todoRemoveHandler: (todoId: string) => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    todoToggleHandler: (todoId: string) => {
      const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
      setTodos(updatedTodos);
    }
  }
}
 
export default UseTodoState;
