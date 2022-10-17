import { useParams } from "react-router-dom";
import Spinner from "react-spinner-material";
import { useGetFilmByIdQuery } from "../../../Services/FetchFIlms";
import "./Description.scss";
import DescriptionFooter from "./Footer/DescriptionFooter";

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetFilmByIdQuery(Number(id));
  return (
    <>
      {isLoading && <Spinner />}
      {data && (
        <>
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
            <p className="description__runtime">{data.runtime} mins</p>
            <p className="description__tagline">"{data.tagline}"</p>
            <p className="description__overview">{data.overview}</p>
            <div className="description__links">
              <button className="description-links__link">Facebook</button>
              <button className="description-links__link">Twitter</button>
            </div>
          </section>

          <DescriptionFooter data={data} />
        </>
      )}
    </>
  );
};

export default Description;
