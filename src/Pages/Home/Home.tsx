import { FC } from "react";
import Logo from "../../Components/Logo/Logo";
import { BsFilm } from "react-icons/bs";
import "./Home.css";
import { Sliderr } from "../../Components/Slider/Slider";
import { useGetPopularFilmsQuery } from "../../Services/FetchFIlms";
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { data } = useGetPopularFilmsQuery("");

  return (
    <div>
      <section className="Home-main">
        <h2 className="Home-title">
          Easily find and watch films everywhere <BsFilm />
        </h2>
      </section>
      <Sliderr data={data} />
    </div>
  );
};

export default Home;
