import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 py-8">
      <div className="container mx-auto px-4 bg-white bg-opacity-80 rounded-xl p-4">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
