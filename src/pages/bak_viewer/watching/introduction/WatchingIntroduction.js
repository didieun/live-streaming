import React from 'react';
import {
    Container,
    AvatarBox,
    UserName,
    Flex,
    BoxStyle,
    TextStyle,
    ShowMoreButton
} from "./styles/WatchingIntroductionStyle";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import { ReactComponent as ProfileUserIcon } from "../../../common/images/ProfileUserIcon.svg";

function WatchingIntroduction({open}) {

    return (
        <Container open={open}>
            <Flex>
                <AvatarBox>
                    {/*<img src={TestProfileImage} alt='image'/>*/}

                    {/* 프로필 없을경우 */}
                    <ProfileUserIcon />
                </AvatarBox>

                <UserName>kingaaa</UserName>
            </Flex>

            <BoxStyle>
                <TextStyle>
                    Hey Everyone 😇 Welcome To My Chennel<br/>
                    Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream And Videos 🥰
                </TextStyle>

                <ShowMoreButton disableRipple>
                    Show More
                </ShowMoreButton>
            </BoxStyle>
        </Container>
    );
}

export default WatchingIntroduction;