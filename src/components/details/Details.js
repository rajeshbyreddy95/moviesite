import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dat } from '../../movieData/data';
import './details.css';

const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const defaultAvatar = `https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg`
  useEffect(() => {
    setData(dat.filter((movie) => movie.id == id).slice(0, 1));
  }, [id]);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
  console.log(isMobile);
  return (
    <div className='movie_details_div'>
      {data.map((movie) => {
        const backgroundImage = isMobile ? movie.poster_path : movie.images[0];
        return (
          <section
            className="movie_details d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${backgroundImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '100vh',
              color: 'white'
            }}
            key={movie.id}
          >
            <div className="movie_details_deep container ">
              <h1 className="display-4 fixed  sticky-top bg-primary">{movie.title}</h1>
              <p className="lead">{movie.overview}</p>
              <div className="movie_details_genres ">
                {movie.genres.map((mg, index) => (
                  <button className='btn btn-primary m-2' key={index}>{mg}</button>
                ))}
              </div>
              <div className="movie_details_cast  ">
              <h3>Cast</h3>
                <div className="movie_detail_cast ">
                 
                  {movie.cast.map((cast)=>(
                    <img src={cast.profile_path} width={'150px'} height={'150px'} style={{
                      borderRadius:'25%'
                    }} alt="" 
                    onError={(e) => { e.target.src = defaultAvatar; }}
                    />
                  ))}
                </div>
                
              </div>

            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Details;
