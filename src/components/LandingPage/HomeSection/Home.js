import React from 'react';

import Video from '../../../assets/video.mp4';

import { 
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP
} from './HomeElements';

const Home = () => {
  return (
      <HomeContainer>
        <HomeBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HomeBg>
        <HomeContent>
          <HomeH1>Bookmark Manager</HomeH1>
          <HomeP>Simple, Safe & Easily Accessible! </HomeP>
        </HomeContent>
      </HomeContainer>
  );
};

export default Home;
