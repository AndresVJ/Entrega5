import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/PokedesPage/PokeCard";
import axios from "axios";
import { useRef } from "react";
import SelectType from "../components/PokedesPage/SelectType";
import "./styles/PokedexPage.css";

const PokedexPage = () => {

  const [selectValue, setSelectValue] = useState("AllPokemons");
  const [inputValue, setInputValue] = useState("");

  const trainerName = useSelector((store) => store.trainerName);

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=25";

  const [pokemons, getPokemons, getByTypePokemons] = useFetch(url);

  useEffect(() => {

    if (selectValue === "AllPokemons") {
      getPokemons();
    } else {
      getByTypePokemons(selectValue);
    }
  }, [selectValue]);

  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.toLowerCase().trim());
    inputSearch.current.value = '';
  };

  const cbFilter = (poke) => {
    const nameFiltered = poke.name.includes(inputValue);
    return nameFiltered
  }
 
  return (
    <div>
      <header>
        <img className='page_header_image' src="/images/image 11.png" alt="" />
        <div className='page_header_rectangle_1'></div>
        <div className='page_header_rectangle_2'></div>
      </header>
      <h2 className="page_phrase">Hi <span className="page_phrases">{trainerName}</span></h2>
      <p className='rest_phrase' >here you can find your favorite pokemon</p>
        
      
      <form className="page_form" onSubmit={handleSubmit}>
        <input className="page_input" ref={inputSearch} type="text" />
        <button className="page_button">search</button>
      </form>
        <SelectType 
      setSelectValue={setSelectValue} />
      <section className="select_container">
      <div className="card_container">
        {
        pokemons?.results.filter(cbFilter).map(poke => 
          <PokeCard 
          key={poke.url} url={poke.url} 
          />
         )
        }
      </div></section>
      
      
      
    </div>
  );
};

export default PokedexPage;
