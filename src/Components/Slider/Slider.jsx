import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"
import { FilmList } from "../../Services/Interfaces/Interfaces";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";
import Card from "../Card/Card";
import { useGetPopularFilmsQuery } from "../../Services/FetchFIlms";


const Sliderr = () => {
  const { data } = useGetPopularFilmsQuery("");
  const navigate = useNavigate()
  const ref = useRef()
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className="Sliderr">
      <div className="Slider-wrapper">
        <Slider className="Slider" ref={ref} {...settings}>
          {data && data.results.map((film) => <Card data={film} />)}
        </Slider>
      </div>
      <div className="Slider-buttons">
        <BsArrow90DegLeft onClick={() => ref.current.slickPrev()} cursor="pointer" />
        <BsArrow90DegRight onClick={() => ref.current.slickNext()} cursor="pointer" />
      </div>
    </div>
  );
};

export { Sliderr };
