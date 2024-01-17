import React from "react";
import Card from "../UI/Card/Card";
import Order from "../Order/Order";

const Table = (props) => {

    const onDelete = (orderNumber) => {
        props.onDelete(props.number,orderNumber);
    }

    return (
        <Card>
            <h1>Table {props.number}</h1>
            <Card>
                {props.orders.map(order=>{
                    return <Order key={order.orderNumber} orderNumber={order.orderNumber} dish={order.dish} price={order.price} onDelete={onDelete}/>
                })}
            </Card>
        </Card>
    );
}

export default Table;