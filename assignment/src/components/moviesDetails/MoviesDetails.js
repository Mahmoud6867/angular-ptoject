import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function MoviesDetails() {

  const params = useParams()

  const [movies,setMovies] = useState({})

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=a19800cf54f1b7895147d247004b3927`)
    .then((res)=>{
      console.log(res.data);
      setMovies(res.data);
    })
    .catch((err)=>{console.log(err);});
  },[])
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} alt={`${movies.title} poster`}></img>
      <h1>{movies.title}</h1>
      <h2>{movies.overview}</h2>
    </div>
  )
}
