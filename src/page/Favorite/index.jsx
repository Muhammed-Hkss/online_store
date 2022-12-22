import React, { useEffect, useState } from 'react'
import { DelFavorites, GetFavorites } from '../../config'
import cls from './Favorite.module.scss'


const Favorite = () => {
  const [favorite , setfavorite] = useState('')


  // useEffect(() => {
  //   GetFavorites().then(r => {
  //     console.log(r);
  //   })
  // })
  
  useEffect(() => {
    GetFavorites(localStorage.getItem('accessToken')).then(r => {
      // console.log(r);
      setfavorite(r.data)
    })
  }, [])
  
  return (
      
      <div className={cls.container}>
        
        <div className={cls.white_bgr}>

          {
            favorite && favorite.map(item => {
              console.log(item);


              const delete_favorite = () => {
                if(localStorage.getItem('accessToken')){
                  DelFavorites(localStorage.getItem('accessToken'), item.id , item.product)
                }else{
                  alert('Вы не авторизованы!')
                  // navigate('/auth/register')
                }
              }

              return(
                <div key={item.id}>
                  {/* <button onClick={() => DelFavorites(item.id , item.product)}>delete</button>* */}




                  <div style={{border:'solid 1px black' , height:'200px' }}>

                    <button 
                      // onClick={() => { 
                      //   DelFavorites(item.id)
                      // }}
                      onClick={() => delete_favorite()}
                    >
                      delete
                    </button>

                    {/* <p>{item.product}</p> */}

                  </div>
                </div>

                
              )
            })
          }
        </div>
      </div>
  )
}

export default Favorite
