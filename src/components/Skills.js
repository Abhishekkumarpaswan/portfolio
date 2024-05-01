import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      <div className="skillpara">
                      <h2>Technical Skillset</h2>
                      <p>I possess a strong foundation in various programming languages and frameworks, enabling me to tackle diverse development projects. Here's a breakdown of my core competencies:</p>
                      <h3>Programming Languages</h3>
                      <ul>
                        <li><strong>Python:</strong> Proficient in Python syntax, data structures, and object-oriented programming principles.</li>
                        <li><strong>C:</strong> Solid understanding of C fundamentals, memory management, and efficient algorithm implementation.</li>
                      </ul>
                      <h3>App Development</h3>
                      <ul>
                        <li><strong>Flutter:</strong> Adept at building user-friendly and cross-platform mobile applications using Flutter.</li>
                      </ul>
                      <h3>Web Development</h3>
                      <ul>
                        <li><strong>React:</strong> Skilled in building dynamic and interactive web applications with React.</li>
                      </ul>  
                      <p><strong>Additionally:</strong>
                      <ul>
                        <li>Familiarity with version control systems like Git for efficient code collaboration.</li>
                        <li>Strong problem-solving skills and a passion for continuous learning to stay updated with the latest technologies.</li>
                      </ul>
                      </p>
                      </div>

                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="webdv" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="py" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="C" />
                                <h5>C Programming</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="dsa" />
                                <h5>DSA</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="cs" />
    </section>
  )
}