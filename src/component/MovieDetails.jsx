import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner, ListGroup, ListGroupItem, Alert } from "react-bootstrap";
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
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmRlNDNhMzhjYjAwMTVmNjNkMmIiLCJpYXQiOjE3MTk0OTYxNjQsImV4cCI6MTcyMDcwNTc2NH0.cpIV-C6zAMmk9q3Pzvt6luuSrlNx09cvMsO45XsVsdg",
        },
      });
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

  console.log(comments);
  console.log(movieId);

  return (
    <>
      <Container>
        <Row>
          {film ? (
            <Row>
              <Col xs={12} md={4}>
                <Image src={film.Poster} className="w-100" />
              </Col>
              <Col xs={12} md={8}>
                <h3>{film.Title}</h3>
                <p>Year: {film.Year}</p>
                <p>Released: {film.Released}</p>
                <p>Duration: {film.Runtime}</p>
                <p>Genre: {film.Genre}</p>
                <p>Director: {film.Director}</p>
                <p>Actors: {film.Actors}</p>
                <p>Plot: {film.Plot}</p>
                {comments.length > 0 ? (
                  <Container className="mt-5">
                    <h3>Commenti</h3>
                    <ListGroup>
                      {comments.map(comment => {
                        return (
                          <ListGroupItem key={comment._id}>
                            <span>
                              {comment.author} <strong>ha detto:</strong> {comment.comment}
                            </span>
                          </ListGroupItem>
                        );
                      })}
                    </ListGroup>
                  </Container>
                ) : (
                  <Container className="mt-5 px-0">
                    <Alert variant="light">Non sono presenti commenti</Alert>
                  </Container>
                )}
              </Col>{" "}
            </Row>
          ) : (
            <Spinner animation="border" role="status" variant="info">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Row>
      </Container>
    </>
  );
};
export default MovieDetails;
