import React, { useEffect, useState } from 'react';
import { BsDownload } from 'react-icons/bs';

import desktopImage from '../../../assets/DesktopBgImg.png';
import mobileImage from '../../../assets/MobileBgImg.png';

import {
    HomeContainer,
    HomeBg,
    BgImg,
    HomeContent,
    HomeH1,
    HomeP,
    InstallPWA,
    ScrollDown,
} from './HomeElements';

const Home = () => {
    const BgImgSrc = window.innerWidth >= 690 ? desktopImage : mobileImage;

    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener('beforeinstallprompt', handler);
    }, []);

    const onClick = () => {
        if (!supportsPWA) {
            alert(
                'Either you have already installed the app or your browser does not support PWA :('
            );
            return;
        }
        promptInstall.prompt();
    };

    return (
        <HomeContainer>
            <HomeBg>
                <BgImg alt='HomeBgImg' src={BgImgSrc} />
            </HomeBg>
            <HomeContent>
                <HomeH1>Bookmark Manager</HomeH1>
                <HomeP>Simple, Safe & Easily Accessible! </HomeP>
            </HomeContent>
            <InstallPWA onClick={onClick}>
                <BsDownload size={27} /> &nbsp; Install App
            </InstallPWA>
            <ScrollDown>Scroll Down</ScrollDown>
        </HomeContainer>
    );
};

export default Home;
