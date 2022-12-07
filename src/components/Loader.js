import React from 'react';
//gift
import Spnnier from "../gif/Infinity-1s-200px.gif"
const Loader = () => {
    return (
        <div>
            <img style={{width:"200px",height:"200px"}} src={Spnnier} alt="loader" />
            <h1> Loading ... </h1>
        </div>
    );
};

export default Loader;