import { Button, Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = function () {
  return (
    <div className="bg-black text-white">
      <Container fluid>
        <Row className="d-flex justify-content-center py-4">
          <Col className="d-flex justify-content-center ms-auto">
            <FaFacebook size={25} className="footer-icon me-3" />
            <FaInstagram size={25} className="footer-icon me-3" />
            <FaTwitter size={25} className="footer-icon me-3" />
            <FaYoutube size={25} className="footer-icon" />
          </Col>
        </Row>

        <Row className="text-center py-4 ms-auto">
          <Col>
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact us</p>
          </Col>
          <Col>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </Col>
          <Col>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </Col>
          <Col>
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center py-4">
          <Col className="d-flex justify-content-center ms-auto">
            <Button className="bg-dark border border-white text-white" variant="primary">
              Service Code
            </Button>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center py-4">
          <Col className="d-flex justify-content-center ms-auto">
            <p>© 1997-2023 Netflix, Inc.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
