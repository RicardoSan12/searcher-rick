import React, { useState } from 'react';
import './ButtonPage.css';

// import ListContent from '../../components/ListContent';
// import useSearch from '../../hooks/useSearch';

// import CardContent from '../../components/CardContent';

const ButtonPage = ({ onNext, onPrevious }) => {
  return (
    <div className="ButtonPage">
      <button onClick={onPrevious}>Pagina anterior</button>
      <button onClick={onNext}>Siguente pagina</button>
    </div>
  ); 
};
export default ButtonPage;
