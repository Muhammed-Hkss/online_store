import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import { DelFavorites, GetFavorites } from '../../config'
import { GetProducts } from '../../hooks/GetProducts'
import Test from '../../Test'
import cls from './Favorite.module.scss'


const Favorite = () => {
  const [favorite , setfavorite] = useState('')
  const [ refresh, setRefresh ] = React.useState('')
  const accessToken = localStorage.getItem('accessToken')
  const { base } = GetProducts()
  const navigate = useNavigate()
  let savedBase = []



  
  useEffect(() => {
    GetFavorites(accessToken).then(r => {
      setfavorite(r.data)
      r.data?.map(item => {
        return base?.map(val => val.id === item.product ? savedBase.unshift(val) : '')
      })
      localStorage.setItem('savedBase' , JSON.stringify(savedBase));
    })

    setTimeout(() => {
      setRefresh('hello')
    }, 1000)
    
  }, [refresh])


  const baseFavorites = JSON.parse(localStorage.getItem('savedBase'))

  // console.log(baseFavorites);


  const delete_favorite = (id) => {
    const newId = favorite?.find(val => val.product === id ? val.id : '')
    if(accessToken){  
      DelFavorites(accessToken, newId.id)
      setRefresh('refreshing!')
    }else{
      alert('Вы не авторизованы!')
      navigate('/auth/register')
    }
  } 
  
  return (

    <>
      <div>
        <Test />
      </div>
      

      <div className={cls.container}>
        
        <div className={cls.white_bgr}>


          <div className={cls.favorite_data}>
            {
              baseFavorites?.length > 0 ?
              baseFavorites.map(item => {

                return(
                  <>
                    <div key={item.id} className={cls.glassBox}>
                      <div className={cls.glassBox__imgBox}>
                        <img src={item.image} alt="" />

                        <div className={cls.delete_btn_data}>
                          <button 
                            className={cls.delete_btn}
                            onClick={() => delete_favorite(item.id)}
                          >
                            delete
                          </button>
                        </div>

                        <p className={cls.glassBox__title}>
                          {/* {item.title} */}

                          {
                            item.title.length >= 20
                              ? `${item.title.slice(0, 16)}...`
                              : item.title
                          }
                        </p>
                        <h3 className={cls.glassBox__title}>{item.price} $</h3>
                      </div>
                    </div>
                  </>
                )
              }) : <Loading />
            }
          </div>
        </div>
      </div>
    </>
      
  )
}

export default Favorite
