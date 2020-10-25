import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import useGoogleSearch from "../../Google/useGoogleSearch";
import "./SearchResults.css";
import Logo from "../../Assets/Google.png";
import Search from "../../Components/Search/Search";
import SearchResultsOptions from "../../Components/SearchResultsOptions/SearchResultsOptions";
import Spinner from "../../Components/Spinner/Spinner";
const SearchResults = (props) => {
  const { data,loading } = useGoogleSearch(props.searchedTerm);
  return (
    
    <div className="searchResults">
        <div style={{display: "flex",overflowX: "hidden",justifyContent: "center",borderBottom: "1px solid lightgray"}}>
      <div className="searchResults__header">
        <Link to="/">
          <img src={Logo} className="searchResults__logo" alt="GOOGLE SEARCH" />
        </Link>
        <div className="searchResults__body">
          <Search showicons={false} />
        <SearchResultsOptions/>
        </div>
      </div>
      </div>
      {loading?<div style={{display: "grid",placeItems: "center"}}><Spinner/></div>:<React.Fragment>
      {props.searchedTerm && <div className="searchResults__results">
            <p className="searchResults__results__deatials">
                About {data?.searchInformation?.formattedTotalResults} results in ({data?.searchInformation?.formattedSearchTime}) seconds for {props.searchedTerm}
            </p>
            {data?.items.map((item,index)=>{
                return(<div key={index} className="searchResults__result">
                    <a style={{display: "flex",alignContent: "center"}}  href={item.link}>
                        {item.pagemap?.cse_image?.length>0 && 
                            item.pagemap?.cse_image[0]?.src &&
                            <img className="searchResults__resultImage" src={item.pagemap?.cse_image[0]?.src} alt="Images" />
                        }
                        
                        {item.displayLink}</a>
                    <a href={item.link} className="searchResults__resultTitle">
                        <h2>{item.title}</h2>
                    </a>
                    <p className="searchResults__resultSnippet">
                        {item.snippet}
                    </p>
                </div>)
            })}
          </div>}</React.Fragment>
          }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchedTerm: state.term.serachTerm,
  };
};

export default connect(mapStateToProps, null)(SearchResults);
