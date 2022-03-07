import React from 'react';
import Product from './Product';

// export default function ProductList({product}) {      : one way to passing object to components

export default function ProductList(props) {

  return (
        //conditional rendering 

        props.productList.length>0 ? 
        props.productList.map((product,i)=>
        {   
            //inside this map single single product will come which is passed to the PRODUCT component
            return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i} removeItem={props.removeItem}/>  
            //here we use key otherwise it will give error bacuse we are using map and here index is the key 
        })
        // : alert("ERROR: You should have at least one item in you cart")
        :<h1>Please add some items in your cart</h1>
    
  )
}

