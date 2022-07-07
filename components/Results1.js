import Thumbnail1 from "./Thumbnail1";

function Results1({ results }) {
  return (
    <div
      className=" 
    px-5
     my-10 
     sm:grid
      md:grid-cols-2
       lg:grid-cols-3
        xl:grid-cols-4
        3xl: flex flex-wrap justify-center
        "
    >
      {results.map((result) => (
        <Thumbnail1 key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results1;
