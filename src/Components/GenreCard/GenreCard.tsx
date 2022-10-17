import { Genre } from "../../Services/Interfaces/Interfaces";
import "./GenreCard.scss";
interface GenreCardProps {
  genre: Genre;
}
const GenreCard: React.FC<GenreCardProps> = ({ genre }) => {

  return (
    <section className="genre-card">
      <span className="genre-card__genre-name">{genre.name}</span>
    </section>
  );
};

export default GenreCard;
