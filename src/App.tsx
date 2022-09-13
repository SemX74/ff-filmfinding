import { Routes, Route } from "react-router-dom";
import "./App.css";
import Films from "./Pages/Films";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import Genres from "./Pages/Genres";
import Goat from "./Pages/Goat";
import Film from "./Pages/Film/Film";
import Description from "./Components/FilmComponents/Description";
import Cast from "./Components/FilmComponents/Cast";
import Gallery from "./Components/FilmComponents/Gallery";
import Comments from "./Components/FilmComponents/Comments";

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
          <Route path="film/:id" element={<Film />}>
            <Route index element={<Description />}></Route>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="gallery" element={<Gallery />}></Route>
            <Route path="comments" element={<Comments />}></Route>
          </Route>
          <Route path="film" element={<NotFound />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
