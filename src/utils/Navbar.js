import {AiOutlineHome , AiOutlineExclamationCircle , AiOutlineShoppingCart} from 'react-icons/ai'
import {MdFavoriteBorder , MdOutlineAccountCircle} from 'react-icons/md'

export const NavbarList = [
  
  {
    id: 1,
    logo:<AiOutlineHome />,
    title:'Home',
    span:'Home',
    path:'/'
  },
  {
    id: 2,
    logo:<MdFavoriteBorder />,
    title:'Favorite',
    span:'Favorite',
    path:'/favorite'
  },
  {
    id: 3,
    logo:<AiOutlineExclamationCircle />,
    title:'About',
    span:'About',
    path:'/about'
  },
  {
    id: 4,
    logo:<MdOutlineAccountCircle />,
    title:'Account',
    span:'Account',
    path:'/account'
  },
  {
    id: 5,
    logo:<AiOutlineShoppingCart />,
    title:'Basket',
    span:'Basket',
    path:'/basket'
  },
]