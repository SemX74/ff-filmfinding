import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  const navigate = useNavigate();
  return (
    <h1 onClick={() => navigate("/")}>
      Find<span>Films</span>
    </h1>
  );
};

export default Logo;
