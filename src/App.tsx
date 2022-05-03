import React from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

/* eslint-disable max-len */
export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <ul className="movies">
        <MoviesList movies={moviesFromServer} />
      </ul>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);