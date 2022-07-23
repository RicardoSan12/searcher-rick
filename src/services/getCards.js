import {API_URL} from "./settings"

const fromApiResponseToCards = (apiResponse) => {
  const { info, results = [] } = apiResponse;

  if (Array.isArray(results)) {
    const cards = results.map((card) => {
      const { name, image, id, residents=[], episode, characters= [] } = card
      return {name, image, id,residents, episode, characters, episode}
    });
    return cards;
  }
  return []
};

export default function getCards({ resource = 'character', page = 1, keyword }) {
  let endpoint = keyword
    ? `${resource}/?page=${page}&name=${keyword}`
    : `${resource}/?page=${page}`;
    
  return fetch(`${API_URL}${endpoint}`)
    .then((res) => res.json())
    .then(fromApiResponseToCards);
};






// const fromApiResponseToCards = (apiResponse) => {
//   const { info, results = [] } = apiResponse;

//   if (Array.isArray(results)) {
//     const cards = results.map((card) => {
//       const { name, image, type, dimension, residents=[], episode, air_date, characters= [],gender, species, status, location, episode= [] } = card
//       return {
//         name, image, type, dimension, residents, episode, air_date, characters, gender, species, status, location, episode
//       }
//     });
//     return cards;
//   }
//   return []
// };

