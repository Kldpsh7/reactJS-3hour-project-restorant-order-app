import React, {useState} from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const OrderFrom = (props) => {

    const [enteredOrderNumber,setEnteredOrderNumber] = useState('');
    const [enteredDish,setEnteredDish] = useState('');
    const [enteredPrice,setEnteredPrice] = useState('');
    const [enteredTable,setEnteredTable] = useState('1');

    const orderNumberChangeHandler = e=>{
        setEnteredOrderNumber(e.target.value);
    }

    const dishChangeHandler = e=>{
        setEnteredDish(e.target.value);
    }

    const priceChangeHandler = e=>{
        setEnteredPrice(e.target.value);
    }

    const tableChangeHandler = e=>{
        setEnteredTable(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault();
        props.onNewOrder(enteredOrderNumber,enteredDish,enteredPrice,enteredTable);
        setEnteredDish('');
        setEnteredOrderNumber(+enteredOrderNumber+1);
        setEnteredPrice('');
        setEnteredTable('1');
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <label>Order Number</label>
                <input type='number' onChange={orderNumberChangeHandler} value={enteredOrderNumber}/>
                <label>Select Dish</label>
                <input type="text" onChange={dishChangeHandler} value={enteredDish}/>
                <label>Price</label>
                <input type="number"onChange={priceChangeHandler} value={enteredPrice}/>
                <label>Select Table</label>
                <select onChange={tableChangeHandler} value={enteredTable}>
                    <option value='1'>Table 1</option>
                    <option value='2'>Table 2</option>
                    <option value='3'>Table 3</option>
                </select>
                <Button type='submit' value='Order'/>
            </form>
        </Card>
    );
};

export default OrderFrom;