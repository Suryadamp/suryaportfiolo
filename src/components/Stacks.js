import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import mongo from "../assets/img/mongo.png";
import node from "../assets/img/node.png";
import react from "../assets/img/react.png";
import colorSharp from "../assets/img/color-sharp.png";
import Express from "../assets/img/express.png";
import TrackVisibility from "react-on-screen";

export const Stacks = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="stacks" id="stacks">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="stacks-bx wow zoomIn">
              <h2>Stacks</h2>
              <p>
                Ability to work into functional web apps using HTML5, React ,
                Node.js,express ,Mongodb and etc...
              </p>

              <div className="item">
                <section>
                  <Container>
                    <Row>
                      <Col xs={12} md={4} xl={2}>
                        <TrackVisibility>
                          {({ isVisible }) => (
                            <div
                              className={
                                isVisible
                                  ? "animate__animated animate__slideInUp  ban "
                                  : ""
                              }
                            >
                              <img src={mongo} alt="Mongo" className="imgbar" />
                            </div>
                          )}
                        </TrackVisibility>
                      </Col>
                      <Col xs={12} md={4} xl={1}></Col>
                      <Col xs={12} md={4} xl={2}>
                        <TrackVisibility>
                          {({ isVisible }) => (
                            <div
                              className={
                                isVisible
                                  ? "animate__animated animate__slideInUp banr "
                                  : ""
                              }
                            >
                              <img
                                src={Express}
                                alt="Express"
                                className="imge"
                              />
                            </div>
                          )}
                        </TrackVisibility>
                      </Col>
                      <Col xs={12} md={4} xl={1}></Col>
                      <Col xs={12} md={4} xl={2}>
                        <TrackVisibility>
                          {({ isVisible }) => (
                            <div
                              className={
                                isVisible
                                  ? "animate__animated animate__slideInUp banm "
                                  : ""
                              }
                            >
                              <img src={react} alt="React" className="imgbar" />
                            </div>
                          )}
                        </TrackVisibility>
                      </Col>
                      <Col xs={12} md={4} xl={1}></Col>
                      <Col xs={12} md={4} xl={2}>
                        <TrackVisibility>
                          {({ isVisible }) => (
                            <div
                              className={
                                isVisible
                                  ? "animate__animated animate__slideInUp ban "
                                  : ""
                              }
                            >
                              <img src={node} alt="Node" className="imgb" />
                            </div>
                          )}
                        </TrackVisibility>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
