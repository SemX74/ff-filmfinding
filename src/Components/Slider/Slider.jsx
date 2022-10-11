import { useRef } from "react";
import "./Slider.css";
import Slider from "react-slick";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";
import Card from "../Card/Card";


const Sliderr = ({ data }) => {
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
    <>
      <div className="slider-wrapper">
        <Slider className="slider" ref={ref} {...settings}>
          {data && data.results.map((film) => <Card key={film.id} data={film} />)}
        </Slider>
      </div>
      <div className="slider-buttons__wrapper">
        <button className="slider-buttons-wrapper__button button__left" onClick={() => ref.current.slickPrev()}>
          <BsArrow90DegLeft cursor="pointer" />
        </button>
        <button className="slider-buttons-wrapper__button button__right" onClick={() => ref.current.slickNext()}>
          <BsArrow90DegRight cursor="pointer" />
        </button>
      </div>
    </>
  );
};

export { Sliderr };
