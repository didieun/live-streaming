import React from 'react';
import {
    Container, TopBar, ButtonIcon, ContentsBox,
    AlignCenter, ChatBoxIn, TextStyle, CameraBox, ChatBox, SendButton, GiftButton,
    AvatarBox, Chat,
    ChatRightBox, ChatText, MyName,
    UserName, SearchBox, Flex, GiftButtonBox, GiftText, GiftButtonBoxIn
} from "./styles/MobileViewerChatDrawerStyle";
import {OutlinedInput, Typography} from "@mui/material";
import {ReactComponent as MobileCloseIcon} from "../../../../common/images/MobileCloseIcon.svg";
import {ReactComponent as ChatIcon} from "../../../../common/images/ChatIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as VideoOnIcon} from "../../../../common/images/VideoOnIcon.svg";
import {ReactComponent as ChatSendIcon} from "../../../../common/images/ChatSendIcon.svg";
import {ReactComponent as GiftIcon} from "../../../../common/images/GiftIcon.svg";
import TestProfileImage from "../../../../common/images/TestProfileImage.jpeg";

function MobileViewerChatDrawer(props) {
    const {handleClose, handleClickGiveAPointGiftOpen} = props;

    return (
        <Container >
            <TopBar>
                <AlignCenter>
                    <ChatIcon/>
                    <Typography>Live Chat</Typography>
                </AlignCenter>

                <ButtonIcon onClick={handleClose} disableRipple>
                    <MobileCloseIcon/>
                </ButtonIcon>
            </TopBar>

            <ContentsBox>
                <ChatBoxIn>
                    <TextStyle>Welcome to the chat room!</TextStyle>

                    <Chat>
                        <Flex>
                            <CameraBox>
                                <VideoOnIcon/>
                            </CameraBox>

                            <ChatRightBox>
                                <AlignCenter>
                                    <AvatarBox>
                                        <img src={TestProfileImage} alt='image'/>

                                        {/* 프로필 없을 경우 */}
                                        {/*<ProfileUserIcon />*/}
                                    </AvatarBox>
                                    <UserName>allergy46 :</UserName>
                                </AlignCenter>
                                <ChatText>
                                    the center is the best position for a long-distance carry-gilder! He's not interested, so he's easy to scout...
                                </ChatText>
                            </ChatRightBox>
                        </Flex>
                    </Chat>

                    {/* 나일 경우 */}
                    <Chat>
                        <AlignCenter>
                            <AvatarBox>
                                {/*<img src={TestProfileImage} alt='image'/>*/}

                                {/* 프로필 없을 경우 */}
                                <ProfileUserIcon />
                            </AvatarBox>
                            <MyName>glorywiggle9754 :</MyName>
                        </AlignCenter>

                        <ChatText>
                            The beginning is very good~~
                        </ChatText>
                    </Chat>

                    <GiftButtonBox>
                        <GiftButtonBoxIn>
                            <GiftText>+500</GiftText>
                            <GiftButton onClick={handleClickGiveAPointGiftOpen} disableRipple>
                                <GiftIcon/>
                            </GiftButton>
                        </GiftButtonBoxIn>
                    </GiftButtonBox>

                </ChatBoxIn>
                <ChatBox>
                    <SearchBox variant="outlined">
                        <OutlinedInput
                            placeholder="Send a message"
                        />
                    </SearchBox>

                    <SendButton disableRipple>
                        <ChatSendIcon/>
                    </SendButton>
                </ChatBox>
            </ContentsBox>
        </Container>
    );
}

export default MobileViewerChatDrawer;