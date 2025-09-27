import React from 'react';

function EmpleadoCard(props) {
  return (
    <div className="border p-4 m-2 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-800">{props.nombre}</h3>
      <p className="text-sm text-gray-500">{props.cargo}</p>
      <p className="text-sm text-gray-500">{props.departamento}</p>
      <p className="text-sm text-gray-500">{props.correo}</p>
    </div>
  );
}

export default EmpleadoCard;