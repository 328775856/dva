import React, {Component} from 'react'
import {connect} from 'dva'
import CountCompo from '../components/count'

// @connect(({count}) => ({
//   count
// }))
// class cn extends Component {
//   handleDelete = (id) => {
//     console.log(this.props.count)
//     const {dispatch} = this.props;
//     dispatch({
//       type: 'count/delete',
//       payload: id
//     })
//   }
//   add = (id) => {
//     const {dispatch} = this.props;
//     dispatch({
//       type: 'count/add',
//       payload: id
//     })
//   }
//
//   render() {
//     return (
//       <CountCompo onDelete={this.handleDelete} count={this.props.count} add={this.add}/>
//     )
//   }
// }
//
// export default connect(({count}) => ({
//   count
// }))(cn)


class Counter extends Component {
  // constructor(props){
  //   super(props)
  // }
  handleDelete = (id) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'count/delete',
      payload: id
    })
  }
//做dispatch分发的方法，相当于做一个请求
  add = (id) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'count/add',
      payload: id
    })
  }

  render (){
    return (
      <div>
        <div>
          <CountCompo onDelete={this.handleDelete} count={this.props.count} add={this.add}/>
        </div>
      </div>
    )
  }
}
// const mapStateToProps = (state) =>{
//   return state
// }
export default connect ((state)=>state)(Counter)
