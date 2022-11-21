import React from 'react';
import './SearchForm.css'; 

import useSearch from '../../hooks/useSearch'; 

const SearchForm = ({ cardName, handleSearch }) => { 
  // const { cardName, handleSearch } = useSearch();
  // cards.find((item) => item.name == word)
  return ( 
    <>
      <form className="SearchForm">
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
    </>
  );
};
export default SearchForm;





// import React from "react"
import { useLocation } from "wouter"
import useForm from './useForm'
// import css from "./SearchForm.module.css"
// import Button from 'components/Button'

const RATINGS = ["g", "pg", "pg-13", "r"]
function SearchFoooorm({
  initialKeyword = '',
  initialRating = RATINGS[0]
}) {
  const [_, pushLocation] = useLocation()

  const {keyword, rating, changeKeyword, changeRating} = useForm({
     initialKeyword, initialRating })

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      // navegar a otra ruta
      pushLocation(`/search/${keyword}/${rating}`)
    }
  }

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={}>
        {/* <Button>Buscar</Button> */}
        <input
          className={}
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <select className={} value={rating} onChange={handleChangeRating}>
          <option disabled>
            Rating:
          </option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
      </form>
    </>
  )
}