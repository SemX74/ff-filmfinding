import { FC } from "react";
import { IFilm } from "../../Services/Interfaces/Interfaces";
import { useFindGenreById } from "../../Helpers/FindGenre";
import { useNavigate } from "react-router-dom";
import "./GoatCard.scss";
interface GoatCardProps {
  data: IFilm;
}
const GoatCard: FC<GoatCardProps> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <section onClick={() => navigate(`/film/${data.id}`)} className="goat-card">
      <figure className="goat-card__left-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
          alt=""
        />
      </figure>
      <div className="goat-card__right-wrapper">
        <p className="description__tagline goat-card-right__title">
          {data.title} {data.adult && "18+"}
        </p>
        <p className="description__overview">{data.overview}</p>
        <p className="description__header">
          Release date: {data.release_date} <br /> Genres:{" "}
          {useFindGenreById(data.genre_ids)} <br /> Popularity:{" "}
          {data.popularity}
        </p>
      </div>
    </section>
  );
};

export default GoatCard;
