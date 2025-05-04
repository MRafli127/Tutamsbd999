// CreateTodo.jsx
import { useState } from 'react';


const CreateTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title.trim() }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to add todo');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Todo added:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    
    if (!title.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    onAddTodo(newTodo);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add
      </button>
    </form>
  );
};

export default CreateTodo;