import { NavLink, Outlet, useParams } from "react-router-dom";
import Spinner from "react-spinner-material";
import {
  useGetFilmByIdQuery,
  useGetPopularFilmsQuery,
  useGetSimilarFilmsByIdQuery,
} from "../../Services/FetchFIlms";
import { GiPauseButton } from "react-icons/gi";
import "./Film.css";
import { useState } from "react";
import PlayerInfo from "./PlayerInfo";
import { Sliderr } from "../../Components/Slider/Slider";
interface FilmProps {}

const Film: React.FC<FilmProps> = () => {
  const { id } = useParams();
  const filmID = Number(id);
  const { data, isLoading } = useGetFilmByIdQuery(filmID);
  const { data: similarFilms } = useGetSimilarFilmsByIdQuery(filmID);
  const [isPlaying, setIsPlaying] = useState(false);
  window.scrollTo({ top: 0, behavior: "smooth" });

  const activeClassName = (isActive: boolean) => {
    if (isActive) {
      return "FilmNav-Link active";
    } else {
      return "FilmNav-Link";
    }
  };

  return (
    <div>
      {isLoading && <Spinner />}
      {data && (
        <>
          <div className="Player">
            {!isPlaying ? (
              <PlayerInfo data={data} setIsPlaying={setIsPlaying} />
            ) : (
              <button
                onClick={() => setIsPlaying(false)}
                className="PauseButton"
              >
                <GiPauseButton />
              </button>
            )}
          </div>
          <section className="Film-info_container">
            <nav>
              <NavLink
                className={({ isActive }) => activeClassName(isActive)}
                to=""
                end
              >
                Description
              </NavLink>
              <NavLink
                className={({ isActive }) => activeClassName(isActive)}
                to="cast"
              >
                Team
              </NavLink>
              <NavLink
                className={({ isActive }) => activeClassName(isActive)}
                to="gallery"
              >
                Trailer & Photos
              </NavLink>
              <NavLink
                className={({ isActive }) => activeClassName(isActive)}
                to="comments"
              >
                Comments
              </NavLink>
            </nav>
            <Outlet />
            <h1 className="Similar">Similar movies: </h1>
            <Sliderr data={similarFilms} />
          </section>
        </>
      )}
    </div>
  );
};

export default Film;
