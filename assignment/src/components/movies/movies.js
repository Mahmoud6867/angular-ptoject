import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import changeMovies from "../store/language/Action/movies";



export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageIndex, setPage] = useState(1);
  
  // const dispatch = useDispatch()

  // const movies = useSelector((state)=>state.movies.movies)

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a19800cf54f1b7895147d247004b3927",
        {
          params: { page: pageIndex },
        }
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    // dispatch(changeMovies())
  }, [pageIndex]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <Row xs={1} md={4} className="g-4">
          {movies.map((mov) => {
            return (
              <div>
                <Col key={mov.id}>
                  <Card style={{height:"1000px"}}>
                    <Link to={`/details/${mov.id}`}>
                      <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                        alt={"Movie poster"}
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>{mov.title}</Card.Title>
                      <Card.Text>{mov.overview}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </div>
      <div className="pagination justify-content-center mt-4">
        <Button
          variant={`outline-primary ${pageIndex === 1 ? "disabled" : ""}`}
          onClick={() => {
            setPage(pageIndex - 1);
          }}
        >
          Previous
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => {
            setPage(pageIndex + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
