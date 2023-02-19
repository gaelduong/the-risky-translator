import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {' '}
      <Link to="/city0">
        <button style={{ marginTop: 'env(safe-area-inset-top)' }}>Play</button>
      </Link>
    </div>
  )
}

export default Home
