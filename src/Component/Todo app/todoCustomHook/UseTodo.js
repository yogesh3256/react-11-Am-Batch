// src/hooks/useTodo.js
import { useContext, useState } from 'react';
import { TodoContext } from '../todoContext/TodoProvider';
 

const useTodo = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  const toggleTodo = id => dispatch({ type: 'TOGGLE_TODO', payload: id });
  const deleteTodo = id => dispatch({ type: 'DELETE_TODO', payload: id });

  return { todos, newTodo, setNewTodo, addTodo, toggleTodo, deleteTodo };
};

export default useTodo;
