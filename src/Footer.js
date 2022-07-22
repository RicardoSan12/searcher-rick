import React, { useContext } from 'react';
import useRetorna from './hooks/useRetorna.js';

const Footer = () => {
  const { respuesta, palabra, handleChange, handleSubmit } = useRetorna([]);

  return (
    <div className="Footer">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={palabra} />
      </form>
      <img src={someName[1]} className="spidi" />
    </div>
  );
};

let someName = [
  'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/RHGONLCF6VCNZAVBVD2W5INW4Q.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBhZBztKxkJSg7Qmw1UY8W4K917T1EPdqq_9UP2o-R0fY67vdhI6svxUInI_n8PgEHtA&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpaKfpjvn0YT6jWjMcGJBzGsZREAH3rZXdMg&usqp=CAU',
];
export default Footer;

// import Contextprueba from './contexts/Contextprueba';
// const {datos, numberFavorite} = useContext(Contextprueba);
