import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 0 2rem;

  .hard-skills {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }

    img {
      width: 4rem;
      border-radius: 8px;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2.5rem;
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--green);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 50%;
      height: 4px;
      background: var(--blue);
    }
  }

  h3 {
    margin-top: 2.5rem;
    color: var(--green);
    font-size: 2.5rem;
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    line-height: 1.6;
  }

  .about-image {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 80%;
      border-radius: 15px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      filter: grayscale(0);
      transition: filter 0.5s, transform 0.5s;
      &:hover {
        filter: grayscale(0);
        transform: scale(1.05);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: center;
    margin-top: 6rem;

    .about-image {
      max-width: 100%;
      margin-top: 3rem;

      img {
        width: 90%;
      }
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
    margin-top: 6rem;

    .hard-skills {
      justify-content: center;
    }

    .about-image {
      display: flex;
      max-width: 100%;

      img {
        margin-top: 2rem;
        width: 100%;
      }
    }
  }
`;
