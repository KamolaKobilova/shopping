 import React from 'react';
 import PaymentItem from './PaymentItem';
 
 function PaymentList({income, setIncome}) {
    const removePayment = i => {
        let temp =  income.filter((v, index) => index != i)
        setIncome(temp)
    }

     const sortByDate = (a,b) => {
        return a.date = b.date;
     }
   return (
     <div className='payment-list'>
        {
            income.sort(sortByDate).map((value, index ) => (
                <PaymentItem  
                 key={index}
                 income={value} 
                 index={index}
                 removePayment={removePayment}/>
            ))
        }
     </div>
   )
 }
 
 export default PaymentList; 