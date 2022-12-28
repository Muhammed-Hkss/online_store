import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarList } from '../../utils/Navbar'
import './Footer.scss'
const Footer = () => {
  return (
    <>
      <div className='container'>
        <footer className="footer">
            <div className="waves">
              <div className="wave" id="wave1"></div>
              <div className="wave" id="wave2"></div>
              <div className="wave" id="wave3"></div>
              <div className="wave" id="wave4"></div>
            </div>
            <ul className="menu">
              {
                NavbarList.map(item => (
                  <li className="menu__item" key={item.id}>
                    <Link className="menu__link" to={item.path}>
                      {item.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </div>
    </>
  )
}

export default Footer