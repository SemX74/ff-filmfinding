import { FC } from "react";
import Spinner from "react-spinner-material";
import GenreCard from "../../Components/GenreCard/GenreCard";
import TitlePanel from "../../Components/TitlePanel/TitlePanel";
import { useGetAllGenresQuery } from "../../Services/FetchFIlms";
import "./Genres.scss";

interface GenresProps {}

const Genres: FC<GenresProps> = () => {
  const { data, error, isLoading } = useGetAllGenresQuery("");

  return (
    <section className="genres">
      <TitlePanel text="Here's all genres you need." />
      {isLoading && (
        <Spinner radius={90} color={"#333"} stroke={8} visible={true} />
      )}
      <section className="genres__cards-wrapper">
        {data &&
          data.genres.map((category) => (
            <GenreCard genre={category} key={category.id} />
          ))}
      </section>
    </section>
  );
};

export default Genres;
