import React from 'react';
import './Product.css';
import { useStateValue } from './stateProvider';

const Product = ({id,title , image, price , rating}) => {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket =()=>{

       dispatch({
           type:'ADD_TO_BASKET',
           item:{
               id:id,
               title:title,
               image:image,
               price:price,
               rating:rating
           }
       })

       console.log('this is basket',basket)

    }
    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">

                <small>₹</small>
                <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                       Array(rating).fill().map((_,i)=>{

                        return(

                            <p key={i}>⭐</p> 
                        )
                       })
                         
                           
                    
                    }
                  
                </div>
            </div>
            <img src={image} alt="..."/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
};

export default Product;