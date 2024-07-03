import { Container } from "react-bootstrap";
import GalleryGridItem from "./GalleryGridItem";

const TvShows = () => {
  return (
    <Container>
      <h1 className="text-light mx-0 my-3">TV Shows</h1>
      <GalleryGridItem />
    </Container>
  );
};

export default TvShows;
