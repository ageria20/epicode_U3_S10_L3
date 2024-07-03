import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const [comments, setComments] = useState([]);

  const params = useParams();
  const movieId = params.movieId;
  //   const navigate = useNavigate();

  const fetchMovieDetails = async () => {
    try {
      const resp = await fetch(`http://www.omdbapi.com/?apikey=8e8de469&i=${movieId}`);
      if (resp.ok) {
        setFilm(await resp.json());
      } else console.log("Errore");
    } catch {
      console.log("Errore");
    }
  };

  const fetchMovieComments = async () => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${moviedId}`);
      if (resp.ok) {
        setComments(await resp.json());
      } else console.log("Errore nel reperimento dei dati");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieComments();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <>
      <Container>
        <Row>
          {film ? (
            <>
              <Col xs={12} ms={4}>
                <Image src={film.Poster} />
              </Col>
              <Col xs={12} ms={8}>
                <h3>Title: {film.Title}</h3>
                <p>Year: {film.Year}</p>
                <p>Released: {film.Released}</p>
                <p>Duration: {film.Runtime}</p>
                <p>Genre: {film.Genre}</p>
                <p>Director: {film.Director}</p>
                <p>Actors: {film.Actors}</p>
                <p>Plot: {film.Plot}</p>
              </Col>{" "}
            </>
          ) : (
            <Spinner animation="border" role="status" variant="info">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Row>
      </Container>
      <Container>
        <Container>
          <ListGroup>
            {comments.length > 0 ? (
              comments.map(comment => {
                return (
                  <ListGroupItem key={comment._id}>
                    <span>
                      {comment.author} <strong>ha detto:</strong> {comment.comment}
                    </span>
                  </ListGroupItem>
                );
              })
            ) : (
              <Spinner animation="border" role="status" variant="info">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </ListGroup>
        </Container>
      </Container>
    </>
  );
};
export default MovieDetails;
