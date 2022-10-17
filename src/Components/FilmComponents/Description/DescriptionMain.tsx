import { FilmDescription } from "../../../Services/Interfaces/Interfaces";

interface DescriptionMainProps {
  data: FilmDescription;
}

const DescriptionMain: React.FC<DescriptionMainProps> = ({ data }) => {
  return (
    <section className="description">
      <p className="description__header">
        {data.release_date} | {data.genres.map((genre) => genre.name)} |{" "}
        {data.production_countries.map((country, index) =>
          index !== data.production_countries.length - 1
            ? `${country.name}, `
            : `${country.name}.`
        )}{" "}
        | ${data.budget}
      </p>
      <span className="description-info__header">Tagline</span>
      <p className="description__tagline">"{data.tagline}"</p>
      <span className="description-info__header">Runtime </span>
      <p className="description__runtime">{data.runtime} mins</p>
      <span className="description-info__header">Overview </span>{" "}
      <p className="description__overview">{data.overview}</p>
      <div className="description__links">
        <button className="description-links__link">Facebook</button>
        <button className="description-links__link">Twitter</button>
      </div>
    </section>
  );
};

export default DescriptionMain;
