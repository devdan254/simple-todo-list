import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoList from './TodoList.jsx';

function App() {
  return (
    <>
    <TodoList />
     
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
