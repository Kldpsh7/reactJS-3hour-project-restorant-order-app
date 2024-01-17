import React from "react";
import Button from "../UI/Button/Button";

const Order = props => {
    const onDelete = () =>{
        props.onDelete(props.orderNumber);
    }
    return <div>
        {`${props.orderNumber} ${props.dish} ${props.price}`}    
        <Button value='Delete' onClick={onDelete}></Button>
    </div>
}

export default Order;