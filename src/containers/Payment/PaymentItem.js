import React from 'react';

function PaymentItem({income, index, removePayment}) {
   let date = new Date(income.date);
   let day = date.getDate();
   let month = date.getMonth() +1;
   let year = date.getFullYear(); 

   const removeHandler = i => {
    removePayment(i);

   }

  return (
    <div className='payment-item'>
       <button className='remove-item' onClick={() => removeHandler(index)}>X</button>
       <div className='desc'>{income.desc}</div>
       <div className='price'>${income.price}</div>
       <div className='date'>{day + "/" + month +  '/' + year}</div>
    </div>
  )
}

export default PaymentItem;