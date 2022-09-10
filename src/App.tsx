import { Routes, Route } from "react-router-dom";
import "./App.css";
import Films from "./Pages/Films";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout/Layout";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import Genres from "./Pages/Genres";
import Goat from "./Pages/Goat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="films" element={<Films />}></Route>
          <Route path="genres" element={<Genres />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="goat" element={<Goat />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
