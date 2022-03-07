import React from 'react'

export default function Footer(props) {    //functional component
  return ( 
      <>
        <div className='row fixed-bottom'>
            <button className='btn btn-danger col-2' onClick={()=>{props.resetQuantity()}}>RESET</button>

      {/* //this div is for total price */}
        <div className='col-7 bg-dark text-light text-center'>
        {props.totalAmount}
        </div>
    
        <button className='btn btn-primary col-3'>PAY now</button>
        </div>
    </>
        
  )
}
