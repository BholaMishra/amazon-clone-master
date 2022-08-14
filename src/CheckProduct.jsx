import React from 'react';
import './CheckProduct.css';
import { useStateValue } from './stateProvider';

const CheckProduct = ({ id, image, title, price, rating }) => {
const [dispatch] = useStateValue();

    const removeFromBasket =()=>{
        // console.log(id)
      dispatch({
          type:'REMOVE_FROM_BASKET',
          id:id

      })

    }
    return (<>
        <div key={id} className='checkoutProduct'>
            <img className="checkoutProduct_image" src={image} alt="..." />
            <div className="checkoutProduct_info">

                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                    {
                        Array(rating).fill().map((_, i) => {

                            return (

                                <p key={i}>⭐</p>
                            )
                        })



                    }
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>

        </div>
            <hr/>
            </>
    );
};

export default CheckProduct;