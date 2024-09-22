import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies, addUpcomingMovies } from '../utils/movieSlice'; // Correct action for popular movies

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS); // Correct URL for popular movies
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results)); // Dispatching popular movies
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
