import { FC } from "react";
import { BsFilm } from "react-icons/bs";
import { Sliderr } from "../../Components/Slider/Slider";
import { useGetPopularFilmsQuery } from "../../Services/FetchFIlms";
import "./Home.scss";
import TitlePanel from "../../Components/TitlePanel/TitlePanel";
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { data } = useGetPopularFilmsQuery("");

  return (
    <div className="home">
      <TitlePanel
        text={"Easily find and watch films everywhere"}
        svg={<BsFilm />}
      />
      <Sliderr data={data} />
    </div>
  );
};

export default Home;
