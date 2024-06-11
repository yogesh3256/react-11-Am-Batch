// src/components/TodoList.js
import React from 'react';
import useTodo from '../todoCustomHook/UseTodo';
import TodoItem from './TodoItem';
import CommonButton from '../../common/Button/CommonButton';
import CommonTextField from '../../common/TextField/CommonTextField';

const TodoAppUseContext = () => {
    const { todos, newTodo, setNewTodo, addTodo, toggleTodo, deleteTodo } = useTodo();

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'> 
            <div className='flex flex-col items-center gap-4'>
                <CommonTextField
                    type="text"
                    value={newTodo}
                    size="small"
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <CommonButton
                    label='Add Todo'
                    className='bg-black text-white px-4 py-2'
                    onClick={addTodo}
                />
            </div>
            <div className='mt-6 w-full flex flex-col items-center'>
                {todos?.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                ))}
            </div>
        </div>
    );
};

export default TodoAppUseContext;
