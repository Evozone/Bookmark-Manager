import React from 'react';

import desktopImage from '../../../assets/DesktopBgImg.png';
import mobileImage from '../../../assets/MobileBgImg.png';

import { 
  HomeContainer,
  HomeBg,
  BgImg,
  HomeContent,
  HomeH1,
  HomeP,
  ScrollDown
} from './HomeElements';

const Home = () => {

  const BgImgSrc = window.innerWidth >= 690 ? desktopImage : mobileImage;

  return (
      <HomeContainer>
        <HomeBg>
          <BgImg alt="HomeBgImg" src={BgImgSrc}/>
        </HomeBg>
        <HomeContent>
          <HomeH1>Bookmark Manager</HomeH1>
          <HomeP>Simple, Safe & Easily Accessible! </HomeP>
        </HomeContent>
        <ScrollDown>Scroll Down</ScrollDown>
      </HomeContainer>
  );
};

export default Home;
