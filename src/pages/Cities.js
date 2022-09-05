import React from 'react'
import CitiesCards from '../components/CitiesCards'
import InputSearch from '../components/InputSearch'
import '../styles/Cities.css'
import { useState, useEffect } from 'react'
import { useGetAllCitiesQuery } from '../features/citiesApi'



/* 

  const [items, setCities] = useState([]);
  
  const URL = "http://localhost:4000/cities/?city=";

  useEffect(() => {
    axios
      .get(URL + find)
      .then((response) => setCities(response.data.response))
      .catch((error) => console.log(error));
  }, [find]);

  
  /* let items = useSelector( state => state.cities.cities)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, []) */ 
  
  const Cities = () => {
    const {
      data: cities,
      error, 
      isLoading,
      isSuccess,
      isFailed,
    } = useGetAllCitiesQuery()
  
  
  const [find, setFind] = useState("");

  function searchItem(search) {
    setFind(search);
  }

  return (
    <div className="container-cities">
      <InputSearch searchItem={searchItem}/>
      <CitiesCards items={cities} />
    </div>
  )
}

export default Cities


