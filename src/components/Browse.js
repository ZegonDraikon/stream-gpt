import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from '../hooks/useTopratedMovies'; // Import the hook
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  useUpcomingMovies();
  usePopularMovies(); // Fetches popular movies
  useNowPlayingMovies(); // Fetches now-playing movies
  useTopratedMovies(); // Fetches top-rated movies

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
