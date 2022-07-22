// version 1 -- <li className="ListContent" ref={indexCard} onClick={onClickCard}>
      //description: utilizando useRef encuetra el id de la carta junto indexCard.current = id; dentro
                  // el evento para cambiar el id por cada evento click



// const onClickCard = (e) => {
    // changeIndex(e.target.parentNode.id);
//     <li className="ListContent" id={id}>
//       <div className="indexContent" onClick={onClickCard}></div>


import React from 'react';
import "./Site.css"
import ListContent from '../../components/ListContent';
import useSearch from '../../hooks/useSearch';

import SearchForm from '../../components/SearchForm';
import ButtonPage from '../../components/ButtonPage';
import Tags from "../../components/Tags"

const Site = ({ params }) => {
  const { site } = params; 
  const { cards, handleNext, handlePrevious} = useSearch(site);

  // if (!cards) return <h1>No existe {site}</h1>;

  return (
    <section className="Site">
      <SearchForm />
      <h1>{site.toUpperCase()}</h1>
      <Tags />
      <ul className="ListOfCards">
        {cards.map((card) => (
          <ListContent key={card.id} {...card} menu={site} />
        ))}
      </ul>
      <ButtonPage onNext={handleNext} onPrevious={handlePrevious} />
    </section>
  );
};
export default Site;
