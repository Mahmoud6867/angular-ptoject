import React from "react";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);


  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((movie) => (
        <div key={movie.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.overview}
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
