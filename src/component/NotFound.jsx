import { Row, Button, Col, Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <h1>404 NOT FOUND</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={4}>
          <Button>Go Home</Button>
        </Col>
        <Col xs={12} md={4}>
          <Button>Tv Shows</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
