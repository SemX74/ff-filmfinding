import { FC } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import { useNavigate } from "react-router-dom";
import { useFindGenreById } from "../../Helpers/FindGenre";
import { IFilm } from "../../Services/Interfaces/Interfaces";
import "./Card.scss";
interface CardProps {
  data: IFilm;
}

const Card: FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="Card">
      <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt="" />
      <section
        onClick={() => navigate(`/film/${data.id}`)}
        className="Card-Info"
      >
        <div className="Card-info_text">
          <h2 className="TopRated-Left_Title">{data.title}</h2>
          <h6 className="TopRated-Left_Info">
            {data.release_date.slice(0, 4)} | {useFindGenreById(data.genre_ids)}
          </h6>
        </div>
      </section>
    </div>
  );
};

export default Card;
