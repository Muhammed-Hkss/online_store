import React from 'react'

const BasketItem = (product) => {

    console.log(product);
  return (
    <div>
      {
        product.products_data && product.products_data.map(item => {
            // console.log(item);
        })
      }
    </div>
  )
}

export default BasketItem
