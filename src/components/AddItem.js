// use of class based components : write cc for default code
import React, { Component } from "react";

//whenever we use a class component we use this.prop or this.state, we do not use "useState here"
class AddItem extends React.Component {

  constructor(props){
    super(props);
    // we can define our state inside this constructor and we have to make that state as a object
    this.state={
        productName: "",
        productPrice:0,
        //we have to update these two state whenever we changing our text, thus on onchange we have to update these states
      //this is a way how we can manage our form states, else where there is no extra way to directly fetch an element's value , though
      //we can use for library or statelibrary to do the same
    };
  }


  render() {
    return (
      <>
      <form className="row mb-5" onSubmit={(e)=>{
        e.preventDefault();
        this.props.addItem(this.state.productName,Number(this.state.productPrice))
        }}>
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            ITEM NAME
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e)=>{
                this.setState({ productName: e.currentTarget.value}) ;
                //here this.setState is an inbuilt react function and we pass only those values which we have to update
            }}
              value={this.state.productName}
          />
        </div>

        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            PRICE
          </label>
          <input type="number" 
          className="form-control" 
          id="price" 
          name="productPrice"
          onChange={(e)=>{
            this.setState({ productPrice: e.currentTarget.value})

        } }  
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary col-3"
          // onClick={() =>  this.props.AddItem(); }}
          //WE CANNOT CALL IN TO SUBMIT BUTTON WE HAVE TO CALLTHIS ON ONSUBMIT OF A FORM 
        >
          {/* what we put inside the parentheses(or pass in the fn) is important because this think make a react form different as compared to the DOM manipulation form where we fetch value using id*/}
          AddItem
        </button>
      </form>
      </>
    );
   
  }
}

// when we add something we in the add item name functon we have to add that to the partcular component state
// means like every component has a state if we type some text we have to add that text in that particular component state
//like here we have addItem as a component , we have to make a hook for the input state, for class component we cannot make state hook we make state

export default AddItem;
