import React from 'react'
import './Product.css'

function Product({id, title, image, price, rating}) {
  return (
        <div className="product">
            <div className="product_info">
                <p>PAZZO Polo - 3 Compartment 28 LTR Casual Travel Bagpack/School Backpack Bag</p>
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

            <button>Add to Basket</button>
        </div>
  )
}

export default Product