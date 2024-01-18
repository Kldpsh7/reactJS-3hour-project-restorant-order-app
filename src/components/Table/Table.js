import React from "react";
import Card from "../UI/Card/Card";
import Order from "../Order/Order";

const Table = (props) => {

    const onDelete = (orderNumber) => {
        props.onDelete(orderNumber);
    }

    return (
        <Card class='table'>
            <h1 className="table-heading">Table {props.number}</h1>
                {props.orders.map(order=>{
                    return <Order key={order.orderNumber} orderNumber={order.orderNumber} dish={order.dish} price={order.price} onDelete={onDelete}/>
                })}
        </Card>
    );
}

export default Table;