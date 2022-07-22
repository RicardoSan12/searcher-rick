import React, { useState } from 'react';
import "./Site.css"
import ListContent from '../../components/ListContent';
import useSearch from '../../hooks/useSearch';

import SearchForm from '../../components/SearchForm';
import ButtonPage from '../../components/ButtonPage';
import Tags from "../../components/Tags"


const Site = ({ params }) => {
  const { site } = params; 
  const { cards, handleNext, handlePrevious } = useSearch(site);
  
  const [personaje, setPersonaje] = useState("")
  let handleName = (evt) => setPersonaje(evt.target.value)
  
  let findCard = cards.filter(card => card.name.toLowerCase().includes(personaje.toLowerCase()))
  // console.log(findCard)

  return (
    <section className="Site">
      <SearchForm />
      <h1>{site.toUpperCase()}</h1>

      <input type="text" onChange={handleName} value={personaje} />

      <Tags />
      <ul className="ListOfCards">
        {findCard.map((card) => (
          <ListContent key={card.id} {...card} menu={site} />
        ))}
      </ul>
      <ButtonPage onNext={handleNext} onPrevious={handlePrevious} />
    </section>
  );
};
export default Site;
