import React from "react";
import Card from "../UI/Card/Card";
import Order from "../Order/Order";
import CardHeader from "../UI/Card-Header/Card-Header";

const Table = (props) => {

    const onDelete = (orderNumber) => {
        props.onDelete(orderNumber);
    }

    return (
        <Card class='table'>
            <CardHeader class='table-heading' value={`Table ${props.number}`}/>
                {props.orders.map(order=>{
                    return <Order key={order.orderNumber} orderNumber={order.orderNumber} dish={order.dish} price={order.price} onDelete={onDelete}/>
                })}
        </Card>
    );
}

export default Table;