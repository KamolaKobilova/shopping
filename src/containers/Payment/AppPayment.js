import React, { useState, useEffect } from "react";
import Header from "../Payment/Header";
import IncomeForm from "../IncomeForm";
import PaymentList from "./PaymentList";

function AppPayment() {

  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    for(let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price)
    }
  
    setTotalIncome(temp)
   },[income])

  return (
    <div className="main">
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome}/> 
      <PaymentList income={income} setIncome={setIncome}/>
      {/* {(income.length >0) ? income[0].desc : ""} */}
    </div>
  );
}

export default AppPayment;
