import React from 'react'
import { Link, Navigate, useLocation } from 'react-router'
import './ordersuccess.css'

const OrderSuccess = () => {
  const { state } = useLocation()

  // opened directly without placing an order -> go home
  if (!state) return <Navigate to="/" replace />

  const isCod = state.method === 'COD'

  return (
    <div className="order-success">
      <div className="order-success-box">
        <div className="order-success-tick">&#10003;</div>
        <h2>{isCod ? 'Order placed!' : 'Payment successful!'}</h2>
        <p>Thank you{state.name ? `, ${state.name}` : ''}. Your food is being prepared.</p>

        <div className="order-success-details">
          <div><span>Order ID</span><span>{state.orderId}</span></div>
          <div><span>{isCod ? 'Reference' : 'Payment ID'}</span><span>{state.paymentId}</span></div>
          <div><span>Method</span><span>{state.method}</span></div>
          <div><span>{isCod ? 'Pay on delivery' : 'Amount paid'}</span><span>{state.amount}</span></div>
        </div>

        <Link to="/" className="order-success-btn">Back to Home</Link>
      </div>
    </div>
  )
}

export default OrderSuccess
