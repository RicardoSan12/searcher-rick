import { useState, useEffect } from 'react';
import getSingleCard from '../../services/getSingleCard';

import { getSingleId } from '../../services/getAll';
 
const useFindCard = (paramsId, pathName) => {
  const [cardInfo, setCardInfo] = useState({});
  useEffect(() => {
    // getSingleCard({resource: pathName, id: paramsId}).then(setCardInfo)
    getSingleId(pathName, paramsId).then(setCardInfo);
  }, [paramsId]);


  return {
    cardInfo,
  };
};

export default useFindCard;
