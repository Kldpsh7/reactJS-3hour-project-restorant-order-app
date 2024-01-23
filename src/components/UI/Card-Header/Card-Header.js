import React from "react";
import './Card-Header.css';

const CardHeader = (props) => {
    return <h1 className={props.class}>{props.value}</h1>
}

export default CardHeader;