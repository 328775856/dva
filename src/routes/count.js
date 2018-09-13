// import React from 'react';
//
// const Products = (props)=>(
//   <h2>List of Products</h2>
// );
// export default Products;

// connect
import React from 'react'
import {connect} from 'dva'
import CountCompo from '../components/count'

const Count = ({dispatch, count}) => {
  function handleDelete(id) {
    dispatch({
      type: 'count/delete',
      payload: id
    })
  }
  function add(id){
    dispatch({
      type: 'count/add',
      payload: id
    })
  }

  return (
    <div>
      <h2>List of count</h2>
      <CountCompo onDelete={handleDelete} count={count} add={add}/>
    </div>
  )
}
export default connect(({count}) => ({
  count
}))(Count)

