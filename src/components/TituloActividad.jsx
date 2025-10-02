import React from 'react';

function TituloActividad(props) {
  return (
    <h2 className="text-2xl text-black mt-8 mb-4 border-b-2 border-black w-full max-w-4xl text-center">
      {props.texto}
    </h2>
  );
}

export default TituloActividad;