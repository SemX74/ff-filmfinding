import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
