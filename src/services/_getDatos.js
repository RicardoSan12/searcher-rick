const api = 'https://rickandmortyapi.com/api/character/?name=rick&status=alive';

const filtrador = () => {
  const peticion = fetch(
    'https://rickandmortyapi.com/api/character/?name=rick'
  ).then((res) => res.status);

  const filtraUsers = ['name', 'status', 'species', 'gender'];
  const filterLocation = ['name', 'dimension'];
  const filterEpisode = ['name', 'episode'];

  for (let i = 0; i < 10; i++) {}

  if (peticion) console.log('funciomo');
};

const filterSearch = async (name= "rick", itemMenu = "character", index = 1) => {
  const apiSearch = `https://rickandmortyapi.com/api/${itemMenu}/?page=${index}&name=${name}`
  const data = await fetch(apiSearch)
  const {results} = await data.json()
  return results
}
let filterUser = data.filter((item) =>
item.name.toLowerCase().includes(palabra.toLowerCase())
);

