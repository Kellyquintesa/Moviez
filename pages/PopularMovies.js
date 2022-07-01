import MovieCard from "./MovieCard";

export default function PopularMovies({ movies }) {
  return (
    <div className="lg:h-full bg-navy">
      <div className="container  h-full bg-navy pb-10 px-4 pt-4">
        <h1
          className="
    text-white
    mb-6
    text-4xl
    font-semibold
"
        >
          Popular Movies
        </h1>
        <div
          className="
      grid gap-5 
      sm:grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-5
        "
        >
          {movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
