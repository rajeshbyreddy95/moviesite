import React, { useEffect, useState } from 'react';
import './comedy.css';
import { dat } from '../../movieData/data';
import { Link } from 'react-router-dom';
const Comedy = () => {
  const [comedyMovies, setComedyMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const comedy = dat.filter((movie) => movie.genres.includes('Comedy'));
    setComedyMovies(comedy);
    console.log(comedy);
  }, []);

  const handleSort = (movies) => {
    if (sort === 'toprating') {
      return [...movies].sort((a, b) => b.rating - a.rating);
    }
    return movies;
  };

  return (
    <div className="comedy_movie_container" style={{
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 10%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.8) 100%), url('https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`,
      height: '100vh'
    }}>
      <div className="comedy_movie_list">
        <h1 className="text-center text-white text-5xl">Comedy Movies</h1>
        <div className="container comedy_movie_list_top d-flex justify-content-between">
          <select
            name="sort"
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort</option>
            <option value="toprating">Top Rating</option>
          </select>
          <input
            type="search"
            className="form-control-sm comedy_movie_search"
            placeholder="Search.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="comedy_movies_list">
          {handleSort(comedyMovies)
            .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
            .map((movie) => (
              <a key={movie.id} className="comedy_movie" href={`/detail/${movie.id}`} >
                <img src={movie.poster_path} alt={movie.title} />
                <p>{movie.title}</p>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Comedy;
