import React from 'react'

export default function Product(props) {
    

  return (
      
    <div className='row mt-4'>

        {/* //name of the profuct will be displayed */}
        <div className='col-5'>
            <h2>{props.product.name} <span className="badge bg-secondary">₹{props.product.price}</span> </h2>   
        </div>


        {/* //quantity buttons */}
        <div className='col-3'>

            {/* //we can use event listener directly by the name of event listener in react */}

        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger" onClick={()=>{props.decrementQuantity(props.index)}}>-</button>
            <button type="button" className="btn btn-warning">{props.product.quantity}</button>
            <button type="button" className="btn btn-success" onClick={()=>{props.incrementQuantity(props.index)}}>+</button>
          
            {/* //we can't directly call a function in onclick we can pass it but can't invoke it directly */}

        </div>

        </div>

        {/* //now based on quantity price will be displayed */}

        <div className="col-2">
            {props.product.quantity*props.product.price}  
        </div>

       <button className='col-2 btn btn-danger' onClick={()=>{props.removeItem(props.index)}}>
        REMOVE
       </button>

    </div>

  )
}
