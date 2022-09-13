import { FC } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import { useGetPopularFilmsQuery } from "../../Services/FetchFIlms";
import Card from "../Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Slider.css";

interface SliderComponentProps {}

const SliderComponent: FC<SliderComponentProps> = () => {
  const { data } = useGetPopularFilmsQuery("");

  return (
    <div>
      <Carousel className="Carousel" fade>
        {data &&
          data.results.map((el) => (
            <Carousel.Item>
              <Card data={el} />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default SliderComponent;
