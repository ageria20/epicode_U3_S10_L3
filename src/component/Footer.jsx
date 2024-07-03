import { Container, Button, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container className="mt-3">
        <Row class="row justify-content-center mt-5">
          <Col class="col col-6">
            <Row class="row">
              <Col class="col mb-2">
                <i class="bi bi-facebook footer-icon me-2"></i>
                <i class="bi bi-instagram footer-icon me-2"></i>
                <i class="bi bi-twitter-x footer-icon me-2"></i>
                <i class="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
              <Col class="col">
                <Row class="row">
                  <Col class="col footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col class="col">
                <Row class="row">
                  <Col class="col footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col class="col">
                <Row class="row">
                  <Col class="col footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col class="col">
                <Row class="row">
                  <Col class="col footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row class="row">
              <Col class="col mb-2">
                <Button type="button" class="btn btn-sm footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row class="row">
              <Col class="col mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
