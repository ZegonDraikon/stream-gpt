import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="relative inset-0 bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 -z-10">
        <img src={BG_URL} alt="background" className="w-full h-full object-cover" />
      </div>

      {/* Wrapper for Search Bar & Suggestions */}
      <div className="relative z-10 p-8">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
