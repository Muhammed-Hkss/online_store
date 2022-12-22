import { instance } from "./api"

export const Token = data => instance.post(`/token/` , data)

export const signUp = data => instance.post(`/users/user/` , data)



export const ChangeUser = (id) => instance.patch(`/users/current-user/${id}/`)

export const GetUser = (token) => instance.get('/users/get_user/', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})



// const a = localStorage.getItem('authToken')

// console.log(a);





export const Products = () => instance.get(`/products/product/` )

export const ProductsMore = ( id ) => instance.get(`/products/product/${id}/`)






// export const PostBaskets = (data) => instance.post(`/baskets/` , data)


export const PostBaskets = (token , data) => instance.post('/baskets/', data , {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})


export const GetBaskets = (token) => instance.get('/baskets/', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})

export const DelBaskets = (token , id) => instance.delete(`/baskets/${id}/` , {
  headers: {
      'Authorization': `Bearer ${token}`
  }
})





// export const GetBaskets = () => instance.get(`/baskets/`)

export const Categories = () => instance.get(`/categories/category/`)


// export const GetFavorites = () => instance.get(`/favorites/`)



export const GetFavorites = (token) => instance.get('/favorites/', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})






// export const PostFavorites = (data) => instance.post(`/favorites/` , data)

export const PostFavorites = (token , data) => instance.post('/favorites/', data , {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})


export const DelFavorites = (token , id) => instance.delete(`/favorites/${id}/` , {
  headers: {
      'Authorization': `Bearer ${token}`
  }
})




// export const DelFavorites = ( id ) => instance.delete(`/favorites/${id}/`)
