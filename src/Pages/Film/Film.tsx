import { NavLink, Outlet, useParams } from "react-router-dom";
import Spinner from "react-spinner-material";
import { useGetFilmByIdQuery } from "../../Services/FetchFIlms";
import { GiPauseButton } from "react-icons/gi";
import "./Film.css";
import { useState } from "react";
import PlayerInfo from "./PlayerInfo";
interface FilmProps {}

const Film: React.FC<FilmProps> = () => {
  const { id } = useParams();
  const filmID = Number(id);
  const { data, isLoading } = useGetFilmByIdQuery(filmID);
  const [isPlaying, setIsPlaying] = useState(false);

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
          </section>
        </>
      )}
    </div>
  );
};

export default Film;
