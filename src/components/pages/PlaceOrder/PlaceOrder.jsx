
import React from 'react';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <div className="place-order">
            <div className="place-order-left">
                <h2>Delivery Information</h2>

                <div className="multi-fields">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>

                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Street" />

                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>

                <div className="multi-fields">
                    <input type="text" placeholder="Pincode" />
                    <input type="text" placeholder="Country" />
                </div>

                <input type="tel" placeholder="Phone number" />
            </div>

            <div className="place-order-right">
                <h2>Payment</h2>
                <p>Proceed to payment after confirming your order.</p>
                <button>PLACE ORDER</button>
            </div>
        </div>
    );
};

export default PlaceOrder;
