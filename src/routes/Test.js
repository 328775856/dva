// import React from 'react';
//
// const Products = (props)=>(
//   <h2>List of Products</h2>
// );
// export default Products;

// connect
import {Component } from 'react'
export default class Counter extends Component {
  render(){
    return (
      <button onClick={this.props.onIncrement}>
        {this.props.value}
        点击
      </button>
    )
  }
}
