import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import port_proj from "../assets/img/port_proj.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import movie from "../assets/img/movie.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HeartPulseFill } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "Personal portfolio",
      description: "Design & Development",
      imgUrl: port_proj,
      url: "https:\\abhishekpaswan.me",
      HeartPulseFill,
    },
    {
      title: "MyMovieList",
      description: "Entertainmnet",
      imgUrl: movie,
      url: "https://github.com/Abhishekkumarpaswan/MyMovieList",
      HeartPulseFill,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I'm passionate about tackling real-world challenges through innovative applications.  Here, you'll find a selection of projects that showcase my capabilities in Python, web development, and app development.  Explore a variety of projects I've built, from user-friendly web applications to mobile apps that solve everyday problems.  Each project highlights my technical skills and problem-solving approach.  Get a glimpse into the diverse ways I can leverage technology to create impactful solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Python/AI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">App Dev</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>I'm passionate about tackling real-world challenges through innovative applications.  Here, you'll find a selection of projects that showcase my capabilities in Python, web development, and app development.  Explore a variety of projects I've built, from user-friendly web applications to mobile apps that solve everyday problems.  Each project highlights my technical skills and problem-solving approach.  Get a glimpse into the diverse ways I can leverage technology to create impactful solutions.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Here I will put more projects.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}