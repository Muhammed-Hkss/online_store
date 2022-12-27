
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  PostBaskets, PostFavorites } from '../../config'
import useAlert from '../../hooks/useAlert'
import cls from './ProductCard.module.scss'

const ProductCard = ({products , item }) => {
  
  const { actions } = useAlert()
  const navigate = useNavigate()
  const [ count, setCount ] = React.useState(1)
  const accessToken = localStorage.getItem('accessToken')




  const handlePostBaskets = (id) => {
    const Products = products && products.find( item => (item.id))

    PostBaskets(Products, id)
  }
  



  const to__favorite = () => {
    if(accessToken){
      PostFavorites(accessToken, {products: [item] , product: item.id , is_active: item.is_active})
    }else{
      alert('Вы не авторизованы!')
      navigate('/user/register')
    }
  }

  

  const to__basket = () => {
    if(accessToken){
      PostBaskets(accessToken, {products: [JSON.stringify(item.id)] , count , is_active: item.is_active})
    }else{
      alert('Вы не авторизованы!')
      navigate('/user/register')
    }
  }


  // if(!item) return <div style={{display:'flex' , justifyContent:'center'}}><Loading /></div>
  return (
    <>

      <div onClick={() => navigate(`/product/${item.id}`)} className={cls.glassBox}>
        <div className={cls.glassBox__imgBox}>
          <img src={item.image} alt="" />
          <p className={cls.glassBox__title}>
            {/* {item.title} */}
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
