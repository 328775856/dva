import React from 'react'
import {connect} from 'dva'
import ListTag from '../components/list'

const List = ({dispatch, list}) => {
  function add(index){
    dispatch({
      type: 'list/add',
      payload:index
    })
  }
  function minus(index){
    dispatch({
      type: 'list/minus',
      payload: index
    })
  }
  return (
    <ListTag add={add} list={list} minus={minus}></ListTag>
  )
}
export default connect(({list}) => ({
  list
}))(List)
