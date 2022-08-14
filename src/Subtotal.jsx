import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from "react-router-dom";
import { useStateValue } from './stateProvider';
import './Subtotal.css'

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const Subtotal = () => {
    const history = useHistory();
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;