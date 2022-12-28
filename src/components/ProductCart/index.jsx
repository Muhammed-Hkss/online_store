import React from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './ProductCard.module.scss'

const ProductCard = ({ item }) => {
  
  const navigate = useNavigate()

  console.log(item);

  return (
    <>

      <div onClick={() => navigate(`/product/${item.id}`)} className={cls.glassBox}>
        <div className={cls.glassBox__imgBox}>
          <img src={item.image} alt="" />
          <p className={cls.glassBox__title}>
						{
              item.title.length >= 20
                ? `${item.title.slice(0, 16)}...`
                : item.title
            }
          </p>
          <h3 className={cls.glassBox__title}>{item.price} $</h3>
          <p className={cls.glassBox__title2} >more</p>
        </div>
      </div>
    </>
  )
}

export default ProductCard
