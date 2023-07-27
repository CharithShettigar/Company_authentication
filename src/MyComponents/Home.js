import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='text-center mt-5'>

        <h2>Home Page</h2>
        <p>You are successfully logged in</p>
        <Link type='submit' className="btn btn-primary" to="/login">Log out</Link>

    </div>
  )
}

export default Home