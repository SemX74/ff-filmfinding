import { FC } from "react";
import { Link } from "react-router-dom";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  return (
    <div>
      <h1>NotFound here!</h1>
    </div>
  );
};

export default NotFound;
