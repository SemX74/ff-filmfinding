import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";

import "./Header.scss";
import Logo from "../Logo/Logo";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const activeClassName = (isActive: boolean) => {
    if (isActive) {
      return "Nav-Link active";
    } else {
      return "Nav-Link";
    }
  };

  return (
    <header>
      <Logo />
      <nav>
        <NavLink className={({ isActive }) => activeClassName(isActive)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => activeClassName(isActive)} to="films">
          Films
        </NavLink>
        <NavLink className={({ isActive }) => activeClassName(isActive)} to="genres">
          Genres
        </NavLink>
        <NavLink className={({ isActive }) => activeClassName(isActive)} to="/find">
          Find
        </NavLink>
        <NavLink className={({ isActive }) => activeClassName(isActive)} to="/goat">
          Greatest
        </NavLink>
      </nav>
      <aside className="Header_profile" onClick={() => navigate("profile")}>
        <CgProfile />
        Cabinet
      </aside>
    </header>
  );
};

export default Header;
