import React, { useEffect, useState } from 'react'
import { DelBaskets, GetBaskets } from '../../config';
import cls from './Basket.module.scss'
import { AiOutlineMinus , AiOutlinePlus } from 'react-icons/ai'
import { BiX } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { BASE_URL } from '../../config/api';
import Test from '../../Test';

const Basket = () => {
  const [ getBaskets , setGetBaskets ] = useState('') 
  const accessToken = localStorage.getItem('accessToken')
  const [ refresh, setRefresh ] = React.useState('')
  
  const navigate = useNavigate()

  let totalCartPrice = 0



  
  // useEffect(() => {
  //   GetBaskets(localStorage.getItem('accessToken')).then(r => {

  //     const newData2 = Object.entries(r.data).map(([ id ,item]) => {
  //       return {
  //         id,
  //         ...item.products_data
  //       }
  //     })
  //     setGetBaskets(newData2)
  //   })
  // }, [])

  React.useEffect(() => {
    if(accessToken){
      GetBaskets(accessToken)
        .then(res => {
          setGetBaskets(res.data)
          // res.data?.map(item => {
          //   return base?.map(val => val.id === item.product ? getBaskets.unshift(val) : '')
          // })
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
      // setRefresh('refreshing!')w
    }else{
      alert('Вы не авторизованы!')
      navigate('/user/register')
    }
  } 

  
// console.log(getBaskets);
if(!getBaskets) return <div style={{display:'flex' , justifyContent:'center'}}><Loading /></div>


  return (
    <>
      <div>
        <Test />
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
            
            <button onClick={() => navigate('/')}>Перейти на главную</button> : 
            
            getBaskets?.map((item , index) => {
              // console.log(item);

              // return(
              //   <div key={item.id}>
              //     <p>{item[0].title}</p>
              //   </div>
              // )


              totalCartPrice += item.products_data[0].price * 1


              return(
                <div className={cls.card} key={index}>
                  <div onClick={() => navigate(`/product/${item.products_data[0].id}`)} className={cls.image_data}>
                    <img src={`${BASE_URL}${item.products_data[0].image}`} alt="" />
                  </div>
                  <div className={cls.pls_mns_btn}>
                    <AiOutlineMinus />
                    <p>1</p>
                    <AiOutlinePlus />
                  </div>
                  <p>{item.products_data[0].title}</p>
                  <p>{item.products_data[0].price}$</p>
                  <BiX 
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
            {/* <p>Shipping   5$</p> */}
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
