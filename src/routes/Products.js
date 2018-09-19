// import React from 'react';
//
// const Products = (props)=>(
//   <h2>List of Products</h2>
// );
// export default Products;

// cn
import React from 'react'
import {connect} from 'dva'
import ProductList from '../components/ProductList'

const Products = ({dispatch, products}) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id
    })
  }
  function add(id){
    dispatch({
      type: 'products/add',
      payload: id
    })
  }

  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} add={add}/>
    </div>
  )
}
export default connect(({products}) => ({
  products
}))(Products)

