import { FC } from "react";
import SliderComponent from "../Components/SliderComponent/Slider";

interface FilmsProps {}

const Films: FC<FilmsProps> = () => {
  return (
    <div>
      <h1>Films here!</h1>
      <SliderComponent />
    </div>
  );
};

export default Films;
