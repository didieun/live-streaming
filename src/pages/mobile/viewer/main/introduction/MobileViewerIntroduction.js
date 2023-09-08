import React from 'react';
import {
    Container, TitleText, AlignCenter, AvatarBox, UserName, WidthBox, UserNumberBox,
    BoxStyle,
    ShowMoreButton,
    TextStyle, BoxInStyle
} from "./styles/MobileViewerIntroductionStyle";
import {ReactComponent as ProfileUserIcon} from "../../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../../common/images/ViewersUserIcon.svg";
import TestProfileImage from "../../../../common/images/TestProfileImage.jpeg";
import {Typography} from "@mui/material";

function MobileViewerIntroduction(props) {
    const {handleClickIntroductionOpen} = props;

    return (
        <Container>
            <TitleText>
                방송명 - OF SOLO VS SQUAD | BGMI UBG
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

            <BoxStyle>
                <TextStyle>
                    Hey Everyone 😇 Welcome To My Chennel<br/>
                    Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream And Videos 🥰<br/>
                </TextStyle>

                <ShowMoreButton onClick={handleClickIntroductionOpen} disableRipple>
                    Show More
                </ShowMoreButton>
            </BoxStyle>
        </Container>
    );
}

export default MobileViewerIntroduction;