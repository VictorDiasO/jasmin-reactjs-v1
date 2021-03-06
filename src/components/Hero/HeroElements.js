import styled from 'styled-components';
import ImgBg from '../../images/jasmin-bg.png';

export const HeroContainer = styled.div`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1)), url(${ImgBg});
  /* background: url(${ImgBg}); */
  /* background: #F9F8FD; */
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #000;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #6a0dad;
  letter-spacing: 5px;
  color: #000;
`;

// export const HeroP = styled.p`
//   font-size: clamp(2rem, 2.5vw, 3rem);
//   margin-bottom: 2rem;
// `;

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 2.0vw, 3rem);
  font-weight: 100;
  margin-bottom: 2rem;
  font-family: sans-serif;
  /* letter-spacing: px; */
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #6a0dad;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #6a0dad;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
