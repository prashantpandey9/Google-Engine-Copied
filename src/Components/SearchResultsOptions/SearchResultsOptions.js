import React from 'react'
import "./SearchResultsOptions.css"
import {Link} from "react-router-dom";
import  {} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const SearchResultsOptions = () => {
    return (
        <div className="searchResultsOptions">
            <div className="searchResultsOptions__Left">
                <div className="searchResultsOptions__Left__option">
                    <SearchIcon/>
                    <Link to="/all">ALL
                </Link>
                </div>
                <div className="searchResultsOptions__Left__option">
                    <DescriptionIcon/>
                    <Link to="/news">News
                </Link>
                </div>
                <div className="searchResultsOptions__Left__option">
                    <ImageIcon/>
                    <Link to="/images">Images
                </Link>
                </div>
                <div className="searchResultsOptions__Left__option">
                    <LocalOfferIcon/>
                    <Link to="/shopping">Shopping
                </Link>
                </div>
                <div className="searchResultsOptions__Left__option">
                    <RoomIcon/>
                    <Link to="/maps">Maps
                </Link>
                </div>
                <div className="searchResultsOptions__Left__option">
                    <MoreVertIcon/>
                    <Link to="/more">more
                </Link>
                </div>
            </div>
            <div className="searchResultsOptions__right">
            <div className="searchResultsOptions__right__option">
                    
                    <Link to="/settings">Settings
                </Link>
                </div>
                <div className="searchResultsOptions__right__option">
                    
                    <Link to="/tools">Tools
                </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchResultsOptions
