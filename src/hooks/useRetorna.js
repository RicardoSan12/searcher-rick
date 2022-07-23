import React, { useEffect, useState } from 'react';

const contenido = async (api) => {
  const data = await fetch(api);
  let resul = await data.json();
  let { results } = resul;
  return results;
};

const rickAPI = 'https://rickandmortyapi.com/api/character';

const useRetorna = (inicialState = '') => {
  const [respuesta, setRespuesta] = useState(inicialState);
  const [palabra, setPalabra] = useState('');

  useEffect(() => {
    // loading data from api rickandmorty
    const response = contenido(rickAPI);
    response.then((res) => setRespuesta(res));
  }, []);

  const handleChange = (evt) => {
    // rendering logica del buscador
    setPalabra(evt.target.value);
    // console.log(palabra)
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPalabra(evt.currentTarget.value);
    // console.log(palabra);
  };

  const LazyTrending = () => {
    // logica de cargar lista de imagnes
    useEffect(() => {
      const onChange = (entries, observer) => {
        const el = entries[0];
        // console.log(entries);
        if (el.isIntersecting) {
          setShow(true);
          observer.disconnect(); // no vuelve a cargar el observer
        }
      };
      const observer = new IntersectionObserver(onChange, {
        rootMargin: '150px',

        // observer.observe(elementRef.current)
        // observer.disconnect()
      });
    });
  };

  return {
    respuesta,
    handleChange,
    handleSubmit,
    palabra,
  };
};
export default useRetorna;
// aplicar Mi propio ejemplo de useref y react.lazy
