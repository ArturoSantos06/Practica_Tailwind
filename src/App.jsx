import React from 'react';
import NavBar from './components/NavBar';
import ListaEmpleados from './components/ListaEmpleados';

const empleadosDemo = [
  { id: 1, nombre: "Juan Perez", cargo: "Analista", departamento: "Finanzas", correo: "juan.perez@inmobiliaria.com" },
  { id: 2, nombre: "María López", cargo: "Gerente de Proyecto", departamento: "Tecnología", correo: "maria.lopez@inmobiliaria.com" },
  { id: 3, nombre: "Carlos Ruiz", cargo: "Desarrollador Jr.", departamento: "Desarrollo", correo: "carlos.ruiz@inmobiliaria.com" },
];

function App() {
  return (
    <div>
      <NavBar />
      <div className="mt-24">
        <ListaEmpleados empleados={empleadosDemo} />
      </div>
    </div>
  );
}

export default App;