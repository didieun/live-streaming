import React from 'react';
import {
    Container, TopBar, ButtonIcon, ContentsBox,
    AlignCenter,
    AvatarBox, TextStyle,
    TitleText,
    UserName,
    UserNumberBox,
    WidthBox
} from "./styles/MobileViewerIntroductionDrawerStyle";
import {Typography} from "@mui/material";
import {ReactComponent as MobileCloseIcon} from "../../../../common/images/MobileCloseIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../../common/images/ViewersUserIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../common/images/ProfileUserIcon.svg";
import TestProfileImage from "../../../../common/images/TestProfileImage.jpeg";

function MobileViewerIntroductionDrawer(props) {
    const {handleClose} = props;

    return (
        <Container >
            <TopBar>
                <Typography>Stream Introduction</Typography>
                <ButtonIcon onClick={handleClose} disableRipple>
                    <MobileCloseIcon/>
                </ButtonIcon>
            </TopBar>

            <ContentsBox>
                <TitleText>
                    방송명 - OF SOLO VS SQUAD | BGMI UBG
                    MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI
                    MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI
                </TitleText>
                <AlignCenter>
                    <AvatarBox>
                        <img src={TestProfileImage} alt='image'/>

                        {/* 프로필 없을 경우 */}
                        {/*<ProfileUserIcon />*/}
                    </AvatarBox>
                    <WidthBox>
                        <UserName>kingaaa</UserName>

                        <UserNumberBox>
                            <ViewersUserIcon/>
                            <Typography>500</Typography>
                        </UserNumberBox>
                    </WidthBox>
                </AlignCenter>

                <TextStyle>
                    Hey Everyone 😇 Welcome To My Chennel<br/>
                    Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream And Videos 🥰<br/>
                    Hey Everyone 😇 Welcome To My Chennel<br/>
                    Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream And Videos 🥰<br/>
                    Hey Everyone 😇 Welcome To My Chennel<br/>
                    Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream And Videos 🥰<br/>
                    Hey Everyone 😇 Welcome To My Chennel<br/>
                    Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream And Videos 🥰<br/>
                </TextStyle>
            </ContentsBox>
        </Container>
    );
}

export default MobileViewerIntroductionDrawer;