import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice'; // Correct action for popular movies

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS); // Correct URL for popular movies
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results)); // Dispatching popular movies
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
