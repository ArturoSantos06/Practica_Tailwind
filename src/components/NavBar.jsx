import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 md:w-4/5 lg:w-3/4 max-w-screen-xl mx-auto z-50">
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg p-4 flex justify-between items-center">

        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">Inmobiliaria</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Inicio</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Propiedades</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Servicios</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;