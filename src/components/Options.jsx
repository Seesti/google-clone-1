import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";


function SearchPage__option() {
  return (
    <div className="searchPage__options">
    <div className="searchPage__options--left">
      <div className="searchPage__option">
        <SearchIcon />
        <Link to="/all">All</Link>
      </div>
      <div className="searchPage__option">
        <DescriptionIcon />
        <Link to="/all">News</Link>
      </div>
      <div className="searchPage__option">
        <ImageIcon />
        <Link to="/all">Images</Link>
      </div>
      <div className="searchPage__option">
        <LocalOfferIcon />
        <Link to="/all">Shopping</Link>
      </div>
      <div className="searchPage__option">
        <RoomIcon />
        <Link to="/all">Maps</Link>
      </div>
      <div className="searchPage__option">
        <MoreVertIcon />
        <Link to="/all">More</Link>
      </div>
    </div>
    <div className="searchPage__options--right">
        <div className="searchPage__option">
            <Link to="/settings">Settings</Link>
        </div>
        <div className="searchPage__option">
            <Link to="/tools">Tools</Link>
        </div>
    </div>
  </div>
  );
}

export default SearchPage__option;