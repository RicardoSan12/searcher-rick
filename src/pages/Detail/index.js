import React from 'react';
import './style.css';
import useSingleCard from '../../hooks/useSingleCard';
import { CardCharacter, CardLocation, CardEpisode } from './components/Card';

//ListOfCards
const Detail = ({ params = {} }) => {
  const { id, site } = params;
  const { cardInfo } = useSingleCard(id, site);


  switch (site) {
    case 'character':
      return <CardCharacter infoCard={cardInfo} />;
    case 'location':
      return <CardLocation infoCard={cardInfo} />;
    case 'episode':
      return <CardEpisode infoCard={cardInfo} />;
    default:
      return 'Error este lugar no existe';
  }
};
export default Detail;