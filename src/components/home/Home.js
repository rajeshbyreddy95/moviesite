import React, { useEffect, useState } from 'react';
import { dat } from '../../movieData/data';
import './home.css'
import { Link } from 'react-router-dom';

const  Home = () => {
    const [trending, setTrending] = useState([])
    const [movies,setMovies] = useState([])


    useEffect(()=>{
        setTrending(dat.filter((movie)=>movie.rating > 7.5).slice(0,10))
    },[])

    useEffect(() => {
      const comedy = dat.filter((movie) => movie.genres.includes('Action')).slice(20,40);
      setMovies(comedy);
    }, []);
  
  return (
    <div>
    <div className=''>
      <nav className="navbar navbar-expand-lg home-navbar bg-primary">
      <div className="container">
        <a className="navbar-brand home-navbar__brand" href="#">Movies Spot</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link home-navbar__link" href="/fav">Favourites</a>
            </li>
            <li className="nav-item">
              <a className="nav-link home-navbar__link" href="/tvShows">TV Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link home-navbar__link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link home-navbar__link" href="/login">Login</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    </div>
    <section className="container-fluid trending">
      <h1>Top 10</h1>
      <section className="trending_container" style={{
        display:'flex',
        overflow:'scroll',
        gap:'15px'
      }}>
        {trending.map((movie)=>(
          <div>
         <Link to={`./detail/${movie.id}`}>
          <img src={movie.poster_path} alt="" className="trending_img_poster" style={{
            width:'200px',
            height:'300px',
            borderRadius:'30px'
          }} />
          
         </Link>
         <section className="trending_movie_rating">
         <p>{(movie.rating%100).toFixed(1)}</p>
       </section>
       </div>
        ))}
      </section>
    </section>
    <section className="genres container">
      <a className="genre thriller" href='/thriller'>
      <p>Thriller</p>
      </a>
      <a className="genre action" href='/action'>
      <p>Action</p>
      </a>
      <a className="genre comedy" href='/comedy'>
      <p>Comedy</p>
      </a>
      <a className="genre adventure" href='/adventure'>
      <p>Adventure</p>
      </a>
      <a className="genre animation" href='/animation'>
      <p>Animation</p>
      </a>
      
    </section>
    <section className="some_action_movies">
      <section className="some_action_movies_header d-flex p-3 justify-content-between align-items-center">
      <h3>Action Movies</h3>
      <a href="/action">Load More</a>
      </section>
      <div className="comedy_movies_list p-2">
          {movies.map((movie) => (
              <a key={movie.id} className="comedy_movie" href={`/detail/${movie.id}`} >
                <img src={movie.poster_path} alt={movie.title} />
                <p class="text-truncate" style={{width: '5ch'}}>{movie.title}</p>
              </a>
          ))}
        </div>
    </section>
  </div>
  );
}




export default Home