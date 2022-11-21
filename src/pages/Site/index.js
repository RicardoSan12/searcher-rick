import React, { useState, useEffect } from 'react';
import './Site.css';
import useSearch from '../../hooks/useSearch';

import ListContent from '../../components/ListContent';
import ListOfCards from '../../components/ListOfCards';
import SearchForm from '../../components/SearchForm';
import ButtonPage from '../../components/ButtonPage';
import Tags from '../../components/Tags';

const Site = ({ params }) => {
  const { site } = params;
  const { handleNext, handlePrevious, handleSearch, cardName, findCard } =
    useSearch(site);

  const [loading, setLoding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log('aaaa');
      setLoding(!loading);
    }, 1000);
  }, []);

  return (
    <section className="Site">
      <h1>{site.toUpperCase()}</h1>
      <SearchForm handleSearch={handleSearch} cardName={cardName} />
      <Tags />
      <ListOfCards>
        {!loading &&
          findCard.map((card) => (
            <ListContent key={card.id} {...card} menu={site} />
          ))}
      </ListOfCards>
      <ButtonPage onNext={handleNext} onPrevious={handlePrevious} />
    </section>
  );
};
export default Site;

const Delay = () => {};
