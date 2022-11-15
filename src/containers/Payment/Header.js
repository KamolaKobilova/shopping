import React from 'react'

function Header({totalIncome}) {
  return (
    <header>
        Payment
        <div className='totalIncome'>${totalIncome}</div>

        
    </header>
  )
}

export default Header