import React from 'react'
import Card from './Card';
const MovieResults = ({results}) => {
  return (
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl 
      mx-auto py-4 gap-2'>
          {results.map(result => (
              <Card key={result.id} result={result}></Card>
          ))}
      </div>
  )
}

export default MovieResults