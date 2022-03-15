import React from 'react';
import { animateScroll as scroll } from 'react-scroll/modules';

import {
    ContactContainer,
    ContactWrap,
    LeftContent,
    MiddleContent,
    RightContent,
    ContentH,
    Content,
    ContactBtn
} from './ContactElement';

const Contact = () => {
  const toggleHome = () =>{
    scroll.scrollToTop();
  }

  const feedbackClick = () => {
    window.open("https://forms.gle/78zWtU31mBRnYeTT6");
  };

  return (
      <ContactContainer id="contact">
          <ContactWrap>
              <LeftContent>
                <ContentH>About Developer</ContentH>
                <Content>
                    Hey beloved user I am <a style={{color:"#7bfff6"}} href="https://vishal-codes.github.io">Vishal Shinde</a> ,creator of this web app. I am an aspiring Computer Science student based in Mumbai, India. I am deeply passionate about software development innovations, firm believer of team work and striving hard with other community members to create an impact. I often help my peers and juniors to get started with programming and introduce them to open source.
                </Content>
              </LeftContent>
              <MiddleContent>
                <ContentH>Support Project</ContentH>
                <Content>
                    I am looking for sponsors! if someone is willing to sponsor to help me get a new hosting and database, I will be happy to have your or your company's name mentioned here on this page. You can contact me on itsvishal2417@gmail.com for sponsorship details. If you use this web app on daily basis then do consider sponsoring this project or I might have to shut down this project within months as I am using a free tier plan for the databse which has certain limits for usage.
                </Content>
              </MiddleContent>
              <RightContent>
                <ContentH>Contact</ContentH>
                <Content>
                    Want to report a bug or just want have a chat? My inbox is always open, feel free to drop a text
                    <ul>
                        <li><a style={{color:"#7bfff6"}} href="https://github.com/vishal-codes">GitHub</a></li>
                        <li><a style={{color:"#7bfff6"}} href="https://www.linkedin.com/in/vishal-shinde-/">LinkedIn</a></li>
                        <li><a style={{color:"#7bfff6"}} href="https://twitter.com/vishaltwts">Twitter</a></li>
                        <li><a style={{color:"#7bfff6"}} href="mailto:itsvishal2617@duck.com">itsvishal2617@duck.com</a></li>
                    </ul>
                    P.S. - I am mostly active on twitter.
                    <ContactBtn onClick={toggleHome}>Back to Top ^</ContactBtn>
                    <ContactBtn onClick={feedbackClick}>Feedback !</ContactBtn>
                </Content>
              </RightContent>
          </ContactWrap>
          <Content style={{marginBottom: "10px"}}>Have a Nice day 🌻!</Content>
      </ContactContainer>
  );
};
export default Contact;
