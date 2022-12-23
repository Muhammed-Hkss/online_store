import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Video from '../../video/store_video1.mp4'
import cls from './Main.module.scss'
import ProductCard from '../ProductCart'
import { Products } from '../../config'
import Pagination from '../ProductCart/pagination/Pagination'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import Anchor from '../Anchor/Anchor'
// import { useParams } from 'react-router-dom'




const Main = () => {
  const [products , setProducts] = useState('')
	const [base, setBase] = React.useState(products)
  const [input , setInput] = React.useState('')
  const [dropDown , setDropDown] = React.useState(null)

  console.log(base);


  const [page, setPage] = React.useState(1)
  const PAGE_SIZE = 6
	const TOTAL_PAGE = Math.ceil(products?.length / PAGE_SIZE)


  
  useEffect(() => {
    const data = base && base.filter(item => console.log(item))
    setPage(1)
    setDropDown(data)


    Products().then(r => {
      setProducts(r.data)


      setBase(r.data)
    })
    
  }, [])



  useEffect(() => {
		update()
	}, [page , products])


  function update() {
    const base = products && products.slice(
      (page - 1) * PAGE_SIZE,
      (page - 1) * PAGE_SIZE + PAGE_SIZE
    )
    setBase(base)
  }
  

  // console.log(base);
  if(!base) return <div style={{display:'flex' , justifyContent:'center'}}><Loading /></div>

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className={cls.main_container}>

        <div className={cls.video_data}>
          <video className={cls.video} src={Video} autoPlay muted loop />
        </div>
        <h1 className={cls.video_about}>Best Online Shopping Websites</h1>
      </div>




      <div className={cls.search_data}>
        <input 
          className={cls.search_input}
          type="text" 
          placeholder='Search...'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </div>

      {/* <ProductCard products={products} base={base} TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage}/> */}
      {/* {
          base && base.map(item => (
            <ProductCard key={item.id} products={products} item={item}  TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage} />
          ))
        } */}
      
      <div className={cls.wrapper_data}>

        
          {
            input === '' ? 
            base && base.map(item =>(
              <ProductCard  key={item.id} products={products} item={item}  TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage} />
            )) :
            dropDown && dropDown.map(item => (
              <div key={item.id} className={cls.wrapper}>
                <div className={cls.product_img}>
                  <img src={item.image} height="420" width="327"/>
                </div>
                <div className={cls.product_info}>
                  <div className={cls.product_text}>
                    <h1>{item.title}</h1>
                    <h2>{item.title}</h2>

                    <div className={cls.link_more_data}>
                      <Link className={cls.link_more} to={`/product/${item.id}`}>More</Link> 
                    </div>
                  </div>
                  <div className={cls.product_price_btn}>
                    <p><span>{item.price}</span>$</p>
                    <button 
                      // onClick={() =>  handlePostBaskets(item.id)}
                      type="button"
                    >buy now</button>
                  </div>
                </div>
              </div>
            ))

          }
        
      </div>


      {/* <div>
        {
          input === '' ?
          <div className={cls.next_prev_btn_data}>
            <Pagination TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage} />
          </div> :
          ''
        }
      </div> */}





      {/* const to__favorite = () => {
        if(accessToken){
          PostFavorites(accessToken, {products: [item] , product: item.id , is_active: item.is_active})
        }else{
          alert('Вы не авторизованы!')
          navigate('/user/register')
        }
      }

      

      const to__basket = () => {
        if(accessToken){
          PostBaskets(accessToken, {products: [JSON.stringify(item.id)] , count , is_active: item.is_active})
        }else{
          alert('Вы не авторизованы!')
          navigate('/user/register')
        }
      } */}





      <div>
        <Anchor />
      </div>


        
      
    </>
    
  )
}

export default Main