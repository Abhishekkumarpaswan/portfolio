import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/disney_image.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React,{useMemo} from "react";
import myResume from "../assets/My_Resume_GS.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [Index,setIndex] = useState(1);
  const toRotate = useMemo(()=>[ "Web Developer", "Programmer", "Coder", "Software Developer" ],[]);
  const period = 2000;

  useEffect(() => {
    // let ticker = setInterval(() => {
    //   tick();
    // }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [delta,tick])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const interval=setInterval(tick,delta);
  return() => clearInterval(interval);},[isDeleting,loopNum,setIndex,text.length,toRotate,delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Abhishek `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Programmer", "Coder", "Software Developer" ]'><span className="wrap">{text}</span></span></h1>
                <p><p>Highly motivated and skilled in<strong> Python, web development</strong> (React), and<strong> mobile app development</strong> (Flutter). I create user-centric applications that solve problems and drive results. Let's collaborate!</p>
</p>
                  <button><a href={myResume} download="Abhishek_kumar_paswan_Resume.pdf" style={{ textDecoration:"none", color: "inherit", display: "flex", alignItems: "center"}}>Download Resume<ArrowRightCircle size={25}/></a></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}