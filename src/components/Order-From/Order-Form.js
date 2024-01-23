import React, {useState, useReducer, useEffect, useRef} from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import './Order-Form.css'

const orderNumberReducer = (state,action) => {
    if(action.type==='USER_INPUT'){
        return {value:action.value,isValid:action.value.trim()>0?true:false}
    }
    if(action.type==='INPUT_BLUR'){
        return {value:state.value,isValid:state.value.trim()>0?true:false}
    }
    if(action.type==='NEW_FORM'){
        return {value:'',isValid:null}
    }
    return {value:'',isValid:false}
};

const dishReducer = (state,action) => {
    if(action.type==='USER_INPUT'){
        return {value:action.value,isValid:action.value.trim().length>2?true:false}
    }
    if(action.type==='INPUT_BLUR'){
        return {value:state.value,isValid:state.value.trim().length>0?true:false}
    }
    if(action.type==='NEW_FORM'){
        return {value:'',isValid:null}
    }
    return {value:'',isValid:false}
};

const priceReducer = (state,action) => {
    if(action.type==='USER_INPUT'){
        return {value:action.value,isValid:+action.value.trim()>9?true:false}
    }
    if(action.type==='INPUT_BLUR'){
        return {value:state.value,isValid:+state.value.trim()>9?true:false}
    }
    if(action.type==='NEW_FORM'){
        return {value:'',isValid:null}
    }
    return {value:'',isValid:false}
};

const OrderFrom = (props) => {

    const [enteredTable,setEnteredTable] = useState('1');
    const [formIsValid,setFormIsValid] = useState(false);
    const [orderNUmberState,dispatchOrderNumber] = useReducer(orderNumberReducer,{value:'',isValid:null});
    const [dishState,dispatchDish] = useReducer(dishReducer,{value:'',isValid:null});
    const [priceState,dispatchPrice] = useReducer(priceReducer,{value:'',isValid:null});

    const {isValid:orderNumberIsValid} = orderNUmberState;
    const {isValid:dishIsValid} = dishState;
    const {isValid:priceIsValid} = priceState;

    const orderNumberInputRef = useRef();
    const dishInputRef = useRef();
    const priceInputRef = useRef();

    useEffect(()=>{
        const validator = setTimeout(() => {
            setFormIsValid(orderNumberIsValid && dishIsValid && priceIsValid)
        }, 500);

        return () => {
            clearTimeout(validator);
        }
    },[orderNumberIsValid,dishIsValid,priceIsValid]);

    const orderNumberChangeHandler = (newForm) => {
        dispatchOrderNumber({type:newForm.newForm?'NEW_FORM':'USER_INPUT',value:orderNumberInputRef.current.value});
    }

    const dishChangeHandler = (newForm) => {
        dispatchDish({type:newForm.newForm?'NEW_FORM':'USER_INPUT',value:dishInputRef.current.value});
    }

    const priceChangeHandler = (newForm) => {
        dispatchPrice({type:newForm.newForm?'NEW_FORM':'USER_INPUT',value:priceInputRef.current.value});
    }

    const tableChangeHandler = e=>{
        setEnteredTable(e.target.value)
    }

    const validateOrderNumberHandler = () => {
        dispatchOrderNumber({type:'INPUT_BLUR'})
    };

    const validateDishHandler = () => {
        dispatchDish({type:'INPUT_BLUR'})
    };

    const validatePriceHandler = () => {
        dispatchPrice({type:'INPUT_BLUR'})
    };

    const submitHandler = e => {
        e.preventDefault();
        props.onNewOrder(orderNUmberState.value,dishState.value,priceState.value,enteredTable);
        orderNumberInputRef.current.value='';
        orderNumberChangeHandler({newForm:true});
        dishInputRef.current.value='';
        dishChangeHandler({newForm:true});
        priceInputRef.current.value='';
        priceChangeHandler({newForm:true});
        setEnteredTable('1');
    }

    return (
        <Card>
            <form onSubmit={submitHandler} className="order-form">
                <label>Order Number</label>
                <input type='number' onChange={orderNumberChangeHandler} className={orderNUmberState.isValid===false ? 'invalid': ''} onBlur={validateOrderNumberHandler} ref={orderNumberInputRef}/>
                <label>Select Dish</label>
                <input type="text" onChange={dishChangeHandler} className={dishState.isValid===false ? 'invalid': ''} onBlur={validateDishHandler} ref={dishInputRef}/>
                <label>Price</label>
                <input type="number"onChange={priceChangeHandler} className={priceState.isValid===false ? 'invalid': ''} onBlur={validatePriceHandler} ref={priceInputRef}/>
                <label>Select Table</label>
                <select onChange={tableChangeHandler} value={enteredTable}>
                    <option value='1'>Table 1</option>
                    <option value='2'>Table 2</option>
                    <option value='3'>Table 3</option>
                </select>
                <Button type='submit' value='Order' disabled={!formIsValid}/>
            </form>
        </Card>
    );
};

export default OrderFrom;