import { useState } from "react";
import "./Find.scss";
interface FindProps {}

const Find: React.FC<FindProps> = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  return (
    <div className="find">
      <div className="find__search-wrapper">
        <input
          placeholder="Search..."
          onChange={handleChange}
          value={searchInput}
          type="search"
          className="find-search-wrapper__search"
        />
        <button className="find__search-button">Go</button>
      </div>
      <section className="find__content"></section>
    </div>
  );
};

export default Find;
