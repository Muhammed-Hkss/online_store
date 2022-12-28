import cls from './Navbar.module.scss'
import {IoLogoSass} from 'react-icons/io'
import {AiOutlineMenu , AiOutlineLogin} from 'react-icons/ai'
import {BiLogOutCircle} from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { NavbarList } from '../../utils/Navbar'
import { useNavigate } from 'react-router-dom'
import { GetUser } from '../../config'



function Navbar() {
  const [isDropdown , setIsDropdown] = useState(false)
  const AccessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()
  const [users , setUser] = useState(null)


  useEffect(() => {
    GetUser(localStorage.getItem('accessToken')).then(r => {
      setUser(r.data);
    })
  }, [])

  const logoutHandler =  (e) => {
		e.preventDefault()
		localStorage.clear()
		window.location.reload()
	}


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
                    {
                      users?.avatarka === null ? <img src='https://pbs.twimg.com/media/FbkmozNXgAMgVRX?format=jpg&name=large' alt="null" /> : <img src={users?.avatarka} alt="null" />
                    }
                    <div className={cls.name_job}>
                      <p className={cls.name}>{users?.username}</p>
                      <p className={cls.job}>{users?.phone_number}</p>
                    </div>
                  </div>
                  {
                    !AccessToken ?

                    <a href="/auth/login" className={cls.log}>
                      <AiOutlineLogin id={cls.log_out}/>
                    </a>:

                    <a href="/auth/login" className={cls.log}>
                      <BiLogOutCircle onClick={logoutHandler}  id={cls.log_out}/>
                    </a> 
                  }
                </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Navbar;
