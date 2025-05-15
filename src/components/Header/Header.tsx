import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Resume from '../../assets/Vinayak_Kumar_Singh_Resume.pdf';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

export function Header() {
  const [isActive, setActive] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  
  function toggleTheme() {
    document.documentElement.classList.toggle('light');
    setIsLightTheme(!isLightTheme);
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{'<Md'}</span>
          <span>{' Sadik/>'}</span>
        </HashLink>

        {/* <div className="theme-toggle" onClick={toggleTheme}>
          {isLightTheme ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
        </div> */}

        <nav className={`nav-links ${isActive ? 'active' : ''}`}>
          <NavHashLink smooth to="#home" onClick={closeMenu} className="nav-link">
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu} className="nav-link">
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu} className="nav-link">
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu} className="nav-link">
            Contact
          </NavHashLink>
          <a href={Resume} download className="button nav-link">
            Resume
          </a>
        </nav>

        <div
          role="button"
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={`menu-icon ${isActive ? 'active' : ''}`}
          onClick={() => setActive(!isActive)}
          style={{ display: isActive || window.innerWidth <= 768 ? 'block' : 'none' }}
        >
          {/* {isActive ? <FaTimes /> : <FaBars />} */}
        </div>
      </Router>
    </Container>
  );
}

// Styles used in the component should reflect better transitions and add aesthetics to make the menu more attractive.
// Suggested style additions:
// 1. Smooth transitions for toggling the menu and theme.
// 2. Highlight active navigation links.
// 3. Use of icons for better visual appearance (e.g., FaBars and FaTimes for open/close menu icons).
// 4. Attractive icons for theme toggle (e.g., FaSun and FaMoon for light/dark mode).
// 5. Ensure menu icon is only visible on mobile view (e.g., with a media query for max-width 768px).
