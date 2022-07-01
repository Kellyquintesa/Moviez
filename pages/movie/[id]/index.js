import axios from "axios";
import { server } from "../../../config";
import Image from "next/dist/client/image";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

function Movie({ movie }) {
  console.log(movie);
  return (
    <div className="bg-navy h-full lg:h-full">
      <div
        className="
    container 
    bg-navy 
    h-full
    pt-6
    lg:h-full
    pb-20
       
    "
      >
        <Link href="/HomeMenu">
          <BiArrowBack className="text-2xl text-white mt-4 mx-7" />
        </Link>
        <div className="px-4 pt-10 w-full ">
          <div className="text-center">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="poster"
              width={1000}
              height={600}
              className="rounded-xl  "
            />
          </div>
          <div className="max-w-5xl p-3  lg:mx-auto">
            <h1
              className="
          text-white
          text-2xl 
          font-semibold 
          pt-5"
            >
              {movie.title}
            </h1>
            <p className="text-slate-400 pt-2">
              Genres:{" "}
              <span>{movie.genres.map((genre) => genre.name).join(", ")} </span>
            </p>
            <p
              className="
          text-slate-200
          text-lg
          pt-4
          lg:max-w-2xl"
            >
              {movie.overview}
            </p>
            <p className="text-slate-600 pb-20  pt-3 text-xs">
              Release Date: <span>{movie.release_date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(
    `${server}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  );
  const movie = res.data;
  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  );
  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

export default Movie;
