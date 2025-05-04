// TodoList.jsx
import { useState, useEffect } from 'react';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, updatedTitle) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, title: updatedTitle } : todo
      )
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-5xl font-bold text-center my-6 text-gray-800">TODO LIST</h1>
      <CreateTodo onAddTodo={addTodo} />
      
      <div className="mt-6">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <TodoItem 
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onToggleComplete={toggleComplete}
              onUpdate={updateTodo}
            />
          ))
        )}
      </div>
      
      {todos.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          <p>{todos.filter(todo => todo.completed).length} of {todos.length} tasks completed</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;