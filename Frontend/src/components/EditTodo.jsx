import { useState } from 'react';

const EditTodo = ({ todo, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(todo.title);

  const handleSubmit = (e) => {
    fetch(`http://localhost:5000/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    });
    e.preventDefault();
    if (!title.trim()) return;
    onUpdate(todo.id, title.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-grow px-2 py-1 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoFocus
      />
      <div className="flex">
        <button
          type="submit"
          className="bg-green-500 text-white px-2 py-1 text-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-2 py-1 text-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTodo;