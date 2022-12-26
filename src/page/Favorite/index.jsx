import React, { useEffect, useState } from 'react'
import { DelFavorites, GetFavorites } from '../../config'
import Test from '../../Test'
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

    <>
      <div>
        <Test />
      </div>

      <div className={cls.container}>
        
        <div className={cls.white_bgr}>


          <div className={cls.favorite_data}>
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


                    <>
                      {/* <div key={item.id}>




                        <div style={{border:'solid 1px black' , height:'200px' }}>

                          <button 
                            // onClick={() => { 
                            //   DelFavorites(item.id)
                            // }}
                            onClick={() => delete_favorite()}
                          >
                            delete
                          </button>


                        </div>
                      </div> */}

                      <div key={item.id} className={cls.glassBox}>
                        <div className={cls.glassBox__imgBox}>
                          <img src={item.image} alt="" />

                          <button 
                            onClick={() => delete_favorite()}
                          >
                            delete
                          </button>

                          <p className={cls.glassBox__title}>{item.title}</p>
                          <h3 className={cls.glassBox__title}>{item.price} $</h3>
                        </div>
                      </div>
                    </>

                  
                )
              })
            }
          </div>
        </div>
      </div>
    </>
      
  )
}

export default Favorite
