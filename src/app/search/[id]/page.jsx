import MovieResults from '@/app/Components/MovieResults';
import React from 'react'

const SearchResults = async({ params }) => {
    const searchItem = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchItem}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length === 
        <h1 className='text-center pt-6'>No results found</h1>}
      {results && <MovieResults results={results} />}
    </div>
  );
}

export default SearchResults