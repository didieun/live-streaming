import React from 'react';
import {
    Container,
    AvatarBox,
    UserName,
    Flex,
    BoxStyle,
    TextStyle,
    ShowMoreButton,
    TagBox, TagBoxIn, TitleText, MarginBottom
} from "./styles/WatchingIntroductionStyle";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import { ReactComponent as ProfileUserIcon } from "../../../common/images/ProfileUserIcon.svg";
import {Typography} from "@mui/material";

function WatchingIntroduction({open, offline}) {
    const tagList =
        [
            {tag: 'tag1'},
            {tag: 'tag2'},
            {tag: 'tag3'},
        ]

    return (
        <Container open={open}>
            <MarginBottom>
                <TagBox>
                    {tagList.map((tag, i) => (
                        <TagBoxIn key={i}>
                            <Typography>#{tag.tag}</Typography>
                        </TagBoxIn>
                    ))}
                </TagBox>
                {!offline &&
                    <TitleText>
                        OF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI
                    </TitleText>
                }
            </MarginBottom>

            {!offline &&
                <Flex>
                    <AvatarBox>
                        {/*<img src={TestProfileImage} alt='image'/>*/}

                        {/* 프로필 없을경우 */}
                        <ProfileUserIcon />
                    </AvatarBox>

                    <UserName>kingaaa</UserName>
                </Flex>
            }
            {!offline &&
                <BoxStyle>
                    <TextStyle>
                        Hey Everyone 😇 Welcome To My Chennel<br/>
                        Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream And Videos 🥰
                    </TextStyle>

                    <ShowMoreButton disableRipple>
                        Show More
                    </ShowMoreButton>
                </BoxStyle>
            }
        </Container>
    );
}

export default WatchingIntroduction;