import { useState, useEffect, useRef } from 'react';
import { getAll, getSingleId } from '../services/getAll';

import getCards from '../services/getCards';

const useSearch = (inicialSite = 'location') => {
  //useAllandNextPage
  const [cards, setCards] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getCards({resource: inicialSite, page}).then(setCards)
  }, [page]);

  const handleNext = () => setPage(page + 1);
  const handlePrevious = () => setPage(page - 1);

  const [cardName, setCardName] = useState('');
  const handleSearch = (evt) => setCardName(evt.target.value);
  
  let findCard = cards.filter(card => card.name.toLowerCase().includes(cardName.toLowerCase()))
  

  return {
    cards,
    handleNext,
    handlePrevious,
    cardName,
    handleSearch,
    findCard
  };
};

export default useSearch;
