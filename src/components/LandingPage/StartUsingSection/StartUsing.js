import React from 'react';

import IconOne from '../../../assets/StartUsingIcon1.svg';
import IconTwo from '../../../assets/StartUsingIcon2.svg';
import { 
    StartUsingContainer,
    StartUsingHeading,
    StartUsingWrapper,
    StartUsingCard,
    StartUsingIcon,
    StartUsingLocalBtn,
    ContentP,
    ContentPRed
} from './StartUsingElements';
import GoogleAuth from '../../GoogleAuth';

function StartUsing() {
    const localVersion = () => {
        window.open("https://evozone.github.io/Bookmark-Manager/");
    };

    return (
        <StartUsingContainer id="startUsing">
            <StartUsingHeading >Start Using! </StartUsingHeading>
            <StartUsingWrapper>
                <StartUsingCard>
                    <StartUsingIcon src={IconOne}/>
                    <GoogleAuth location={"startUsing"}/> 
                    <ContentP>If you want to access your bookmarks from any device or brwoser then just Sign in with your google account and voila! you will be redirected to the web app!</ContentP>
                </StartUsingCard>
                <StartUsingCard>
                <StartUsingIcon src={IconTwo}/>
                    <StartUsingLocalBtn onClick={localVersion}>Use Local Version</StartUsingLocalBtn>
                    <ContentPRed>If you use local version then your bookmarks would be stored in local storage and won't be available on every device as they wont be synced up.</ContentPRed>
                </StartUsingCard>
            </StartUsingWrapper>
        </StartUsingContainer>
    );
}

export default StartUsing;
