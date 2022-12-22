// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { Categories, GetFavorites, PostBaskets, PostFavorites, Products } from '../../config'
// import useAlert from '../../hooks/useAlert'
// import Loading from '../Loading'
// import Pagination from './pagination/Pagination'
// import cls from './ProductCard.module.scss'
// import { FiHeart } from 'react-icons/fi'

// const ProductCard = ({products , item , TOTAL_PAGE , page , setPage }) => {
//   // const [products , setProducts] = useState('')
// 	// const [base, setBase] = React.useState(products)
  
//   const { actions } = useAlert()
//   const navigate = useNavigate()
//   const [ count, setCount ] = React.useState(1)
//   const accessToken = localStorage.getItem('accessToken')
//   const [favorites, setFavorites] = React.useState(null)
//   const [input , setInput] = React.useState('')
//   const [dropDown , setDropDown] = React.useState(null)




//   const handlePostBaskets = (id) => {
//     const Products = products && products.find( item => (item.id))

//     PostBaskets(Products, id)
//   }
  



//   const to__favorite = () => {
//     if(accessToken){
//       PostFavorites(accessToken, {products: [item] , product: item.id , is_active: item.is_active})
//     }else{
//       alert('Вы не авторизованы!')
//       navigate('/user/register')
//     }
//   }

  

//   const to__basket = () => {
//     if(accessToken){
//       PostBaskets(accessToken, {products: [JSON.stringify(item.id)] , count , is_active: item.is_active})
//     }else{
//       alert('Вы не авторизованы!')
//       navigate('/user/register')
//     }
//   }


//   if(!item) return <div style={{display:'flex' , justifyContent:'center'}}><Loading /></div>
//   return (
//     <>
//     <div style={{display:'flex' , justifyContent:'center'}}>
//       {/* <select  className={cls.filter_select} onChange={(e => filterResult(e.target.value))}>
//         <option>title</option>
//         <option>All</option>
//         {uniqueEmployees && uniqueEmployees.map(item => (

//         item.title === null ? '' : 
//         <option
//           key={item.id} 
//           className={cls.filter_button}
//           onClick={() => filterResult(`${item.title}`)} 
//         >
//           {item.title}
//         </option>
//         ))}
//       </select> */}
//     </div>
    
//       <div className={cls.container}>






//         <div className={cls.wrapper_data}>
//           <div key={item.id} className={cls.wrapper}>

//             <div className={cls.product_img}>
//               <img src={item.image} height="420" width="327"/>
//             </div>
//             <div className={cls.product_info}>
//               <div className={cls.product_text}>
//                 <h1>{item.title}</h1>
//                 <h2>{item.title}</h2>
//                 <div className={cls.link_more_data}>
//                   <Link className={cls.link_more} to={`/product/${item.id}`}>More</Link> 
//                   {/* <FiHeart  onClick={() =>  to__favorite()}/> */}
//                 </div>
                
//               </div>
//               <div className={cls.product_price_btn}>



//                 <div style={{display:'flex' , justifyContent:'center'}} className={cls.card_count}>
//                   <button
//                     onClick={() => setCount(count - 1)}
//                     disabled={count === 1 ? true : false}
//                   >
//                     -
//                   </button>
//                   <input 
//                     type="text"
//                     value={count}
//                     onChange={e => setCount(Number(e.target.value))}
//                   />
//                   <button
//                     onClick={() => setCount(count + 1)} 
//                   >
//                     +
//                   </button>
//                 </div>




//                 <p><span>{item.price}</span>$</p>
                
//                 {/* <button onClick={() =>  to__basket()}type="button">buy now</button> */}
//               </div>
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </>
//   )
// }

// export default ProductCard
