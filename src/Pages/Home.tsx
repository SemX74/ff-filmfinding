import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Hooks/useRedux";

interface HomeProps {}
const KEY = "53157666186b4a1196d3899b3ea17ee1";

const Home: FC<HomeProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>Home here!</h1>
    </div>
  );
};

export default Home;
