import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Hello from '../../assets/Hello.gif';
import sadik from "../../assets/sadik.jpg";

export function Hero() {
  return (
    <Router>
      <Container id="home">
        <div className="hero-text">
          <ScrollAnimation animateIn="fadeInUp">
            <p>
              Hello <img src={Hello} alt="Hello" width="20px" />, I'm
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <h1>Md Sadik</h1>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <h3>Full Stack Developer</h3>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
            <p className="small-resume">6 Months of Experience</p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" >
            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/md-sadik-a40b87256/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/sadik03/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B916204662875&text=Hello+Sadik"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="WhatsApp" />
              </a>
            </div>
          </ScrollAnimation>
        </div>

        <div className="hero-image">
          <img src={sadik} alt="Md Sadik" />
          {/* Uncomment the following line if you want to use the illustration */}
          {/* <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
            <img src={Illustration} alt="Illustration" />
          </ScrollAnimation> */}
        </div>
      </Container>
    </Router>
  );
}
