import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React', id: 1 },
    { text: 'Build a to-do list', id: 2 },
    { text: 'Publish on GitHub', id: 3 }
  ]);

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ul>
      {todos.map(todo => (
        console.log(todo.id),
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
        
      ))}
    </ul>
  );
};

export default TodoList;
