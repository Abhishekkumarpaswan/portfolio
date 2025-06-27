import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import logof from "../assets/img/logodp.jpeg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="flogo" src={logof} alt="Logo" />
            <p>Created by Abhishek Kumar Paswan</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abhishek-k-paswan"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=61558477962609&mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/user_abhish?utm_source=qr&igsh=eWYxZWc0czBtazE="><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/Abhishekkumarpaswan"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright &copy; 2024 All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}