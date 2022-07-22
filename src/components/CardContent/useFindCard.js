import { useState, useEffect } from 'react';
import { getSingleId } from '../../services/getAll';

const useFindCard = (paramsId, pathName) => {
  const [cardInfo, setCardInfo] = useState();

  useEffect(() => {
    getSingleId(pathName, paramsId).then((res) => setCardInfo(res));
  }, [paramsId]);

  // console.log(cardInfo, cardId);

  return {
    cardInfo,
  };
};

export default useFindCard;
