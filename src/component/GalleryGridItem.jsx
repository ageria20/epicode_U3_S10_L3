import { useState, useEffect } from "react";
import { Carousel, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GalleryGridItem = props => {
  // state = {
  //   films: [],
  //   isLoading: false,
  // };

  const [films, setFilms] = useState([]);
  const navigate = useNavigate();

  const fetchFilm = () => {
    // this.setState({ isLoading: true });
    fetch("http://www.omdbapi.com/?apikey=8e8de469&s=" + props.filmName)
      .then(resp => {
        if (resp.ok) return resp.json();
        else console.log("Errore");
      })
      .then(filmpObj => {
        // console.log(filmpObj);
        // console.log(this.state.isLoading);
        setFilms(filmpObj.Search);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchFilm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    films.length > 0 && (
      <Carousel>
        <Carousel.Item interval={3000}>
          <Row>
            {films.slice(0, 6).map(film => {
              return (
                <Col md={2} key={film.imdbID} onClick={() => navigate(`/movie-details/${film.imdbID}`)}>
                  <Image className="img-fluid" src={film.Poster} alt={film.Title} />
                </Col>
              );
            })}
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Row>
            {films.slice(0, 6).map(film => {
              return (
                <Col md={2} key={film.imdbID} onClick={() => navigate(`/movie-details/${film.imdbID}`)}>
                  <Image className="img-fluid" src={film.Poster} alt={film.Title} />
                </Col>
              );
            })}
          </Row>
        </Carousel.Item>
      </Carousel>
    )
  );
};

export default GalleryGridItem;
