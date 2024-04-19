'use client'
import React from 'react'
import { useEffect } from 'react'
const error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error);
    },[error])
  return (
      <div className='text-center mt-10'>
          <h1>Something went wrong.Please try again</h1>
          <button className='bg-blue-600 mt-2 h-auto w-auto  hover:text-gray-100 ease-in ease-out rounded-sm' onClick={()=>reset()}>Retry</button>
      </div>
  )
}

export default error