import React from 'react';
import {
    Container,
    ContentsBox,
    TitleText,
    Top,
    TextStyle,
    FlexRow, ChatBox, SendButton, StyledTextarea, AvatarBox, ChatRightBox, ChatText, MyName, UserName, ChatShow
} from "./styles/ChatStyle";
import {ReactComponent as ChatIcon} from "../../../../common/images/ChatIcon.svg";
import {ReactComponent as ChatSendIcon} from "../../../../common/images/ChatSendIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../common/images/ProfileUserIcon.svg";
import TestProfileImage from "../../../../common/images/TestProfileImage.jpeg";

function Chat(props) {
    const [empty, setEmpty] = React.useState(true);

    return (
        <Container>
            <Top>
                <ChatIcon/>
                <TitleText>
                    My Chat
                </TitleText>
            </Top>

            <ContentsBox>
                {empty ?
                    <div>
                        <ChatShow>
                            <AvatarBox>
                                <img src={TestProfileImage} alt='image'/>

                                {/* 프로필 없을경우 */}
                                {/*<ProfileUserIcon />*/}
                            </AvatarBox>

                            <ChatRightBox>
                                <UserName>allergy46 :</UserName>
                                <ChatText>
                                    the center is the best position for a long-distance carry-gilder! He's not interested, so he's easy to scout...
                                </ChatText>
                            </ChatRightBox>
                        </ChatShow>

                        {/* 나일 경우 */}
                        <ChatShow>
                            <AvatarBox>
                                {/*<img src={TestProfileImage} alt='image'/>*/}

                                {/* 프로필 없을경우 */}
                                <ProfileUserIcon />
                            </AvatarBox>

                            <ChatRightBox>
                                <MyName>glorywiggle9754 :</MyName>
                                <ChatText>
                                    The beginning is very good~~
                                </ChatText>
                            </ChatRightBox>
                        </ChatShow>
                    </div>
                    :
                    <FlexRow>
                        <TextStyle>
                            Welcome to the chat room!
                        </TextStyle>
                    </FlexRow>
                }
            </ContentsBox>

            <ChatBox>
                <StyledTextarea
                    minRows={3}
                    maxRows={3}
                    placeholder="Send a message"
                />

                <SendButton disableRipple>
                    <ChatSendIcon/>
                </SendButton>
            </ChatBox>
        </Container>
    );
}

export default Chat;