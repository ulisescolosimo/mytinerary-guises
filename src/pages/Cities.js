import React from 'react'
import CitiesCards from '../components/CitiesCards'
import InputSearch from '../components/InputSearch'
import '../styles/Cities.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../features/citiesSlides'


const Cities = () => {

  /* const [items, setCities] = useState([]);
  const [find, setFind] = useState("");
  const URL = "http://localhost:4000/cities/?city=";

  useEffect(() => {
    axios
      .get(URL + find)
      .then((response) => setCities(response.data.response))
      .catch((error) => console.log(error));
  }, [find]);

  function searchItem(name) {
    setFind(name);
  } */

  let items = useSelector( state => state.cities.cities)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])
  
  return (
    <div className="container-cities">
      <InputSearch />
      <CitiesCards items={items} />
    </div>
  )
}

export default Cities


