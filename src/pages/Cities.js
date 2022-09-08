import React from 'react'
import CitiesCards from '../components/CitiesCards'
import InputSearch from '../components/InputSearch'
import '../styles/Cities.css'
import { useState } from 'react'
import { useGetAllCitiesQuery, useGetCityNameQuery } from '../features/citiesApi' 
  
  const Cities = () => {

  const [find, setFind] = useState("");

  const {data: cities} = useGetAllCitiesQuery()
  const {data: cityFind} = useGetCityNameQuery(find)

  function searchItem(search) {
    setFind(search);
  }

  return (
    <div className="container-cities">
      <InputSearch searchItem={searchItem}/>
      <CitiesCards cities={cityFind ? cityFind : cities} />
    </div>
  )
}

export default Cities


