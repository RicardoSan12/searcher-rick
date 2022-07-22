const inicialUrl = 'https://rickandmortyapi.com/api/';

const getAll = async (pathName = 'character', index = 1) => {
  const api = `${inicialUrl}${pathName}/?page=${index}`;
  const data = await fetch(api);
  const { results } = await data.json();
  return results;
};

const getSingleId = async (pathName = 'location', id = 1) => {
  // const findId = `/${id}`; // se reutilazar la funcion para que acepte el resultado de getSingleCard
  const api = `${inicialUrl}${pathName}/${id}`;
  const data = await fetch(api);
  if (typeof id !== Array) return await data.json();
  return 0; // aqui devuelve un array de objetos corregirlo
};

// ('https://rickandmortyapi.com/api/character/?name=rick&status=alive');

const getSingleCard = async (
  pathName,
  name = '',
  type = '',
  status = '',
  species = '',
  gender = '',
  dimension = '',
  episode = ''
) => {
  // Este seria un filtrador muy especifico, se podria crear un buscar por pagina cards.map()
  let api = `${inicialUrl}${pathName}/?name=${name}&type=${type}`;
  let apiPathName;

  if (pathName == 'character')
    return (apiPathName = `${api}&status=${status}&species=${species}&gender=${gender}`);
  else if (pathName == 'location')
    return (apiPathName = `${api}&dimesion=${dimension}`);
  else if (pathName == 'episode')
    return (apiPathName = `${api}&episode=${episode}`);

  const data = await fetch(apiPathName);
  const { results } = await data.json();
  return results; // Solo obtiene url, hay que hacer otra peticion
};

export { getAll, getSingleId, getSingleCard };

// personajes
//name: filter by the given name.
// status: filter by the given status (alive, dead or unknown).
// species: filter by the given species.
// type: filter by the given type.
// gender: filter by the given gender (female, male, genderless or unknown).

// Location
// name: filter by the given name.
// type: filter by the given type.
// dimension: filter by the given dimension.

// Filter episodes
// name: filter by the given name.
// episode: filter by the given episode code.

// const characterURL = `${api}&status=${status}&species=${species}&gender=${gender}`
//   const locationURL= `${api}&dimesion=${dimension}`
//   const episodeURL = `${api}&episode=${episode}`
