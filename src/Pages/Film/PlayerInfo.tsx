import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { FilmDescription } from "../../Services/Interfaces/Interfaces";

interface PlayerInfoProps {
  data: FilmDescription;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ data, setIsPlaying }) => {
  return (
    <section className="Player-content_wrapper">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
          alt=""
          className="Player-info_image"
        />
      </div>
      <div className="Player-Info">
        <div className="Player-Info_header">
          <span>{data.title}</span>
          <span>FF: {data.vote_average}</span>
          <span>{data.popularity} votes</span>
          {data.adult && <span className="adult">18+</span>}
        </div>
        <h2 className="Player-info_title">{data.title}</h2>
        <div className="Player-info_buttons">
          <button onClick={() => setIsPlaying(true)} className="Player_button">
            <FaPlay /> Play
          </button>
          <section className="likeButton">
            <button>
              <AiOutlineLike />
            </button>
            <p>Like</p>
          </section>
          <section className="likeButton">
            <button>
              <AiOutlineDislike />
            </button>
            <p>Dislike</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PlayerInfo;
