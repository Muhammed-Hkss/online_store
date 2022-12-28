import { instance } from "./api"

export const Token = data => instance.post(`/token/` , data)

export const signUp = data => instance.post(`/users/user/` , data)


export const GetUser = (token) => instance.get('/users/get_user/', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})

export const ChangeUser = (id) => instance.patch(`/users/current-user/${id}/`)


export const Products = () => instance.get(`/products/product/` )

export const ProductsMore = ( id ) => instance.get(`/products/product/${id}/`)






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

export const PostDetailBaskets = (token , data) => instance.post('/basket_detail/', data , {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})







export const Categories = () => instance.get(`/categories/category/`)



export const GetFavorites = (token) => instance.get('/favorites/', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})


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
