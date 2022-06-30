import Image from "next/dist/client/image";
import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div
        className="
  text-white
  cursor.pointer 
  shadow-sm
  rounded-3xl
  bg-input
  lg:max-w-2xl
  lg:text-center
  text-center
   "
      >
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          width={450}
          height={700}
          alt="poster"
          className="rounded-t-2xl"
        />
        <div className=" py-2 text-center">
          <p className="font-bold mb-2 ">{movie.title}</p>
        </div>
      </div>
    </Link>
  );
}
