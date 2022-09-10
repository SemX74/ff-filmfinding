import { FC } from "react";
import { useGetTopRatedFilmsQuery } from "../../Services/FetchFIlms";
import TopRatedLi from "./TopRatedLi";
import "./TopRated.css";
import Spinner from "react-spinner-material";
interface TopRatedProps {}

const TopRated: FC<TopRatedProps> = () => {
  const { data, isLoading, error } = useGetTopRatedFilmsQuery("");
  return (
    <section className="TopRated">
      <div className="TopRated-content_wrapper">
        {isLoading && (
          <section className="loading">
            <Spinner />
            <h1>Loading...</h1>
          </section>
        )}
        {error && <h1>Something went wrong</h1>}
        <ul className="TopRated_ul">
          {data && data.results.map((el) => <TopRatedLi data={el} />)}
        </ul>
      </div>
    </section>
  );
};

export default TopRated;
