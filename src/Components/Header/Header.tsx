import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";

import "./Header.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  return (
    <header>
      <h1 onClick={() => navigate("/")}>
        Find<span>Films</span>
      </h1>
      <nav>
        <Link className="Nav-Link" to="/">
          Home
        </Link>
        <Link className="Nav-Link" to="films">
          Films
        </Link>
        <Link className="Nav-Link" to="series">
          Serials
        </Link>
        <Link className="Nav-Link" to="/">
          Recent
        </Link>
      </nav>
      <aside
        className="Header_profile"
        onClick={() => navigate("profile")}
      >
        <CgProfile />
        Cabinet
      </aside>
    </header>
  );
};

export default Header;
