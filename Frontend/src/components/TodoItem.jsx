// TodoItem.jsx - This will be used by TodoList.jsx to display each todo item
import { useState } from 'react';
import EditTodo from './EditTodo';
import ViewTodo from './ViewTodo';

const TodoItem = ({ todo, onDelete, onToggleComplete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (id, title) => {
    onUpdate(id, title);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className={`border rounded-md p-3 mb-2 ${todo.completed ? 'bg-gray-50' : 'bg-white'}`}>
      {isEditing ? (
        <EditTodo 
          todo={todo} 
          onUpdate={handleUpdate} 
          onCancel={handleCancelEdit}
        />
      ) : (
        <ViewTodo 
          todo={todo} 
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default TodoItem;