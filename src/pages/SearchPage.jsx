import React from "react";
import "../App.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../components/UseGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchPage__option from "../components/Options";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);

  return (
    <div className="SearchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons={false} />
          <SearchPage__option />
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__result--count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}s) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                      className="searchPage__result--img"
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage__result--title">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__result--snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
