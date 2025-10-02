import React from 'react';
import NavBar from './components/NavBar';
import TituloActividad from './components/TituloActividad';
import ListaEmpleados from './components/ListaEmpleados';
import Contador from './components/Contador';
import ToggleSeccion from './components/ToggleSeccion';

const empleadosDemo = [
  { id: 1, nombre: "Juan Sandoval", cargo: "Analista", departamento: "Finanzas", correo: "juan.perez@inmobiliaria.com" },
  { id: 2, nombre: "María López", cargo: "Gerente de Proyecto", departamento: "Tecnología", correo: "maria.lopez@inmobiliaria.com" },
  { id: 3, nombre: "Carlos Ruiz", cargo: "Desarrollador Jr.", departamento: "Desarrollo", correo: "carlos.ruiz@inmobiliaria.com" },
];

function App() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="mt-24 w-full flex flex-col items-center">
        <ListaEmpleados empleados={empleadosDemo} /> 
        <TituloActividad texto="Contador con useState" /> 
        <Contador /> 
        <TituloActividad texto="Toggle de Visibilidad" />
        <ToggleSeccion />
      </div>
    </div>
  );
}

export default App;