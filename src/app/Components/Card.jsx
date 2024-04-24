import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
const Card = ({result}) => {
  return (
      <div className='sm:border border-spacing-1 border-purple-300 sm:rounded-lg hover:shadow-slate-100 transition-colors'>
          <Link href={`/moviedb/${result.id}`}>
              <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                  width={500} height={500}
              className='sm:rounded-lg hover:opacity-25 transition-colors'>
              </Image>
              <div className='p-1'>
                  <p className='line-clamp-2'>{result.overview}</p>
                  <h2 className='font-bold text-lg text-purple-500'>{result?.title || result?.original_title ||
                      result?.original_name || result?.name}
                  </h2>
                    <p className=''>Release Date: {result.release_date || result?.first_air_date}</p>
                  <div className='flex gap-1 text-amber-300'>
                        <BsFillHandThumbsUpFill className='mt-1' />
                        {result?.vote_count}
                    </div>
              </div>
        </Link></div>
  )
}

export default Card