import React from "react";
import MovieResults from "./Components/MovieResults";
const MASTER_URL = process.env.MOVIE_API_KEY;
const page = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${MASTER_URL}&language=en-CA&page=1`,
    { next: { revalidate: 1000 } }
  );
  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  console.log(data.results);

  return (
    <div>
      <MovieResults results={results} />
    </div>
  );
};

export default page;
