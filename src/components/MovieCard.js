import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    console.warn("MovieCard: posterPath is missing");
    return null;
  }
  return (
    <div className="w-44 md:w-60 pr-4 flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-110"> 
      <img
        alt="Movie Card"
        className="w-full h-full object-cover rounded-md shadow-lg" 
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
