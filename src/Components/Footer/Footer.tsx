import { FC } from "react";
import "./Footer.css"
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer>
      <p>Mykola Semeniuk 2022©️</p>
      <p>Powered by React</p>
      <p>Made for own purposes</p>
    </footer>
  );
};

export default Footer;
