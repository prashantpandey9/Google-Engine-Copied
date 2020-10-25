import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button, IconButton } from '@material-ui/core';
import "./Search.css";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import * as actionCreators from "../../Store/ActionCreator/index"
const Search = (props) => {
    const [input,setInput] = useState("");
    const search = (e)=>{
        e.preventDefault();
        if(input.trim()!==""){
            props.history.push("/search");
        props.setSerach(input);
        }
    }
    return (
            <div className="search">
            <div className="search__input">
                <IconButton onClick={(e)=>search(e)} ><SearchIcon/></IconButton>
                <input onKeyDown={(e)=>{if(e.key==="Enter"){search(e)}}} onChange={(e)=>{setInput(e.target.value)}} placeholder="Search Google" value={input} />
                <IconButton><MicIcon/></IconButton>
            </div>
            {props.showicons && <div className="search__buttons">
                <Button onClick={(e)=>search(e)} variant="outlined" >Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>}
        </div>
    )
};

const mapDispatchToProps = (dispatch)=>{
    return{
        setSerach: (term)=>{dispatch(actionCreators.setTerm(term))}
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Search));
