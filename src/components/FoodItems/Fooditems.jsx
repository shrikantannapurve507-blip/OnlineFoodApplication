import React, { useContext, useState } from 'react'
import './fooditems.css';
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'


const FoodItems = ({ id, name, image, price, description }) => {
    const { cartItems, setCartItems, addToCart, removeFromcart } = useContext(StoreContext)
    return (

        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt="" className="food-item-image" />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
            {
                !cartItems[id]
                    ? <div className='add' onClick={() => addToCart(id)}><button>Add To Cart</button>
                    </div>
                    : <div className='food-item-container' >
                        <img 
                            src={assets.add_icon_green} onClick={() => addToCart(id)} alt='Add' />

                        <span>{cartItems[id]}</span>
                        
                        <img src={assets.remove_icon_red} onClick={() => removeFromcart(id)} alt='Remove ' />
                    </div>


            }




        </div>
    )
}


export default FoodItems