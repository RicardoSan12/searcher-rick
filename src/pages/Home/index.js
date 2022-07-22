import React from 'react';
import './Home.css';
import useSearch from '../../hooks/useSearch';
import ListContent from '../../components/ListContent';

const Home = () => {
  const { cards, handleNext } = useSearch();
  return (
    <section className="Home">
      <div className="Home-history">
        <h2>Ultimas Busquedas</h2>
      </div>
      <div className="Home-recoment">
        <h2>Cosas Recomendadas</h2>
        <button onClick={handleNext}>Siguiente</button>
        <ul className="ListOfCards">
          {cards.map((item) => {
            return <ListContent {...item} menu="character" />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Home;

// 2 recomedaciones personajes, locaciones, Episodios, Especies
const recoment = [
  'https://rickandmortyapi.com/api/character/avatar/260.jpeg',
  'https://rickandmortyapi.com/api/character/avatar/28.jpeg',
  'https://rickandmortyapi.com/api/character/avatar/220.jpeg',
  'https://rickandmortyapi.com/api/character/avatar/260.jpeg',
];
