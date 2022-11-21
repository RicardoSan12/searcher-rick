import { API_URL } from './settings';

const fromApiResponseToCards = (apiResponse) => {
  const { info, results = [] } = apiResponse;
  // const { count, next, pages, prev } = info
  if (Array.isArray(results)) {
    const cards = results.map((card) => {
      const {
        name,
        image,
        id,
        residents = [],
        episode,
        characters = [],
      } = card;
      return { name, image, id, residents, episode, characters, episode };
    });
    return cards;
  }
  return []; // errorApi()
};

export default function getCards({ section = 'character', page = 1, keyword }) {
  let endpoint = keyword
    ? `${section}/?page=${page}&name=${keyword}`
    : `${section}/?page=${page}`;

  return fetch(`${API_URL}${endpoint}`)
    .then((res) => res.json())
    .then(fromApiResponseToCards);
}
// Informacion de info
// const  info = {count: 826,next: "https://rickandmortyapi.com/api/character/?page=2",pages: 42,prev: null}




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
