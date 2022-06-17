import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          {/*<HeroH1>Perfume relaxante</HeroH1>*/}
          <HeroH1>Perfume no pique laxante 😎</HeroH1>
          {/*<HeroP>Relaxamento em 60 segundos</HeroP>*/}
          <HeroP>Relaxamento em 60 segundos</HeroP>
          <HeroBtn>Compre aqui</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
