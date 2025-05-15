import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  padding: 2rem;

  h2 {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
    color: var(--primary-color);
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .toggle-switch {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;

    .toggle-button {
      padding: 1rem 2rem;
      font-size: 1.2rem;
      font-weight: bold;
      border: 2px solid transparent;
      background: linear-gradient(145deg, #333, #444);
      color: #FFF;
      cursor: pointer;
      transition: all 0.4s ease;
      border-radius: 1rem;
      position: relative;
      overflow: hidden;

      &.active {
        background: linear-gradient(145deg, #ff7b7b, #ff5252);
        border-color: #FFF;
      }

      &:hover {
        background: linear-gradient(145deg, #ff5252, #ff7b7b);
        transform: scale(1.05);
        color: #FFF;
      }

      &:not(:last-child) {
        margin-right: 1.5rem;
      }
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 1rem;

    .project {
      position: relative;
      background: linear-gradient(145deg, #1e1e1e, #333);
      border-radius: 1.2rem;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
      transition: transform 0.4s, box-shadow 0.4s;
      display: flex;
      flex-direction: column;
      color: #FFF;
      overflow: hidden;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 20px rgba(0, 0, 0, 0.6);
        background: linear-gradient(145deg, #444, #222);
      }

      .image-container {
        width: 100%;
        height: 150px; /* Reduced height for better mobile fit */
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;

          &:hover {
            transform: scale(1.05);
          }
        }
      }

      .body {
        padding: 1rem;
        flex-grow: 1;

        h3 {
          font-size: 2rem;
          color: var(--light-green);
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
        }

        p {
          font-size: 1.2rem; /* Adjusted for mobile */
          line-height: 1.5;
          color: var(--light-gray);
          margin-bottom: 1rem;
          text-align: justify;
        }
      }

      footer {
        margin-top: auto;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 1.1rem; /* Adjusted for mobile */
          opacity: 0.9;

          li {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.4rem 0.8rem;
            border-radius: 0.8rem;
            transition: background 0.3s;

            &:hover {
              background: rgba(255, 255, 255, 0.2);
            }
          }
        }

        .project-links {
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
          flex-wrap: wrap; /* Adjusted for better mobile stacking */

          a {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .live-demo-button {
            padding: 0.7rem 1.2rem; /* Adjusted for mobile */
            font-size: 1rem; /* Adjusted for mobile */
            font-weight: bold;
            background: transparent;
            color: #FFF;
            border: 2px solid;
            border-radius: 0.8rem;
            animation: rgbBorder 3s infinite;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              transform: scale(1.1);
              background: rgba(255, 255, 255, 0.1);
            }
          }

          img {
            width: 3rem; /* Adjusted for mobile */
            transition: transform 0.3s;

            &:hover {
              transform: scale(1.2);
              filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.6));
            }
          }
        }
      }
    }
  }

  @keyframes rgbBorder {
    0% {
      border-color: red;
    }
    33% {
      border-color: green;
    }
    66% {
      border-color: blue;
    }
    100% {
      border-color: red;
    }
  }

  /* Responsive Styles */
  @media (max-width: 960px) {
    h2 {
      font-size: 3rem;
    }

    .toggle-button {
      padding: 0.8rem 1.5rem;
      font-size: 1.1rem; /* Adjusted for tablets */
    }

    .project {
      padding: 1.2rem;
    }

    .live-demo-button {
      font-size: 0.9rem;
      padding: 0.6rem 1.1rem;
    }
  }

  @media (max-width: 740px) {
    h2 {
      font-size: 2.5rem;
    }

    .projects {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }

    .project {
      padding: 1rem;
    }

    .toggle-button {
      padding: 0.6rem 1.2rem;
      font-size: 1rem; /* Adjusted for smaller devices */
    }

    .live-demo-button {
      font-size: 0.85rem; /* Adjusted for smaller screens */
      padding: 0.5rem 1rem; /* Adjusted padding */
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }

    .project {
      .body h3 {
        font-size: 1.6rem;
      }

      .body p {
        font-size: 1rem;
      }

      .tech-list {
        font-size: 0.9rem;
      }

      .project-links {
        flex-direction: column; /* Stack links vertically */
        align-items: center;
      }

      .live-demo-button {
        padding: 0.5rem 0.8rem;
        font-size: 0.8rem; /* Adjusted for very small screens */
      }
    }
  }



  
`;
