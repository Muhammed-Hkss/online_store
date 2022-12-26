
import cls from './Test.module.scss'
import {IoLogoSass} from 'react-icons/io'
import {AiOutlineMenu} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import { useState } from 'react'
import { NavbarList } from '../utils/Navbar'
import { useNavigate } from 'react-router-dom'
// import './Test.scss'  



function Test() {
  const [isDropdown , setIsDropdown] = useState(false)
  const AccessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()





    return (
      <>
        <div className={cls.container}>
          <div className={isDropdown ? `${cls.sidebare} ${cls.active}` : cls.sidebare} >
            <div className={cls.logo_container}>
              <div className={cls.logo}>
                <i><IoLogoSass /></i>
                <div className={cls.logo_name}>Logo</div>
              </div>


              <i 
                onClick={() => setIsDropdown(prev => !prev)}
              >
                <AiOutlineMenu id={cls.btn} />
              </i>
              


            </div>
            <ul className={cls.nav_list}>
                <li>
                  <i className={cls.bx_search}><BsSearch /></i>
                  <input type="text" placeholder='Search' />
                  <span className={cls.tooltip}>Search</span>
                </li>
                {
                  NavbarList.map(item => <li key={item.id}>
                    <a href={item.path}>
                      <i>{item.logo}</i>
                      <span className={cls.links_name}>{item.title}</span>
                    </a>
                    <span className={cls.tooltip}>{item.span}</span>
                  </li>
                  )
                }
            </ul>
            <div className={cls.profile_content}>
                <div className={cls.profile}>
                  <div className={cls.profile_detals}>
                    <img src="https://www.hdcarwallpapers.com/walls/2012_lexus_lf_lc_blue_concept-wide.jpg" alt="" />
                    <div className={cls.name_job}>
                      <p className={cls.name}>Prem Shahi</p>
                      <p className={cls.job}>web Designer</p>
                    </div>
                  </div>
                  <a href="/auth/login" className={cls.log}>
                    <BiLogOut  id={cls.log_out}/>
                    {/* {
                      !AccessToken ? 
                      <button onClick={() => navigate('/auth/login')} className={cls.register_btn}>
                        войти
                      </button> :
                      <BiLogOut onClick={() => navigate('/auth/login')} className={cls.register_btn} />
                    } */}
                  </a>
                </div>
            </div>
          </div>
        </div>

        {/* <div className={cls.home_content}>
          <div className={cls.text}>Home Content</div>
        </div>         */}
      </>
    );
}

export default Test;
