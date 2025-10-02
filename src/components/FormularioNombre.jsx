import React, { useState } from 'react';

function FormularioNombre() {
  const [nombre, setNombre] = useState("");

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-slate-500 shadow-inner rounded-lg border border-slate-200 m-4 w-full max-w-lg mx-auto">

      <div className="w-full mb-4">
        <label className="block text-white text-sm font-bold mb-2">
          Ingresa tu nombre:
        </label>
        <input
          type="text"
          placeholder="Tu nombre"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          value={nombre}
          onChange={handleChange}
        />
      </div>

      <p className="text-lg font-semibold text-gray-800 mt-3 p-2 bg-slate-100 rounded-md">
        Hola, {nombre}
      </p>
    </div>
  );
}

export default FormularioNombre;