import { Container, Row, Col } from "react-bootstrap";

import hearts from "../assets/img/hearts.svg";
import sIcon from "../assets/img/letter-s-svgrepo-com.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img style={{width:50,height:50}} src={sIcon} alt="hearts" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{marginTop:20}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/surya-sj-794479220/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/smiling_sj/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights @Surya_sj</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
