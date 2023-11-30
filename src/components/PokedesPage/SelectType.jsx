import React, { useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import '../../pages/styles/SelectType.css'

const SelectType = ({setSelectValue}) => {

  const url = "https://pokeapi.co/api/v2/type";

  const [infoTypes, getInfoTypes] = useFetch(url);

  useEffect(() => {
    getInfoTypes();
  }, []);

  const selectElement = useRef();

  const handleChange = () => {
   setSelectValue(selectElement.current.value) 
  };

  return (
    <select className='options_types'ref={selectElement} onChange={handleChange}>
      <option value='AllPokemons'>All Pokemons</option>
      {infoTypes?.results.map((type) => (
        <option key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectType;
