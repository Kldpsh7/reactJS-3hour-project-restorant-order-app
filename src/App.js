import React, {useState, useEffect} from "react";
import OrderFrom from "./components/Order-From/Order-Form";
import Table from "./components/Table/Table";
import './App.css'

function App() {

  const [currentOrders,setCurrentOrders] = useState([]);

  useEffect(()=>{
    const savedOrders = JSON.parse(localStorage.getItem('orders'));
    if(savedOrders && savedOrders.length>0){
      setCurrentOrders(savedOrders)
    }
  },[])

  const newOrderHandler = (orderNumber,dish,price,table) => {
    let savedOrders = JSON.parse(localStorage.getItem('orders'));
    if(savedOrders){
      savedOrders.push({orderNumber:orderNumber,dish:dish,price:price,forTable:table});
    }else{
      savedOrders=[{orderNumber:orderNumber,dish:dish,price:price,forTable:table}];
    }
    setCurrentOrders(savedOrders);
    localStorage.setItem('orders',JSON.stringify(savedOrders))
  };
  
  const deleteOrderHandler = (orderNumber) => {
    const  savedOrders = JSON.parse(localStorage.getItem('orders'));
    const updatedOrders = savedOrders.filter(order => order.orderNumber!==orderNumber)
    setCurrentOrders(updatedOrders);
    localStorage.setItem('orders',JSON.stringify(updatedOrders))
  };

  return (
    <React.Fragment>
      <OrderFrom onNewOrder={newOrderHandler} />
      <div className="tables-div">
        <Table number='1' orders={currentOrders.filter(order => order.forTable==='1')} onDelete={deleteOrderHandler}/>
        <Table number='2' orders={currentOrders.filter(order => order.forTable==='2')} onDelete={deleteOrderHandler}/>
        <Table number='3' orders={currentOrders.filter(order => order.forTable==='3')} onDelete={deleteOrderHandler}/>
      </div>
    </React.Fragment>
  );
}

export default App;