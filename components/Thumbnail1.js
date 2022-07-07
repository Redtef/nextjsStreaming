import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
function Thumbnail1({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  let imageSrc =
    `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
    `${BASE_URL}${result.poster_path}`;

  let movieName = result.title || result.original_name;

  let movieType = result.media_type ? `${result.media_type}` : " ";
  let airDate = result.release_date || result.first_air_date;
  let firstAirDate = airDate ? airDate : " ";

  return (
    <article className="flex items-start space-x-6 p-6">
      <Image
        src={imageSrc}
        alt=""
        width="60"
        height="88"
        className="flex-none rounded-md bg-slate-100"
      />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20">
          {movieName}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dt className="text-sky-500">
              <span className="sr-only">Star rating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </dt>
            <dd>{result.vote_average}</dd>
          </div>
          <div>
            <dt className="sr-only">Rating</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded">PG-13</dd>
          </div>
          <div className="ml-2">
            <dt className="sr-only">Year</dt>
            <dd>{firstAirDate}</dd>
          </div>
          <div>
            <dt className="sr-only">Genre</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              {movieType}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Runtime</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              1h 46m
            </dd>
          </div>
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">Cast</dt>
            <dd className="text-slate-400">John Doe</dd>
          </div>
        </dl>
      </div>
    </article>
    // <div className=" p-2 group cursor-pointer transition duration-200 ease-in sm:hover:scale-105 hover:z-50">
    //   <Image
    //     layout="responsive"
    //     height={1080}
    //     width={1920}
    //     alt="thumbnail"
    //     src={imageSrc}
    //   />
    //   <div className="p-2">
    //     <p className="truncate max-w-md">{result.overview}</p>
    //     <h2 className=" mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
    //       {movieName}
    //     </h2>
    //     <p className="flex items-center opacity-0 group-hover:opacity-100">
    //       {movieType}·{firstAirDate}·
    //       <ThumbUpIcon className=" h-5 mx-2" />
    //       {result.vote_count}
    //     </p>
    //   </div>
    // </div>
  );
}

export default Thumbnail1;
