import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { BiChevronRight } from 'react-icons/bi'
import './MultiDropdown.scss'
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { Categories } from '../../../config';

const MultiDropdown = () => {
  return (
    <Navbar>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu({products}) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }



  const [categories , setCategories] = useState(null)

  useEffect(() => {
    Categories().then(r => {
      setCategories(r.data)
    })
  }, [])


// console.log(categories);











const [filtredResuld , setFiltredResuld] = useState('')


const filterResultt = (catItem) => {
  if(catItem === 'All') {
    setFiltredResuld(products)
  } else {
    const result =  products && products.filter((curData) => {
      // console.log(catItem);
      // console.log(curData.category === Number(catItem));
      return curData.category === Number(catItem)
    })
    setFiltredResuld(result)
  }
}

console.log(filtredResuld);

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>











      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">

          {
            categories?.map(item => {
              return(
                <>
                  {
                    item.parent === null ?  <DropdownItem key={item.id}>{item.title}</DropdownItem> : ''
                  }
                </>
              )
              
            })
          }
          <DropdownItem leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings"
            >
              My Profile
            </DropdownItem>

            
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>



          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>
      
      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>

          {
            categories?.map(item => {
              return(
                <>
                  {
                    item.parent === null ? '' : <DropdownItem key={item.id} onClick={() => filterResultt(`${item.id}`)} leftIcon={<BoltIcon />}>{item.title}</DropdownItem>
                  }
                </>
              )
            })
          }

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}


export default MultiDropdown
