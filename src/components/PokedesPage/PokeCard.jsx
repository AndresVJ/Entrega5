import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/styles/PokeCard.css";

const PokeCard = ({ url }) => {
  const [infoPoke, getInfoPoke] = useFetch(url);

  useEffect(() => {
    getInfoPoke();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/pokedex/${infoPoke.id}`);
  };

  return (
    <article className='card_total' onClick={handleNavigate}>
  
  <header className='card_head'>
    <img
       className='card_image'
      src={infoPoke?.sprites.other["official-artwork"].front_default}
      alt=""
    />
  </header>
  <section className='card_container_info'>
    
    <h3 className='card_name'>{infoPoke?.name}</h3>
    <ul className='card_type'>
      
      {infoPoke?.types.map((infoType) => (
        <li className='card_type_name' key={infoType.type.url}>{infoType.type.name}</li>
      ))}
    </ul>
    <hr className='card_divition'/>
    <ul className='card_stat'>
      {infoPoke?.stats.map((infoStat) => (
        <li className='card_label_content'key={infoStat.stat.url}>
          
          <span className='card_Label'>{infoStat.stat.name}</span> <span className='card_item'>{infoStat.base_stat}</span>
        </li>
      ))}
    </ul>
  </section>
</article>

  );
};

export default PokeCard;

