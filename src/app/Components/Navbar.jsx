import React from 'react'
import NavItem from './NavItem'
const Navbar = () => {
  return (
      <div className='flex justify-center gap-6 bg-purple-400 text-gray-800 p-3 lg:text-lg'>
          <NavItem navTitle='Trending' param='fetchTrending' />
          <NavItem navTitle='Top Rated' param='fetchTopRated'/>
      </div>
  )
}

export default Navbar