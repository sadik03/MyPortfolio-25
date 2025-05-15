import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image {
    position: relative;
    max-width: 40%;
    margin-top: 2rem;
    overflow: hidden;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, #00ffb2, #ff4081);
    padding: 0.5rem;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.5s, box-shadow 0.5s;

    img {
      width: 100%;
      border-radius: 1.2rem;
      transition: transform 0.5s, filter 0.5s;
      filter: grayscale(20%) contrast(120%);
    }

    &:hover {
    
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);

      img {
        transform: scale(1.1);
        filter: grayscale(0%) contrast(100%);
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 1.2rem;
      background: linear-gradient(45deg, rgba(0, 255, 178, 0.8), rgba(255, 64, 129, 0.8));
      opacity: 0.5;
      transition: opacity 0.5s;
      z-index: -1;
    }

    &:hover:before {
      opacity: 0.8;
    }
  }

  @media (max-width: 960px) {
    .hero-image {
      max-width: 80%;
      margin-top: 2rem;
    }
  }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`