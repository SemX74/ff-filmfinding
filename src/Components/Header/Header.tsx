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
      return "header-nav__navlink active";
    } else {
      return "header-nav__navlink";
    }
  };

  return (
    <header className="header">
      <Logo />
      <nav className="header__nav">
        <NavLink className={({ isActive }) => activeClassName(isActive)} to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => activeClassName(isActive)}
          to="genres"
        >
          Genres
        </NavLink>
        <NavLink
          className={({ isActive }) => activeClassName(isActive)}
          to="/find"
        >
          Find
        </NavLink>
        <NavLink
          className={({ isActive }) => activeClassName(isActive)}
          to="/goat"
        >
          Greatest
        </NavLink>
      </nav>
      <aside
        className="header__profile-button"
        onClick={() => navigate("profile")}
      >
        <CgProfile />
        Cabinet
      </aside>
    </header>
  );
};

export default Header;
