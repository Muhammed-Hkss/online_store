import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './MoreItem.module.scss'
import { Baskets, DelFavorites, GetBaskets, GetFavorites, PostBaskets, PostFavorites, ProductsMore } from '../../../config'
import ReactImageMagnify from 'react-image-magnify';
import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai'
import Loading from '../../../components/Loading';


const MoreItem = ({item}) => {
  // const [moreData , setMoreData] = useState(null)
  const [ saveBase, setSaveBase ] = useState(null)
  const [ count, setCount ] = useState(1)
  const [ have, setHave ] = useState(false)
  // const [ getBasket, setGetBasket ] = useState(false)
  const accessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()

  const [ refresh, setRefresh ] = React.useState('')






  useEffect(() => {
    GetFavorites(accessToken)
    .then(res => {
      setSaveBase(res.data)
      res.data?.find(val => val.product === item?.id ? setHave(val) : '')
    })
    setTimeout(() => {
      setRefresh('Helloo')
    }, 1000)
  }, [refresh]) 


  // useEffect(() => {
  //   GetBaskets(accessToken).then(r => {
  //     setGetBasket(r.data)
  //   })
  // } , [])















 
  const [ getBaskets , setGetBaskets ] = useState('') 

  const to__basket = () => {
    if(accessToken){
      PostBaskets(accessToken, {products: [JSON.stringify(item.id)], is_active: item.is_active})
      .then(() => {
        GetBaskets(accessToken)
        .then(r => {
          setGetBaskets(r.data)
        })  
      })
      setRefresh('post!')
    }else{
      alert('Вы не авторизованы')
      navigate('/user/register')
    }
  }

  // console.log(getBaskets);

















  
  const to__favorite = () => {
    if(accessToken){
      PostFavorites(accessToken, {product: item.id, is_active: item.is_active})
      setRefresh('post')
    }else{
      alert('Вы не авторизованы!')
      navigate('/user/register')
    }
  }   
  
  const delete__favorite = (id) => {
    if(accessToken){
      DelFavorites(accessToken, id)
      setRefresh('delete')
      setTimeout(() => {
        alert('удалено!')
        window.location.reload()
      }, 300)
    }else{
      alert('Вы не авторизованы!')
      navigate('/user/register')
    }
  } 



  // console.log(getBasket);


  if(!item) return <div style={{display:'flex' , justifyContent:'center'}}><Loading /></div>
  return (
    <div className={cls.container}>
      <div className={cls.image_data}>
        <div>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: item?.image,
                },

                largeImage: {
                  src: item?.image,
                  width: 1200,
                  height: 1800,
                },

                enlargedImageContainerDimensions: {
                  width: '150%',
                  height: '150%',
                },
              }}
            />
        </div>
      </div>

      <div className={cls.text_data}>
          <h1>{item?.title}</h1>
          <div className={cls.like}>
    
            <p>{item?.price}$</p>
    
            <button 
              onClick={() => have.product === item?.id ? delete__favorite(have.id) : to__favorite()}
            >
              {
                have.product === item?.id ? <AiFillHeart /> : <AiOutlineHeart />
              }
            </button>
          </div>
          
      </div>

      <div className={cls.more__summa}>
          <p>
            Total price:
          </p>
          <h3>
            <span>{item?.price * count}.00</span> сом
          </h3>
      </div>

      <div className={cls.more__count}>
          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 1 ? true : false}
          >
            -
          </button>
          <input 
            type="text"
            value={count}
            onChange={e => setCount(Number(e.target.value))}
          />
          <button
            onClick={() => setCount(count + 1)} 
          >
            +
          </button>
      </div>



      <div className={cls.to__basket_data}>

        {/* <button 
          className={cls.to__basket}
          onClick={() => to__basket()}
        >
          В корзину
        </button> */}

        {
            // console.log(item?.id),
            // console.log(basket),
            // item?.id === basket.products_data[0].id ? 
            getBaskets.length === 0 ?
            <button
              className={cls.to__basket}
              onClick={() => to__basket()}
            >
              В корзину
            </button>: 
            <button 
              className={cls.del__basket} 
              onClick={() => navigate('/basket')}
            >
              Перейти в корзину
            </button> 
        }
      </div>
    </div>
  )
}

export default MoreItem
