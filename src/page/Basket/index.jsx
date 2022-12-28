import React, { useEffect, useState } from 'react'
import { DelBaskets, GetBaskets } from '../../config';
import cls from './Basket.module.scss'
import { AiOutlineMinus , AiOutlinePlus } from 'react-icons/ai'
import { BiX } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { BASE_URL } from '../../config/api';
import useAlert from '../../hooks/useAlert';
import Navbar from '../../components/Navbar';

const Basket = () => {
  const { actions } = useAlert()
  const [ getBaskets , setGetBaskets ] = useState('') 
  const accessToken = localStorage.getItem('accessToken')
  const [ refresh, setRefresh ] = React.useState('')
  
  const navigate = useNavigate()

  let totalCartPrice = 0




  React.useEffect(() => {
    if(accessToken){
      GetBaskets(accessToken)
        .then(res => {
          setGetBaskets(res.data)
        })  
    }else{
      alert('Вы не авторизованы!')
      navigate('/auth/register')
    }
    setTimeout(() => {
      setRefresh('hey you f')
    }, 1000)
  }, [refresh])

  
  const delete_basket = (id) => {
    if(accessToken){  
      DelBaskets(accessToken, id)
      .then(() => {
        GetBaskets(accessToken)
        .then(r => {
          setGetBaskets(r.data)
        })  
      }) && actions.sweetAlert('успешно удалено')
    }else{
      alert('Вы не авторизованы!')
      navigate('/user/register')
    }
  } 

  
if(!getBaskets) return <div style={{display:'flex' , justifyContent:'center'}}><Loading /></div>


  return (
    <>
      <div>
        <Navbar  />

      </div>

      <div className={cls.container}>
        <div className={cls.card_data}>
          <div className={cls.card}>
            <p>Products</p>
            <p>Description</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Delete</p>
          </div>


          {
            getBaskets.length === 0 ?
            
            <button className={cls.no_basket_btn} onClick={() => navigate('/')}>Перейти на главную</button> : 
            
            getBaskets?.map((item , index) => {


              totalCartPrice += item.products_data[0].price * 1


              return(
                <div className={cls.card} key={index}>
                  <div onClick={() => navigate(`/product/${item.products_data[0].id}`)} className={cls.image_data}>
                    <img src={`${BASE_URL}${item.products_data[0].image}`} alt="" />
                  </div>
                  <div className={cls.pls_mns_btn}>
                    <AiOutlineMinus style={{cursor:'pointer'}} />
                    <p>1</p>
                    <AiOutlinePlus style={{cursor:'pointer'}}/>
                  </div>
                  <p>{item.products_data[0].title}</p>
                  <p>{item.products_data[0].price}$</p>
                  <BiX 
                    style={{cursor:'pointer'}}
                    onClick={() => delete_basket(JSON.stringify(item.id))}
                  />
                </div>
              )
            })
          }
        </div>
        <div className={cls.checkout_data}>
          <div className={cls.checkout}>
            <p>order summary</p>
          </div>
          <div className={cls.checkout}>
            <p>{getBaskets.length}  Products</p>
          </div>
          <div className={cls.checkout_total}>
            <p>Total:</p>
            <p>{totalCartPrice}$</p>
          </div>
          <div style={{display:'flex' , justifyContent:'center'}}>
            <button>Checkout</button>
            
          </div>
        </div>
      </div>

      
    </>
   
  )
}

export default Basket
