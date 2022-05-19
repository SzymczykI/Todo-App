import React, { FC, useRef } from 'react';
import './TodoForm.css'

interface AddTodoProps {
  addTodo: (todoTitle: string, todoDescr: string) => void;
}

const TodoForm: FC<AddTodoProps> = props => {

  let titleInputRef = useRef<HTMLInputElement>(null);
  let descriptionInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current!.value;
    const enteredDescription = descriptionInputRef.current!.value;
    props.addTodo(enteredTitle, enteredDescription);
    titleInputRef.current!.value = '';
    descriptionInputRef.current!.value = ''
  }

  return (
    <div className='form'>
      <form className='form__container' onSubmit={todoSubmitHandler}>
        <div className='form__input'>
          <input type='text' placeholder='title' id='txtTodoItemToAdd' required ref={titleInputRef} />
          <input type='text' placeholder='description' ref={descriptionInputRef} />
        </div>
        <button className='form__button' type='submit' id='btnAddTodo'>Add todo</button>
      </form>
    </div>
  );
}

export default TodoForm;