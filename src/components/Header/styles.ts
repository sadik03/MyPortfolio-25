import styled from "styled-components";

// The Container is a styled header element for the navigation bar
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 8rem;
  background: rgba(33, 33, 33, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
  color: #fff;
  padding: 0.7rem 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  border-radius: 6px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }

  &.button {
    background: transparent; /* Transparent inner background */
    padding: 0.7rem 2rem;
    border-radius: 8px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    border: 3px solid transparent;
    border-image: linear-gradient(45deg, red, green, blue, red);
    border-image-slice: 1;
    animation: rgbBorder 4s linear infinite;
    box-shadow: 0 4px 15px rgba(245, 56, 68, 0.4);
  }
}

/* Keyframes for RGB Border Animation */
@keyframes rgbBorder {
  0% {
    border-image-source: linear-gradient(45deg, red, green, blue, red);
  }
  33% {
    border-image-source: linear-gradient(45deg, green, blue, red, green);
  }
  66% {
    border-image-source: linear-gradient(45deg, blue, red, green, blue);
  }
  100% {
    border-image-source: linear-gradient(45deg, red, green, blue, red);
  }
}

  }

  .menu-container {
    cursor: pointer;
    padding: 0.6rem;
  }

  .menu {
    width: 2.5rem;
    height: 0.25rem;
    background: #fff;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: none;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.25rem;
      background: #fff;
      transition: 0.6s ease;
    }

    &:before {
      top: -0.6rem;
    }

    &:after {
      bottom: -0.6rem;
    }

    &.active {
      background-color: transparent;

      &:before {
        top: 0;
        transform: rotate(45deg);
      }

      &:after {
        bottom: 0;
        transform: rotate(-45deg);
      }
    }
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    cursor: pointer;
    width: 55px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green);
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
    transition: all 0.4s ease-in-out;
    color: white;

    .icon {
      position: absolute;
      font-size: 1.2rem; // Icon size
      transition: transform 0.3s ease;
    }

    .sun-icon {
      transform: translateX(-20px);
    }

    .moon-icon {
      transform: translateX(20px);
    }

    &:after {
      content: '';
      background: #fff;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 4px;
      transition: transform 0.3s ease;
    }

    input:checked + & {
      background: var(--pink);

      &:after {
        transform: translateX(25px);
      }

      .sun-icon {
        transform: translateX(20px);
      }

      .moon-icon {
        transform: translateX(-20px);
      }
    }
  }

  @media (max-width: 960px) {
    padding: 1.5rem 2rem;

    .menu {
      display: block;
    }

    nav {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(135deg, #141E30, #243B55);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;

      a {
        padding: 1rem 2rem;
        font-size: 1.2rem;
      }

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;
