import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsMore } from '../../config'
import Test from '../../Test';
// import cls from './ProductMore.module.scss'
import MoreItem from './MoreItem';




const ProductMore = () => {
  const { id } = useParams()
  const [ base, setBase ] = React.useState(null)

  React.useEffect(() => {
    ProductsMore(id)
      .then(res => setBase(res.data))
  }, [id])





  return (
    <>
      <div>
        <Test />
      </div>

      <div>
        <MoreItem item={base}/>
      </div>
    </>
  )
}

export default ProductMore
