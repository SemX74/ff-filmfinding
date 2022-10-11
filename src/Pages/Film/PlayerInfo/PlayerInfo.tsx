import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { FilmDescription } from "../../../Services/Interfaces/Interfaces";
import "./PlayerInfo.css";

interface PlayerInfoProps {
  data: FilmDescription;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ data, setIsPlaying }) => {
  return (
    <section className="player">
      <div className="player__image-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
          alt=""
          className="player__image"
        />
      </div>
      <div className="player__info-wrapper">
        <div className="player-info__header">
          <span className="player-info-header__text">{data.title}</span>
          <span className="player-info-header__text">
            FF: {data.vote_average}
          </span>
          <span className="player-info-header__text">
            {data.popularity} votes
          </span>
          {data.adult && (
            <span className="player-info-header__adult-badge player-info-header__text">
              18+
            </span>
          )}
        </div>
        <h2 className="player-info__title">{data.title}</h2>
        <div className="player-info__buttons">
          <button
            onClick={() => setIsPlaying(true)}
            className="player-info-buttons__play"
          >
            <FaPlay /> Play
          </button>
          <section className="player-info-buttons__like-wrapper">
            <button className="player-info-buttons__like-button">
              <AiOutlineLike />
            </button>
            <p className="player-info-buttons-like__text">Like</p>
          </section>
          <section className="player-info-buttons__like-wrapper">
            <button className="player-info-buttons__like-button">
              <AiOutlineDislike />
            </button>
            <p className="player-info-buttons-like__text">Dislike</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PlayerInfo;
