import React from "react";
import '../App.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../components/UseGoogleSearch'
import { Link } from 'react-router-dom'
import Search from "../components/Search";


function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data)
    
  return (
    <div className="SearchPage">
        <div className="searchPage__header">
          <Link to="/">
            <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
          </Link>
            <h1>{term}</h1>
            <div className="searchPage__headerBody">
              <Search hideButtons />
            </div>
        </div>
        <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;