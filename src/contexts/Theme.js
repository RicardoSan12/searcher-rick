import React, { createContext, useState } from 'react';

export const TemaContext = createContext();

const TemaProvider = ({ children }) => {
  const [temita, setTemita] = useState('light');

  const selectTema = {
    light: 'dark',
    dark: 'light',
  };
  const changeTemita = () => setTemita((prev) => selectTema[prev]);

  // const busquesdasLocal = localStorage.getItem('tema') ?? []
  // const [busquedas, setBusquedas] = useState(busquesdasLocal);
  // localStorage.setItem('tema', JSON.stringify(busquedas))

  return (
    <section>
      <TemaContext.Provider value={{ temita, changeTemita }}>
        {children}
      </TemaContext.Provider>
    </section>
  );
};

export default TemaProvider;

const operacionesAnteriores = () => {
  let temaPrueba = {
    color: 'black',
    backgroundColor: 'white',
  };
  if (temita == 'light') {
    temaPrueba = { color: 'white', backgroundColor: 'black' };
  }
};
