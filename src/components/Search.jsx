import React, { useState } from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useHistory } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("you hit search", input);
    history.push("/search");
  };
  return (
    <form className="Search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      <div className="search__buttons">
        <button type="submit" className="search__button" onClick={search}>
          Google Search
        </button>
        <button className="search__button">I'm Feeling Lucky</button>
      </div>
    </form>
  );
}

export default Search;
