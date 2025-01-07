import React from 'react'

function PaymentPage() {




  return  <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Complete Your Payment</h1>
      <button 
        onClick={handlePayment} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#3399cc',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Pay Now
      </button>
    </div>



}

export default PaymentPage