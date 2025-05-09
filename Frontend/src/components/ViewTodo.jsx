// ViewTodo.jsx
const ViewTodo = ({ todo, onDelete, onToggleComplete, onEdit }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="mr-2 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
        />
        <span 
          className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
        >
          {todo.title}
        </span>
      </div>
      <div className="flex space-x-1">
        <button
          onClick={onEdit}
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-gray-500 hover:text-red-500 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ViewTodo;