import React from 'react';
import "./Checkout.css"
import CheckProduct from './CheckProduct';
import { useStateValue } from './stateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{ basket,user }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    {/* <br/> */}
                    {/* <br/> */}
                    <h3  className="checkout_title_2">Hello, {user? user?.email:"guest"}</h3>
                    <h2 className="checkout_title">
                        Your shopping basket
                    </h2>
                    {basket.map((item,i) => {

                        return (

                            <CheckProduct key={i}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        
                        )
                    })}

                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />

            </div>
        </div>
    );
};

export default Checkout;