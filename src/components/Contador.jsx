import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center p-6 bg-blue-200 shadow-xl rounded-4xl border border-gray-100 m-4">
      <p className="text-xl font-semibold text-gray-700 mb-4">
        Has hecho clic {count} veces
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        Incrementar
      </button>
    </div>
  );
}

export default Contador;