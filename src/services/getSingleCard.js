import {API_URL} from "./settings"

const fromApiResponseToCards = (apiResponse) => {
  const { name, image, type, dimension, residents=[], episode, air_date, characters= [],gender, species, status, location } = apiResponse;

  return {
    name, image, type, dimension, residents, episode, air_date, characters, gender, species, status, location, episode
  }
};

const getSingleCard = ({ resource = 'character', id }) => {
  let endpoint = id ? `${resource}/${id}` : resource;
  return fetch(`${API_URL}${endpoint}`)
    .then((res) => res.json())
    .then(fromApiResponseToCards);
};
export default getSingleCard

// getSingleCard({resource: "character", id: 5}).then(res=> console.log(res))

// export default function getSingleCard({ resource = 'character', id }) {






  // const getSingleId = async (pathName = 'location', id = 1) => {
  //   // const findId = `/${id}`; // se reutilazar la funcion para que acepte el resultado de getSingleCard
  //   const api = `${inicialUrl}${pathName}/${id}`;
  //   const data = await fetch(api);
  //   if (typeof id !== Array) return await data.json();
  //   return 0; // aqui devuelve un array de objetos corregirlo
  // };