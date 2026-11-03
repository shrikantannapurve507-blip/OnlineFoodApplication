
import React, { useContext, useState } from 'react'
import './placeorder.css'
import { StoreContext } from '../Context/StoreContext'

const PlaceOrders = () => {

    const { getTotalCartAmount } = useContext(StoreContext)

    const [address, setAddress] = useState({
        name: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        pincode: ''
    })

    const subtotal = getTotalCartAmount()
    const deliveryFee = subtotal === 0 ? 0 : 49
    const total = subtotal + deliveryFee

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (subtotal === 0) {
            alert('Your cart is empty!')
            return
        }

        console.log('Customer Address:', address)
        console.log('Total Amount:', total)

        alert('Order details submitted successfully!')
    }

    return (
        <div className="checkout-container">

            <h2>Checkout</h2>

            <div className="checkout-content">

                {/* Left Side - Address Form */}

                <div className="checkout-address">

                    <h3>Delivery Information</h3>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={address.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={address.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={address.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="street"
                            placeholder="Street Address"
                            value={address.street}
                            onChange={handleChange}
                            required
                        />

                        <div className="checkout-two-fields">

                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={address.city}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={address.state}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <input
                            type="text"
                            name="pincode"
                            placeholder="Pincode"
                            value={address.pincode}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className="place-order-btn">
                            PLACE ORDER
                        </button>

                    </form>

                </div>


                {/* Right Side - Cart Total */}

                <div className="checkout-total">

                    <h3>Cart Total</h3>

                    <div className="checkout-total-details">
                        <p>Subtotal</p>
                        <p>₹{subtotal}</p>
                    </div>

                    <hr />

                    <div className="checkout-total-details">
                        <p>Delivery Fee</p>
                        <p>₹{deliveryFee}</p>
                    </div>

                    <hr />

                    <div className="checkout-total-details checkout-grand-total">
                        <h4>Total</h4>
                        <h4>₹{total}</h4>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default PlaceOrders
