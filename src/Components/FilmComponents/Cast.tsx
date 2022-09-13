import { useParams } from "react-router-dom";
import { useGetCastByIdQuery } from "../../Services/FetchFIlms";
interface CastProps {}

const Cast: React.FC<CastProps> = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCastByIdQuery(Number(id));
  return (
    <>
      <section className="Cast">
        {data &&
          data.cast.map(
            (person) =>
              person.profile_path && (
                <div className="Cast_wrapper">
                  <img
                    className="Cast_img"
                    src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                    alt=""
                  />
                  <div className="info_wrapper">
                    <div className="info_wrapper-info">
                      <p>{person.original_name}</p>
                      <p>{person.character}</p>
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
