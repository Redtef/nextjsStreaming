import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  let imageSrc =
    `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
    `${BASE_URL}${result.poster_path}`;

  let movieName = result.title || result.original_name;

  let movieType = result.media_type ? `${result.media_type}` : " ";
  let airDate = result.release_date || result.first_air_date;
  let firstAirDate = airDate ? airDate : " ";

  return (
    <div
      onClick={() => router.push(`/movie/${result.id}`)}
      className=" p-2 group cursor-pointer transition duration-200 ease-in sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        alt="thumbnail"
        src={imageSrc}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className=" mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movieName}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movieType}·{firstAirDate}·{result.id}
          <ThumbUpIcon className=" h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
