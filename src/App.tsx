import { Routes, Route } from "react-router-dom";
import "./App.css";
import Films from "./Pages/Films";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import Series from "./Pages/Series";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="films" element={<Films />}></Route>
          <Route path="series" element={<Series />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
