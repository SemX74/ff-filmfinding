import { FC } from "react";
import Spinner from "react-spinner-material";
import { useGetAllGenresQuery } from "../Services/FetchFIlms";

interface GenresProps {}

const Genres: FC<GenresProps> = () => {
  const { data, error, isLoading,} = useGetAllGenresQuery("");

  return (
    <section>
      <h1>Genres is here</h1>
      {isLoading && (
        <Spinner radius={90} color={"#333"} stroke={8} visible={true} />
      )}
      <ul>
        {data && data.genres.map((category) => <li>{category.name}</li>)}
      </ul>
    </section>
  );
};

export default Genres;
