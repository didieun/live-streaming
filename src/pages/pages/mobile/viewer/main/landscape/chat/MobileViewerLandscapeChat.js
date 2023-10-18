import React from 'react';
import {
    AlignCenter,
    ChatContents,
    ChatHeader,
    Container,
    TitleText,
    ChatBox,
    ChatBoxIn,
    TextStyle,
    Chat,
    AvatarBox,
    UserName,
    ChatText,
    MyName,
    CameraBox,
    SearchBox, SendButton, GiftButton, GiftButtonBox, GiftButtonBoxIn, GiftText
} from "./styles/MobileViewerLandscapeChatStyle";
import {ReactComponent as ProfileUserIcon} from "../../../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as VideoOnIcon} from "../../../../../common/images/VideoOnIcon.svg";
import {ReactComponent as ChatSendIcon} from "../../../../../common/images/ChatSendIcon.svg";
import {ReactComponent as GiftIcon} from "../../../../../common/images/GiftIcon.svg";
import TestProfileImage from "../../../../../common/images/TestProfileImage.jpeg";
import {OutlinedInput} from "@mui/material";

function MobileViewerLandscapeChat(props) {
    const {handleClickGiveAPointGiftOpen} = props;

    return (
        <Container>
            <ChatHeader>
                <TitleText>Live Chat</TitleText>
            </ChatHeader>

            <ChatContents>
                <ChatBoxIn>
                    <TextStyle>Welcome to the chat room!</TextStyle>

                    <Chat>
                        <AlignCenter>
                            <CameraBox>
                                <VideoOnIcon/>
                            </CameraBox>
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
                            <GiftText>
                                +500
                            </GiftText>
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
            </ChatContents>
        </Container>
    );
}

export default MobileViewerLandscapeChat;