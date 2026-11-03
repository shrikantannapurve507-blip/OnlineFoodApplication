
import React, { useContext } from 'react';
import { food_list } from "../../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import './Cart.css';

function Cart() {

    const { cartItems, removeFromcart } = useContext(StoreContext);

    return (
        <div className="cart">

            <div className="cart-items">

                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                <br />
                <hr />

                {
                    food_list.map((item, index) => {

                        if (cartItems[item._id] > 0) {

                            return (
                                <div key={item._id}>

                                    <div className="cart-items-title cart-items-item">

                                        <img src={item.image} alt={item.name} />

                                        <p>{item.name}</p>

                                        <p>₹{item.price}</p>

                                        <p>{cartItems[item._id]}</p>

                                        <p>
                                            ₹{item.price * cartItems[item._id]}
                                        </p>

                                        <button
                                            onClick={() => removeFromcart(item._id)}
                                        >
                                            Remove
                                        </button>

                                    </div>

                                    <hr />

                                </div>
                            );
                        }

                        return null;

                    })
                }

            </div>

        </div>
    );
}

export default Cart;
