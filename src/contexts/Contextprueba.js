import React from 'react';

const fecha = new Date();

const Contextprueba = React.createContext({
  numberFavorite: 34,
  datos: { dia: fecha.getDay(), hora: fecha.getHours() },
});

export default Contextprueba;
