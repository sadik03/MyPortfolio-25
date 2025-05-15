import React, { useState } from "react";
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import projectImage1 from "../../assets/thumb/pro1.png";
import projectImage2 from "../../assets/thumb/sec.jpg";
import projectImage3 from "../../assets/thumb/third.jpg";
import projectImage4 from "../../assets/thumb/forth.jpg";

export function Project() {
  const [showWebProjects, setShowWebProjects] = useState(true);

  return (
    <Container id="project">
      <h2>My Projects</h2>

      {/* Toggle Switch */}
      <div className="toggle-switch">
        <button
          className={`toggle-button ${showWebProjects ? 'active' : ''}`}
          onClick={() => setShowWebProjects(true)}
        >
          🌐 Web Development
        </button>
        <button
          className={`toggle-button ${!showWebProjects ? 'active' : ''}`}
          onClick={() => setShowWebProjects(false)}
        >
          📱 App Development
        </button>
      </div>

      {/* Projects Section */}
      <div className="projects">
        {showWebProjects ? (
          <div className="category">
            <h3>🌐 Web Development Projects</h3>
            <div className="projects">
              {/* Project 1 */}
              <div className="project">
                <div className="image-container">
                  <img src={projectImage1} alt="Serverless Voting App" />
                </div>
                <div className="body">
                  <h3>Travel Website</h3>
                  <p>
                  The Travel Website Project is a web-based application designed to provide users with an engaging and convenient platform to explore travel destinations, plan trips, and book services
                  </p>
                </div>
                <footer>
                  <ul className="tech-list">
                    <li>React</li>
                    <li>Azure cloude storage</li>
                    <li>nodejs</li>
                  </ul>
                  <div className="project-links">
                    <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://wahawonders.com/" target="_blank" rel="noreferrer">
                      <button className="live-demo-button">Live Demo</button>
                    </a>
                  </div>
                </footer>
              </div>

              {/* Project 2 */}
              <div className="project">
                <div className="image-container">
                  <img src={projectImage2} alt="Portfolio Website" />
                </div>
                <div className="body">
                  <h3>Personal Portfolio Website</h3>
                  <p>
                    Created a personal portfolio site using HTML, CSS, and JavaScript, showcasing skills, projects, and contact details.
                  </p>
                </div>
                <footer>
                  <ul className="tech-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                  <div className="project-links">
                    <a href="https://github.com/CodeVinayak/Portfolio-Site" target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://portfolio.vinayaksingh.com" target="_blank" rel="noreferrer">
                      <button className="live-demo-button">Live Demo</button>
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        ) : (
          <div className="category">
            <h3>📱 App Development Projects</h3>
            <div className="projects">
              {/* Project 3 */}
              <div className="project">
                <div className="image-container">
                  <img src={projectImage3} alt="GeniusBot" />
                </div>
                <div className="body">
                  <h3>GeniusBot: AI-Powered Assistant</h3>
                  <p>
                    Developed an interactive chatbot application using Streamlit, OpenAI's GPT-3.5, and PyPDF2 for PDF text extraction.
                  </p>
                </div>
                <footer>
                  <ul className="tech-list">
                    <li>Streamlit</li>
                    <li>OpenAI</li>
                    <li>PyPDF2</li>
                  </ul>
                  <div className="project-links">
                    <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                      <button className="live-demo-button">Live Demo</button>
                    </a>
                  </div>
                </footer>
              </div>

              {/* Project 4 */}
              <div className="project">
                <div className="image-container">
                  <img src={projectImage4} alt="Camping Planner App" />
                </div>
                <div className="body">
                  <h3>Camping Planner App</h3>
                  <p>
                    Built a camping planner app using React Native, providing trip planning, survival guides, and emergency contacts.
                  </p>
                </div>
                <footer>
                  <ul className="tech-list">
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>Firebase</li>
                  </ul>
                  <div className="project-links">
                    <a href="https://github.com/CodeVinayak/CampingApp" target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://campingapp.com" target="_blank" rel="noreferrer">
                      <button className="live-demo-button">Live Demo</button>
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
