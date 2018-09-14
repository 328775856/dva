import React from 'react'

const list = ({list, add, minus}) => {

  return (
    <div>
      <div>{
        list.map((item, index) => {
          return (
            <div key={index}>
              <span>name:{item.name}</span>
              <span>id:{item.id}</span>
              <span onClick={()=>minus(index)} style={{color: 'red'}}>x</span>
            </div>)
        })}</div>
      <button onClick={() => {
        add()
      }}>添加
      </button>
    </div>
  )
}
export default list
