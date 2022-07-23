import { useState, useEffect } from 'react';
import getSingleCard from '../services/getSingleCard';

const useSingleCard = (paramsId, pathName) => {
  const [cardInfo, setCardInfo] = useState();
  
  useEffect(() => {
    getSingleCard({resource: pathName, id: paramsId}).then(setCardInfo)
  }, [paramsId]);

  // console.log(cardInfo, cardId)
  return {
    cardInfo,
  };
};

export default useSingleCard;
