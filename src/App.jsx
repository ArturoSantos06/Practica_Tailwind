import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="mt-24 text-center">
        <h1 className="text-3xl font-bold  text-red-500">
          Hola, estoy usando Tailwind
        </h1>
      </div>
    </div>
  );
}

export default App;