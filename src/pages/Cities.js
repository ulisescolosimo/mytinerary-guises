import React from 'react'
import CitiesCards from '../components/CitiesCards'
import InputSearch from '../components/InputSearch'
import '../styles/Cities.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Cities = () => {

  const [items, setCities] = useState([]);
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
  }
  
  return (
    <div className="container-cities">
      <InputSearch searchItem={searchItem} />
      <CitiesCards items={items} />
    </div>
  )
}

export default Cities


