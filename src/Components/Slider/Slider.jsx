import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"
import { FilmList } from "../../Services/Interfaces/Interfaces";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";
import Card from "../Card/Card";
import { useGetPopularFilmsQuery } from "../../Services/FetchFIlms";
import Spinner from "react-spinner-material";


const Sliderr = ({ data }) => {
  const navigate = useNavigate()
  const ref = useRef()
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false
  };
  console.log(data);
  return (
    <div className="Sliderr">
      <div className="Slider-wrapper">
        <Slider className="Slider" ref={ref} {...settings}>
          {data && data.results.map((film) => <Card key={film.id} data={film} />)}
        </Slider>
      </div>
      <div className="Slider-buttons">
        <button onClick={() => ref.current.slickPrev()}>
          <BsArrow90DegLeft cursor="pointer" />
        </button>
        <button onClick={() => ref.current.slickNext()}>
          <BsArrow90DegRight cursor="pointer" />
        </button>
      </div>
    </div>
  );
};

export { Sliderr };
