// src/components/TodoItem.js
import React from 'react';
import CommonButton from '../../common/Button/CommonButton';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div key={todo.id} className=' flex  gap-2 mb-6'>
      <span className='text-xl font-bold'
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <CommonButton
      label='DELETE'
      className='bg-red-400 text-white px-1 py-0.5 w-20 '
      onClick={()=>deleteTodo(todo.id)}
      />
    </div>
  );
};

export default TodoItem;
