import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavbarList } from '../../utils/Navbar'
import cls from './Navbar.module.scss'
import { BiMenu , BiCategory } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [open , setOpen] = useState(false)
  const navigate = useNavigate()
  let menuRef = useRef()

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false)
      }
    }

    document.addEventListener("mousedown" , handler)


    return() =>{
      document.removeEventListener("mousedown" , handler)
    }
  } , [])
  
  const AccessToken = localStorage.getItem('accessToken')
  





  const featrueAnimation = {
    hidden:{
      y: -20,
      opacity:0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.2},
    }),
  }



  return (
    <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2,  once: true ,}}
      className={cls.navbar_container}
    >

      <div className={cls.row}>

        <div className={cls.logo_data}>
          {/* <h2 onClick={() => navigate('/')} className={cls.logo_text}>Logo</h2> */}
          <img onClick={() => navigate('/')} className={cls.logo_img} src="https://www.pinclipart.com/picdir/big/52-520379_retail-store-icon-pictures-to-pin-on-pinterest.png" alt="logo" />
        </div>

        
        <ul className={cls.list_data}>
          {
            NavbarList.map((item , index) => (
              <motion.li 
                key={item.id}
                custom={index + 1}
                variants={featrueAnimation}
              >
                <Link to={item.path}>{item.title}</Link>
              </motion.li>
            ))
          }
        </ul>
        
        <div className={cls.category}>
          <BiCategory />
          
          

          {
            !AccessToken ? 
            <button onClick={() => navigate('/auth/login')} className={cls.register_btn}>
              войти
            </button> :
            <button onClick={() => navigate('/auth/login')} className={cls.register_btn}>
              выйти
            </button>
          }
        </div>

        
        <div className={cls.menu_container} ref={menuRef}>
          <div className={cls.menu_trigger} onClick={() => {setOpen(!open)}}>
            <BiMenu className={cls.menuButton}/>
          </div>
          <div className={`${cls.dropdown_menu} ${open? `${cls.active}` : `${cls.inactive}`}`}>
            <ul className={cls.dropdawn_list_data}>
              {
                NavbarList.map(item => (
                  <li key={item.id}>{item.title}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
    
  )
}



export default Navbar