import { current } from '@reduxjs/toolkit';
import React, {useRef} from 'react'

function IncomeForm({income, setIncome}) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);
   

  const AddIncome = e => {
    e.preventDefault(); 

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1],d[2])

    setIncome([...income, {
      "desc" : desc.current.value,
      "price": price.current.value,
      "date":   newD.getTime()
    }])

     desc.current.value = "";
     price.current.value = null;
     date.current. value = null;  
    // console.log(desc.current.value);
  }
  return ( 
    <form className='income-form' onSubmit={AddIncome}>
        <div className='form-inner'>
          <input type="text" style={{width: "300px", height:"50px"}} name="desc" id="desc"
           placeholder='Income-description...'
            ref={desc}  /><br></br><br/>
            <input type="text" style={{width: "300px", height:"50px"}} name="price" id="price" placeholder='price'
            ref={price}/><br/><br/>
            <input type="date" style={{width: "300px", height:"50px"}} name="date" id="date" placeholder='Income'
            ref={date}/><br/><br/>
            <input type="submit" value="Submit"/>
        </div>

    </form>
  )
}

export default IncomeForm