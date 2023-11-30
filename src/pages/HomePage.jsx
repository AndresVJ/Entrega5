import React from "react";
import { useRef } from "react";
import { setTrainerName } from "../store/slices/trainerName.slices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './styles/HomePage.css'

const HomePage = () => {
  const inputTrainer = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <div className='home_body'>
      <div className="home_container">
      <img className='home_img'src="/images/image 11.png" alt="" />
      <h2 className="home_hi ">HI Trainer!!!</h2>
      <p className="home_phrase">to star, please, enter your trainer name😁</p>
      <form className='home_form' onSubmit={handleSubmit}>
        <input className="home_input"ref={inputTrainer} type="text" />
        <button className="home_btn">Start!</button>
      </form>
    </div>
    <footer className='home_footer'>
      <img className='home_footer_image'src="/images/Pokeball.png" alt="" />
      <div className='home_footer_rectangle_1'></div>
      <div className='home_footer_rectangle_2'></div>
    </footer>
    </div>
   
    
  );
};

export default HomePage;
