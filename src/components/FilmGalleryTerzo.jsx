import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class FilmGalleryTerzo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isLoading: true,
      error: null,
    };
  }

  fetchGallery = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?s=leone&apikey=6a45bde1");
      if (resp.ok) {
        const data = await resp.json();
        if (data.Response === "True") {
          this.setState({ films: data.Search, isLoading: false });
        } else {
          this.setState({ error: data.Error, isLoading: false });
        }
      } else {
        throw new Error("Failed to fetch");
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message, isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchGallery();
  }

  render() {
    const { films, isLoading, error } = this.state;

    const cardStyle = {
      width: "150px",
      height: "225px",
      overflow: "hidden",
      border: "none",
      marginRight: "10px",
    };

    const imgStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };

    return (
      <div>
        <Container fluid>
          <h6>Leone Movies</h6>
          <Row className="d-flex no-gutters flex-nowrap">
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!isLoading &&
              !error &&
              films.map((film, index) => (
                <Col key={index} className="d-flex justify-content-center mb-4">
                  <Card style={cardStyle}>
                    <Card.Img variant="top" src={film.Poster} alt={film.Title} style={imgStyle} />{" "}
                    <Card.Body>
                      <Card.Title>{film.Title}</Card.Title>
                      <Card.Text>{film.Year}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default FilmGalleryTerzo;
