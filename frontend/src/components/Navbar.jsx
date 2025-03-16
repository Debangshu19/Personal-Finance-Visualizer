import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white p-6 justify-between flex'>
        <Link to='/' className='text-white font-sans animate-pulse'>Expense Tracker</Link>
        <Link to='/category' className='text-white font-sans animate-bounce'>Category</Link>
        <Link to='/budget' className='text-white font-sans animate-pulse'>Budget</Link>
    </div>
  )
}

export default Navbar
