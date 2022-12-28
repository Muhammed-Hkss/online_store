import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { ProductsMore } from '../../config'
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
        <Navbar />
      </div>

      <div>
        <MoreItem item={base}/>
      </div>
    </>
  )
}

export default ProductMore
