import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    const total= (cart.reduce((total,prd) =>total+prd.price,0)).toFixed(2)
    const total2=parseFloat(total);

    let shipping=0;
     if (total2 >35){
        shipping=0;
    }
    else if (total2 >15){
        shipping =4.99;
    }
    else if (total2 > 0){
        shipping = 12.99; 
    }
    const tax= (total/10).toFixed(2);
    const grandTotal=(total2 + shipping + Number(tax)).toFixed(2);



    return (
        <div className="cart-hisab">
            <h4>Order Summary</h4>
            <p>Items Ordered :<b> {cart.length}</b> </p>
            <p>Product Price : <b>{total2}</b></p>
            <p>Shipping price: <b>{shipping}</b></p>
            <p className="divider">Tax and VAT: <b>{tax}</b></p>
            <h4 className="grand-total">Grand total:<b> {grandTotal}</b></h4>
            
        </div>
    );
};

export default Cart;