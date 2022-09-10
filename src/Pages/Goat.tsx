import { FC } from "react";
import TopRated from "../Components/TopRated/TopRated";

interface TopFiveProps {}

const TopFive: FC<TopFiveProps> = () => {
  return (
    <section>
      <div className="TopRated-header">
        <h1 style={{"textAlign": "center"}}>Greates of all the time </h1>
      </div>
      <TopRated />
    </section>
  );
};

export default TopFive;
