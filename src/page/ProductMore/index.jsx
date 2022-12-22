import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Baskets, DelFavorites, GetFavorites, PostBaskets, PostFavorites, ProductsMore } from '../../config'
import cls from './ProductMore.module.scss'
import ReactImageMagnify from 'react-image-magnify';
import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai'
import Loading from '../../components/Loading';




const ProductMore = () => {
  const [moreData , setMoreData] = useState(null)
  const [ saveBase, setSaveBase ] = React.useState(null)
  const [ count, setCount ] = React.useState(1)
  const [ have, setHave ] = React.useState(false)
  const accessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()
  const {id} = useParams()
  

  useEffect(() => { 
    ProductsMore(id).then(r => {
      setMoreData(r.data)
    })
    GetFavorites(accessToken)
    .then(res => {
      setSaveBase(res.data)
      res.data?.find(val => val.product === moreData?.id ? setHave(val) : '')
    })
  } , [])

  // const to__basket = () => {
  //   if(accessToken){
  //     PostBaskets(accessToken, {products: [JSON.stringify(moreData?.id)], is_active: moreData?.is_active})
  //   }else{
  //     alert('Вы не авторизованы')
  //     navigate('/auth/register')
  //   }
  // }

  const to__favorite = () => {
    if(accessToken){
      PostFavorites(accessToken, {product: moreData?.id, is_active: moreData?.is_active})
    }else{
      alert('Вы не авторизованы!')
      navigate('/auth/register')
    }
  }   
  const delete__favorite = (id) => {
    if(accessToken){
      DelFavorites(accessToken, id)
    }else{
      alert('Вы не авторизованы!')
      navigate('/auth/register')
    }
  } 



  // console.log(moreData?.image);
  if(!moreData) return <div style={{display:'flex' , justifyContent:'center'}}><Loading /></div>

  return (
    <>
      <div className={cls.container}>
        <div 
          className={cls.image_data}
        >
          <div>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: moreData?.image,
                },

                largeImage: {
                  src: moreData?.image,
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
          <h1>{moreData?.title}</h1>
          <p>{moreData?.price}$</p>
          <h3>{moreData?.time_create}</h3>
          <h3>{moreData?.time_update}</h3>
        </div>
        <div className={cls.like}>
          <button 
            onClick={() => have.product === moreData?.id ? delete__favorite(have.id) : to__favorite()}
          >
            {
              have.product === moreData?.id ? <AiFillHeart /> : <AiOutlineHeart />
            }
          </button>
        </div>

        <div className="more__summa">
          <p>
            Сумма:
          </p>
          <h3>
            <span>{moreData?.price * count}.00</span> сом
          </h3>
        </div>

        <div className="more__count">
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
      </div>
    </>
  )
}

export default ProductMore
