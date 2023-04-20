import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {
  
  // dispatch is a alternate name for action => it has a type feature 
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    })
  }

  return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                  <small>$</small>
                  <strong>{price}</strong>
                  </p>
                <div className="product_rating">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <p>⭐</p>
                  ))}
                </div>
            </div>
            <img src={image} alt="product_image" className="product_image"/>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
  )
}

export default Product