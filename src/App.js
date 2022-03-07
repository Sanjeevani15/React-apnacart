import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';


import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js'
import Footer from './components/Footer.js'
import AddItem from './components/AddItem.js';





function App() {
// make product list here and 'product' is an array of object here AND QUANTITY will be taken 0 in initial
const products=[
  {
    price:100000,
    name:"Iphone 11 Pro",
    quantity:0,
  },

  {
    price:10000,
    name:"Redmi Note 7 Pro",
    quantity:0,
  },

  {
    price:1000,
    name:"Chocolate Pack",
    quantity:0,
  }
//now pass this data to the component and we can do this using props

]




let [productList, setProductList]=useState(products)
//we pass an array in the useState because product List is an array
//we ae using setProductList to increment the quantity


//for calculating total amount
let [totalAmount, setTotalAmount]=useState(0)

//we are ussing arrow function so that we do not have bind incrementQuantity using 'this' otherwise it will not work.
const incrementQuantity=(index)=>
{
  let newProductList = [...productList] 
  // because when we increase/deacrese quantity it will effect total amount as well
  let newTotalAmount= totalAmount;

  newProductList[index].quantity++;
  newTotalAmount += newProductList[index].price;
  setTotalAmount(newTotalAmount)
  setProductList(newProductList);
}


const decrementQuantity=(index)=>
{
  let newProductList = [...productList] 
// because when we increase/deacrese quantity it will effect total amount as well
  let newTotalAmount= totalAmount;

  if(newProductList[index].quantity > 0) {
    newProductList[index].quantity--
    newTotalAmount -= newProductList[index].price;

  } 
  setTotalAmount(newTotalAmount)
  setProductList(newProductList);
};

const resetQuantity =()=>{
  let newProductList = [...productList] 
  newProductList.map((products)=>{
    products.quantity=0;
    
  })
  setProductList(newProductList)
  setTotalAmount(0);
}


//remove button function
const removeItem=(index)=>{
  let newProductList = [...productList] 
  let newTotalAmount= totalAmount;
  newTotalAmount -= (newProductList[index].quantity * newProductList[index].price) 
  newProductList.splice(index,1)
  setProductList(newProductList)
  setTotalAmount(newTotalAmount)
}

//addItem using button
const addItem=(name,price)=>{
  let newProductList = [...productList] 
  newProductList.push({
    price: price,
    name: name,
    quantity: 0
  });
  setProductList(newProductList)
}

  return (
    <>  
   <Navbar/>

   <main className='container mt-5' >
    <AddItem addItem={addItem}/>
   <ProductList productList={productList} incrementQuantity= {incrementQuantity} decrementQuantity= {decrementQuantity} removeItem={removeItem}/>
   </main>
   
   <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
   
    
   </>
  );
}

export default App;
