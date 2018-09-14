import React from 'react'
import PropTypes from 'prop-types'
import { Button} from 'antd'
import Style from './count.css'

const ProductList = ({onDelete, count, add}) => {
  return (
    <div>
      <div className={Style.add}>{count}</div>
      <Button onClick={add}>添加</Button>
      <Button onClick={onDelete}>删除</Button>
    </div>
  )
}
ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
}
export default ProductList
