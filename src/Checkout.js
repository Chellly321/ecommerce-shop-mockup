import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src="https://blog.wishpond.com/wp-content/uploads/2021/07/CTA-BLOG-BANNERS-4.jpg" alt="checkout-ad" className='checkout_ad' />
        <div>
          <h2 className="checkout_title">
            Your Shopping Basket
          </h2>
          {basket.map(item => (
            <CheckoutProduct 
              id = {item.id}
              title = {item.title}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}
           />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />    
      </div>
    </div>
  )
}

export default Checkout