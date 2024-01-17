import React, {useState} from "react";
import OrderFrom from "./components/Order-From/Order-Form";
import Table from "./components/Table/Table";

function App() {

  const [table1Orders,setTable1Orders] = useState([]);
  const [table2Orders,setTable2Orders] = useState([]);
  const [table3Orders,setTable3Orders] = useState([]);


  const newOrderHandler = (orderNumber,dish,price,table) => {
    if(table==='1'){
      setTable1Orders(prevOrders=>{
        const updatedOrderds = [...prevOrders];
        updatedOrderds.unshift({orderNumber:orderNumber,dish:dish,price:price});
        return updatedOrderds
      })
    }
    else if(table==='2'){
      setTable2Orders(prevOrders=>{
        const updatedOrderds = [...prevOrders];
        updatedOrderds.unshift({orderNumber:orderNumber,dish:dish,price:price});
        return updatedOrderds
      })   
    }
    else{
      setTable3Orders(prevOrders=>{
        const updatedOrderds = [...prevOrders];
        updatedOrderds.unshift({orderNumber:orderNumber,dish:dish,price:price});
        return updatedOrderds
      })    
    }

    localStorage.setItem(orderNumber,JSON.stringify({dish:dish,price:price,forTable:table}));

  };
  
  const deleteOrderHandler = (table,orderNumber) => {
    if(table==='1'){
      setTable1Orders(prevOrders=>{
        const updatedOrderds = prevOrders.filter(order => order.orderNumber!==orderNumber);
        return updatedOrderds
      })
    }
    else if(table==='2'){
      setTable2Orders(prevOrders=>{
        const updatedOrderds = prevOrders.filter(order => order.orderNumber!==orderNumber);
        return updatedOrderds
      })   
    }
    else{
      setTable3Orders(prevOrders=>{
        const updatedOrderds = prevOrders.filter(order => order.orderNumber!==orderNumber);
        return updatedOrderds
      })    
    }

    localStorage.removeItem(orderNumber);

  };

  return (
    <React.Fragment>
      <OrderFrom onNewOrder={newOrderHandler} />
      <Table number='1' orders={table1Orders} onDelete={deleteOrderHandler}/>
      <Table number='2' orders={table2Orders} onDelete={deleteOrderHandler}/>
      <Table number='3' orders={table3Orders} onDelete={deleteOrderHandler}/>
    </React.Fragment>
  );
}

export default App;