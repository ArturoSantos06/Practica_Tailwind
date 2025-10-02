import React, { useState } from 'react';

function ToggleSeccion() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(prev => !prev);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-xl rounded-4xl border border-gray-100 m-4 w-full max-w-lg mx-auto" >
      
      <button
        onClick={toggleVisible}
        className={`px-6 py-2 rounded-full font-bold transition duration-300 shadow-lg ${
          visible ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        } text-white`}
        aria-expanded={visible}
      >
        {visible ? 'Ocultar a Uriel' : 'Mostrar a Uriel'}
      </button>

      {visible && (
        <div className="mt-4 p-4 flex flex-col items-center bg-white border-4 border-red-600 rounded-lg w-full">
          <h4 className="text-xl font-bold text-black mb-3">El es Uriel la mascota de la UNID.</h4>
          <img 
            src="https://assets.puzzlefactory.com/puzzle/341/838/original.webp" 
            alt="Mascota Uriel de la UNID"
            className="w-48 h-auto rounded-xl shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default ToggleSeccion;