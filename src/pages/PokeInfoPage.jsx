import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PokeInfoPage = () => {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokemon, setPokemon] = useState({});
  const [data, loading, error] = useFetch(url);
 
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
 
  return (
<div>
      <h1>{data.name}</h1>
      <p>Altura: {data.height}</p>
      <p>Peso: {data.weight}</p>
      <p>Experiencia base: {data.base_experience}</p>
    </div>
 );
};

export default PokeInfoPage;
