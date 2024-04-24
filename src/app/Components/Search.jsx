'use client'
import React,{useState} from 'react'
import { useRouter } from 'next/navigation';
const Search = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${searchText}`);
    }
  return (
      <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
          <input type='text' placeholder='Search keywords...' className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
          ></input>
          <button className='text-gray-100 disabled:text-red-400' disabled={!searchText}>Search</button>
    </form>
  )
}

export default Search