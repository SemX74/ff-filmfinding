import { FC } from "react";
import { IFilm } from "../../Services/Interfaces/Interfaces";
import { useFindGenreById } from "../../Helpers/FindGenre";
import "./TopRated.css";
interface TopRatedLiProps {
  data: IFilm;
}
const TopRatedLi: FC<TopRatedLiProps> = ({ data }) => {
  return (
    <li className="TopRated_li">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
          alt=""
        />
      </figure>
      <div className="TopRated-Left">
        <h2 className="TopRated-Left_Title">{data.title}</h2>
        <h6 className="TopRated-Left_Info">
          {data.release_date.slice(0, 4)} | {useFindGenreById(data.genre_ids)}
        </h6>
      </div>
      <div className="TopRated-Right">
        <div className="TopRated-Right-Rating_wrapper">
          <h2 className="TopRated-Right_Rating">{data.vote_average}</h2>
          <h6 className="TopRated-Right-Rating_source">
            Votes: {data.vote_count}
          </h6>
        </div>
      </div>
    </li>
  );
};

export default TopRatedLi;
