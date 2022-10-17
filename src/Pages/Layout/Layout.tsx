import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Layout.scss";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className="Layout">
      <Header />
      <div className="Outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
