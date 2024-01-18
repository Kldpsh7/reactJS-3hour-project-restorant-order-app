import React from "react";
import Button from "../UI/Button/Button";
import './Order.css'

const Order = props => {
    const onDelete = () =>{
        props.onDelete(props.orderNumber);
    }
    return (
        <div className="order-div">
            <li>{`Order: ${props.orderNumber} - ${props.dish} - ${props.price}.00/-`}</li>
            <Button value='Delete' onClick={onDelete}></Button>
        </div>
    )
}

export default Order;