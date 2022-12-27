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
import Test from '../../Test'
// import { useParams } from 'react-router-dom'




const Main = () => {
  const [products , setProducts] = useState('')
	const [base, setBase] = useState(products)

  const [input , setInput] = useState('')
  // const [dropDown , setDropDown] = useState(null)


  const [categories , setCategories] = useState(null)
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 6
	const TOTAL_PAGE = Math.ceil(products?.length / PAGE_SIZE)

  // const filteredProduct = products && products.filter(item => item.category === 1 && item.title.toLowerCase().includes(input.toLowerCase()) ? item : null)
  const filteredProduct = base && base.filter(item =>item.title.toLowerCase().includes(input.toLowerCase()) ? item : null)

  // console.log(products);
  // console.log(filteredProduct);
  
  useEffect(() => {
    // setPage(1)
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
  












  // const num = Number('2020');
  // console.log(num);






  const [filtredResuld , setFiltredResuld] = useState('')



  const filterResultt = (catItem) => {
    if(catItem === 'All') {
      setFiltredResuld(base)
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














  if(!base) return <div style={{display:'flex' , justifyContent:'center'}}><Loading /></div>

  return (
    <>
      <div>
        {/* <Navbar /> */}

        <Test />
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


        
      {/* <div style={{display:'flex'}}>
        {
          categories && categories.map(item => (
            <div key={item.id}>
              <button>
                {item.title}
              </button>
            </div>
          ))
        }
      </div> */}



      <div style={{display:'flex' , justifyContent:'center'}}>
        {
          categories?.map(item => {
            // console.log(item);
            // id: 9, title: 'Женская',

            return(
              <>
                <div key={item.id}>
                  {
                    item.parent === null ? 
                    '' : 
                    <div>
                      <button 
                        onClick={() => filterResultt(`${item.id}`)} 
                        
                        // onClick={() => removePoducts(`${item.id}`)}
                      >
                        {item.title}
                      </button>
                    </div>
                  }
                </div>
              </>
            )
          })
        }
        {/* <select className={cls.filter_select} onChange={(e => filterResultt(e.target.value))}>
          <option>Language</option>
          <option>All</option>
          {categories && categories.map(item => (

          item.parent === null ?  '' : 
          <option
            key={item.id} 
            // className={cls.filter_button}
            onClick={() => filterResultt(`${item.id}`)} 
          >
            {item.id}
          </option>
          ))}
        </select> */}
      </div>



      
      <div className={cls.wrapper_data}>

        
          {

            input && filtredResuld === '' ? 
            base && base.map(item =>{
              // console.log(item);

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
          {/* {
            filtredResuld && filtredResuld.map(item => (
              <ProductCard  key={item.id} products={products} item={item}  TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage} />
            ))
          } */}
        
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