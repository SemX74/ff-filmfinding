import { useParams } from "react-router-dom";
import Spinner from "react-spinner-material";
import { useGetFilmByIdQuery } from "../../Services/FetchFIlms";
import "./FilmComponents.css";

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetFilmByIdQuery(Number(id));
  return (
    <>
      {isLoading && <Spinner />}
      {data && (
        <>
          <section className="Description-info">
            <p className="Description-info_header">
              {data.release_date} | {data.genres.map((genre) => genre.name)} |{" "}
              {data.production_countries.map((country, index) =>
                index !== data.production_countries.length - 1
                  ? `${country.name}, `
                  : `${country.name}.`
              )}{" "}
              | ${data.budget}
            </p>
            <p className="Description-info_runtime">{data.runtime} mins</p>
            <p className="Description-info_tagline">"{data.tagline}"</p>
            <p className="Description-info_overview">{data.overview}</p>
            <div className="links_wrapper">
              <button className="link">Facebook</button>
              <button className="link">Twitter</button>
            </div>
          </section>

          <section className="Description-footer">
            <div className="Description-footer_companies">
              <p className="Description-footer_title">Production companies</p>
              <div className="companies">
                {data.production_companies.map((company) => (
                  <>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt=""
                    />
                    <p>{company.name}</p>
                  </>
                ))}
              </div>
            </div>
            <div>
              <p className="Description-footer_title">Original language</p>
              <p>{data.original_language}</p>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Description;
