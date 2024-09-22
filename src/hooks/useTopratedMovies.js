import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice'; // Correct action for top-rated movies

const useTopratedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results)); // Dispatching top-rated movies
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopratedMovies;
