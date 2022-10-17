import { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import Spinner from "react-spinner-material";
import GoatCard from "../../Components/GoatCard/GoatCard";
import TitlePanel from "../../Components/TitlePanel/TitlePanel";
import { useGetTopRatedFilmsQuery } from "../../Services/FetchFIlms";
import "./Goat.scss";

interface GoatProps {}

const Goat: FC<GoatProps> = () => {
  const { data, isLoading, error } = useGetTopRatedFilmsQuery("");
  return (
    <section className="goat">
      <TitlePanel text="Greates of all the time " svg={<AiFillStar />} />
      <section className="goat__content-wrapper">
        {isLoading && (
          <section className="loading">
            <Spinner />
            <h1>Loading...</h1>
          </section>
        )}
        {error && <h1>Something went wrong</h1>}
        <ul className="goat__content">
          {data && data.results.map((el) => <GoatCard data={el} />)}
        </ul>
      </section>
    </section>
  );
};

export default Goat;
