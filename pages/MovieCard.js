import Image from "next/dist/client/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie?.id}`} passHref>
      <div className="bg-input shadow-sm rounded-xl cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w342${movie?.poster_path}`}
          width={570}
          height={800}
          className="rounded-t-md"
          alt={movie?.title}
        />
        <div className="px-6 text-center py-2">
          <div className="text-slate-100  font-bold text-xl mb-1">
            {movie?.title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
