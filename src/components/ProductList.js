import React from 'react'
import PropTypes from 'prop-types'
import {Table, Popconfirm, Button} from 'antd'

const ProductList = ({onDelete, products, add}) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Actions',
    render: (text, record) => {
       console.log(record)
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      )
    }
  } ,{
    title: 'add',
    render: (text, record) => {
      return (
        <Popconfirm title="add?" onConfirm={() => add(record.id)}>
          <Button>add</Button>
        </Popconfirm>
      )
    }
  }
  ]
  return (
    <div>
      <Table
        dataSource={products}
        columns={columns}
      />
      <Button onClick={() => add()}>点击</Button>
    </div>
  )
}
ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}
export default ProductList
