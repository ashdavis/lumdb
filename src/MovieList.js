import React, { PureComponent } from 'react';
import styled from 'styled-components'

import Movie from './Movie';
import API_ROOT from './api-config';

// const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b73ab608261783389bdc277a5b6bf166&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

const url = `${API_ROOT}/discover`;

class MovieList extends PureComponent {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const results = await fetch(url);
      const movies = await results.json();
      this.setState({
        movies: movies.results
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {movies} = this.state;
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MovieList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;