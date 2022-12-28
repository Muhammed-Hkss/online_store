import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Video from '../../video/store_video1.mp4'
import cls from './Main.module.scss'
import ProductCard from '../ProductCart'
import { Categories, Products } from '../../config'
import Pagination from '../ProductCart/pagination/Pagination'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import Anchor from '../Anchor/Anchor'
import MultiDropdown from './MultiDropdown'
import Footer from '../Footer'




const Main = () => {
  const [products , setProducts] = useState('')
	const [base, setBase] = useState(products)

  const [input , setInput] = useState('')


  const [categories , setCategories] = useState(null)
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 6
	const TOTAL_PAGE = Math.ceil(products?.length / PAGE_SIZE)

  const filteredProduct = base && base.filter(item =>item.title.toLowerCase().includes(input.toLowerCase()) ? item : null)
  
  useEffect(() => {
    Products().then(r => {
      setProducts(r.data)
      setBase(r.data)
    })
  }, [])

  useEffect(() => {
    Categories().then(r => {
      setCategories(r.data)
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
  



  const [filtredResuld , setFiltredResuld] = useState('')



  const filterResultt = (catItem) => {
    if(catItem === 'All') {
      setFiltredResuld(base)
    } else {
      const result =  products && products.filter((curData) => {
        return curData.category === Number(catItem)
      })
      setFiltredResuld(result)
    }
  }
















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





      <div className={cls.filter_select_data}>
        {
          categories?.map(item => {

            return(
              <>
                {
                  item.parent === null ? 
                  '' : 
                    <button 
                        className={cls.filter_select} 
                        onClick={() => filterResultt(`${item.id}`)} 
                      >
                        {item.title}
                    </button>
                }
              </>
            )
          })
        }
      </div>



      
      <div className={cls.wrapper_data}>

        
          {

            input && filtredResuld === '' ? 
            base && base.map(item =>{

              return(
                <ProductCard  key={item.id} products={products} item={item}  TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage} />
              )
            }) :

            filtredResuld === '' ?
            filteredProduct && filteredProduct.map(item => (
              <ProductCard  key={item.id} products={products} item={item}  TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage} />
            )) :

            filtredResuld && filtredResuld.map(item => (
              <ProductCard  key={item.id} products={products} item={item}  TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage} />
            ))

          }
        
      </div>


      <div>
        {
          input === '' ?
          <div className={cls.next_prev_btn_data}>
            <Pagination TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage} />
          </div> :
          ''
        }
      </div>



      <div>
        <Anchor />
      </div>


        
      <div>
        <Footer />
      </div>
    </>
    
  )
}

export default Main