import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  //  console.log(props); 
    const {name,img,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>

            </div>
            <div className="description">
                  <h4 className="product-name"><b>{name}</b></h4>
                  <p><small>By: {seller}</small></p>
                  <p> Price : ${price}</p>
                  <p><small>Only <b> {stock} </b>available-order soon!</small></p>
                  <button onClick={ ()=>props.handleAddProduct(props.product)}
                  className="gold-btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
           
          
        </div>
    );
};

export default Product;