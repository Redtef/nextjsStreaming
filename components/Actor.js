import Image from "next/image";

function Actor({ actor }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  let picture = actor.profile_path
    ? `${BASE_URL}${actor.profile_path}`
    : "/images/placeholder-120x175.png";

  return (
    // <div className="card w-40 bg-base-100 shadow-xl mx-2">
    //   <Image
    //     layout="intrinsic"
    //     height={192}
    //     width={128}
    //     alt={`picture-of-${actor.name}`}
    //     src={picture}
    //     placeholder="blur"
    //     blurDataURL="/images/placeholder-120x175.png"
    //   />
    //   <div className="card-body flex flex-col justify-center">
    //     <h2 className="card-title text-sm text-center">{actor.character}</h2>
    //     <h2 className="card-title text-sm text-center">{actor.name}</h2>
    //     <p></p>
    //     <div className="card-actions justify-end">
    //       {/* <div className="badge badge-outline">Fashion</div>
    //     <div className="badge badge-outline">Products</div> */}
    //     </div>
    //   </div>
    // </div>
    <div className="card card-side bg-base-100 shadow-xl w-72 lg:w-72 mx-1 my-1">
      <div>
        <Image
          layout="fixed"
          height={192}
          width={128}
          alt={`picture-of-${actor.name}`}
          src={picture}
          placeholder="blur"
          blurDataURL="/images/placeholder-120x175.png"
        />
      </div>
      <div className="card-body mr-16 ml-1">
        <h2 className="card-title text-white text-base">{actor.character}</h2>
        <p>{actor.name}</p>
        <div className="badge badge-outline">{actor.known_for_department}</div>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div> */}
      </div>
    </div>
  );
}

export default Actor;
