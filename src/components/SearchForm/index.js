import React from 'react';
import './SearchForm.css';

import useSearch from '../../hooks/useSearch'; 

const SearchForm = () => { 
  const { cardName, handleSearch } = useSearch();
  // cards.find((item) => item.name == word)
  return (
    <div className="SearchForm">
      <h2><label htmlFor="search">Filtrador</label></h2>
      <form>
        <div>
          <input
            type="text"
            id="search"
            placeholder="Rick Sanchez or morty..."
            autoComplete="off"
            onChange={handleSearch}
            value={cardName}
          />
        </div>
        <button>BUSCAR</button>
      </form>
    </div>
  );
};
export default SearchForm;
