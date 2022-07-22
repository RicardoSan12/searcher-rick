import { useState, useEffect } from 'react';
import {getAll} from '../services/getAll';
import { useLocation } from 'wouter';

const useCambiante = () => {
  const [character, setCharacter] = useState([]);

  const [site, setSite] = useState(1);
  const [busca, setBusca] = useState('');
  const [envia, setEnviar] = useState('');

  useEffect(() => {
    getData('character', site, envia).then((res) => setCharacter(res));
  }, [site, envia]);

  const handleNextPage = () => {
    setSite((prev) => prev + 1);
    console.log(site);
  };
  const personaje = (evt) => {
    setBusca(evt.target.value);
    console.log(busca);
  };
  const envio = (evt) => {
    evt.preventDefault();
    setEnviar(busca);
  };

  return { character, handleNextPage, personaje, envio, busca };
};

export default useCambiante;
