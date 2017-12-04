import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w342';

const Movie = ({movie}) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={movie.id.toString()}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
    </Overdrive>
  </Link>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
  width: 154px;
`;

// Set a prop type for every prop passed into your component
// Always set either .isRequired or a default prop for each prop
// Defaults for nested properties can't be set in defaultProps, but work with || in the component (e.g. {move.desc || 'Description not available})