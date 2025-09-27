import React from 'react';
import EmpleadoCard from './EmpleadoCard';

function ListaEmpleados(props) {
  return (
    <div className="flex flex-wrap justify-center">
      {props.empleados.map(emp => (
        <EmpleadoCard
          key={emp.id}
          nombre={emp.nombre}
          cargo={emp.cargo}
          departamento={emp.departamento}
          correo={emp.correo}
        />
      ))}
    </div>
  );
}

export default ListaEmpleados;