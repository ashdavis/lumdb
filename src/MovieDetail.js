import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';
import API_ROOT from './api-config';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w342';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends PureComponent {
  state = {
    movie: null
  }

  async componentDidMount() {
    const {match} = this.props;
    // const url = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=b73ab608261783389bdc277a5b6bf166&language=en-US`;
    const url = `${API_ROOT}/movie/${match.params.id}`;
    try {
      const response = await fetch(url);
      const movie = await response.json();
      this.setState({
        movie
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {movie} = this.state;
    if (movie) {
      return (
        <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
          <MovieInfo>
            <Overdrive id={movie.id.toString()}>
              <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
            </Overdrive>
              <div>
                {movie.title === 'It' ? (
                  <h1>It</h1>
                ) : (
                  <h1>{movie.title}</h1>
                )}
                {/* <h1>{movie.title}</h1> */}
                <h3>{movie.release_date}</h3>
                <p>{movie.overview}</p>
              </div>
          </MovieInfo>
        </MovieWrapper>
      );
    } else {
      return null;
    }
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;