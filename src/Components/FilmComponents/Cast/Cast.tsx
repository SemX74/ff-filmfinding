import { useParams } from "react-router-dom";
import { useGetCastByIdQuery } from "../../../Services/FetchFIlms";
import "./Cast.css";
interface CastProps {}

const Cast: React.FC<CastProps> = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCastByIdQuery(Number(id));
  return (
    <>
      <section className="cast">
        {data &&
          data.cast.map(
            (person) =>
              person.profile_path && (
                <div className="cast__wrapper">
                  <img
                    className="cast__person-image"
                    src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                    alt=""
                  />
                  <div className="cast-person-bio__wrapper">
                    <div className="cast-person__bio">
                      <p className="cast-person-bio__text">{person.original_name}</p>
                      <p className="cast-person-bio__text">{person.character}</p>
                    </div>
                  </div>
                </div>
              )
          )}
      </section>
    </>
  );
};

export default Cast;
