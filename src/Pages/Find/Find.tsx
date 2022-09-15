import { useState } from "react";
import "./Find.css";
interface FindProps {}

const Find: React.FC<FindProps> = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  return (
    <div className="Find">
      <div className="searchWrapper">
        <input
          placeholder="Search..."
          onChange={handleChange}
          value={searchInput}
          type="search"
          className="search"
        />
        <button className="searchButton">Go</button>
      </div>
      <section className="content"></section>
    </div>
  );
};

export default Find;
