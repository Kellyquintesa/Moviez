import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { server } from "../config";
import PopularMovies from "./PopularMovies";
import Image from "next/dist/client/image";
import Link from "next/link";

export default function homeMenu({ movies }) {
  console.log(movies);
  return (
    <div
      className="
    bg-navy 
    w-full 
    h-full
    lg:h-[240vh] 
    md:h-full"
    >
      <div className=" w-full bg-navy h-96 lg:h-screen relative ">
        <Image
          src="/images/Poster.png"
          alt="cover"
          layout="fill"
          className="
          w-full 
          h-full 
          object-cover 
          mix-blend-lighten     
          absolute
        "
        />

        <div className="items-center ">
          <div
            className="
        h-full
      text-red
        font-bold
        p-10 
        flex
        justify-between
        text-lg
        lg:text-6xl
        pb-28 "
          >
            KQ
            <Link href="/404">
              <button>
                <FiSearch
                  className="
              text-white 
              lg:text-3xl 
              hover:cursor-pointer
              mr-5 
              "
                />
              </button>
            </Link>
          </div>
        </div>
        {/* image background */}
        <div
          className="
          text-white 
          font-bold 
          text-xl 
          lg:text-6xl
          lg:pt-[300px]
          p-10
          absolute "
        >
          Dr.Strange 2
          <p className="text-base font-normal lg:pt-3 lg:text-lg">
            Action, Superhero, Science Fiction
          </p>
          <div className="flex pt-3 ">
            <Link href="/404">
              <button
                className="
            mr-3 
            bg-red 
            py-2 
            px-8 
            text-sm 
            font-normal 
            rounded-full"
              >
                Play
              </button>
            </Link>
            <Link href="/404">
              <button
                className=" 
            bg-transparent 
            border-2 
            py-2 
            px-4 
            text-sm 
            font-normal 
            rounded-full"
              >
                + My List
              </button>
            </Link>
          </div>
        </div>
      </div>
      <PopularMovies movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  );
  const movies = res.data;

  return {
    props: { movies },
  };
}
