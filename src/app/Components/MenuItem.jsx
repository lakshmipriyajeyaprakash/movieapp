import React from 'react'
import Link from 'next/link'

const MenuItem = ({title,address,Icon}) => {
  return (
      <Link href={address}>
          <Icon className='text-2xl sm:hidden hover:text-violet-500'/>
          <p className='uppercase hidden hover:text-violet-500 ease-in ease-out sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem