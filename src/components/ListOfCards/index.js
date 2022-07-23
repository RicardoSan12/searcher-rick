import React, { useState } from 'react';
import "./ListOfCards.css"
import ListContent from '../../components/ListContent';

const ListOfCards = () => {
  return (
    <ul className="ListOfCards">
      {findCard.map((card) => (
        <ListContent key={card.id} {...card} menu={site}/>
      ))}
    </ul>
  );
};
export default ListOfCards;
