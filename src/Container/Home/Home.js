import React from 'react'
import "./Home.css"
import {Avatar, IconButton} from '@material-ui/core';
import AppIcon from "@material-ui/icons/Apps";
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Google.png";
import Search from "../../Components/Search/Search";
const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__header__left">
                    <Link to="/about">About</Link>
                    <Link to="/store" >Store</Link>
                </div>
                <div className='home__header__right'>
                    <Link to="/mails">Gmail</Link>
                    <Link to="/Images">Images</Link>
                    <Link to="/"><IconButton><AppIcon/></IconButton></Link>
                    <Avatar src="" alt="avatar" />
                </div>
            </div>
            <div className="home__body">
                <img src={Logo} alt="GOOGLE" />
                <Search showicons={true}/>
            </div>
        </div>
    )
}

export default Home
