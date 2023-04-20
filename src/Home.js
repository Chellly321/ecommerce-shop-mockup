import React from 'react'
import HomeBanner from './assets/shoppingimage.webp'
import Product from './Product';

import './Home.css';


function Home() {
  return (
        <div className="home">
            <div className="home_container">
                <img src={HomeBanner} alt="home image" className="home_image" />

                <div className="home_row">
                    <Product 
                        id='123456'
                        title='Summer Dresses | Sun Dresses For Women | Roman UK'
                        price={18.96}
                        rating={4}
                        image='https://romans-cdn.rlab.net/images/extralarge/2b1a599e-842f-4c5e-83eb-b02d5c4e40fc.jpg'
                    />
                    <Product 
                      id='123456'
                      title='PAZZO Polo - 3 Compartment 28 LTR Casual Travel Bagpack/School Backpack Bag'
                      price={9.95}
                      rating={5}
                      image='https://m.media-amazon.com/images/I/81mmaolsY5L._UX522_.jpg'
                    />
                </div>

                <div className="home_row">
                    <Product 
                      id='123456'
                      title='Air Max Bolt PS'
                      price={40}
                      rating={5}
                      image='https://d3d4to3qraukqq.cloudfront.net/pub/Lajittelemattomat+tuotekuvat/NIKE/KK_2021/NIKE_NIKE_AIR_MAX_BOLT_PS_56551275-7.jpeg?c=system_1024x&fb'
                    />
                    <Product 
                      id='123456'
                      title='JBL PartyBox 310 kopen? | Party speaker'
                      price={125}
                      rating={3}
                      image='https://www.jbl.nl/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw8db71ee2/JBL_PartyBox_310_Hero_0176_x3.png?sw=680&sh=680'
                    />
                    <Product 
                      id='123456'
                      title='Fortunoff Fine Jewelry | Online Jewelry Boutique'
                      price={29.99}
                      rating={4}
                      image='https://cdn.shopify.com/s/files/1/0017/9909/4390/files/earrings_5b9a55ee-277a-4e01-b445-dfed161e1577.jpg?v=1669148692&width=900'
                    />
                </div>

                <div className="home_row">
                    <Product 
                      id='123456'
                      title='Scented Candles | WIJCK.'
                      price={15.69}
                      rating={5}
                      image='https://www.wijck.com/upload/producten/1024x1024/candle-london160164389412.jpg'
                    />
                </div>
            </div>
        </div>
  )
}

export default Home