import React from 'react';
import {
    NotesBox,
    NotesMessageBox,
    SendButton,
    StyledTextarea,
    NotesBoxIn,
    AvatarBox,
    ChatRightBox,
    UserName,
    MyName,
    ChatText,
    ChatShow,
    FlexRow,
    ChatDateText,
    EmptyText,
} from './styles/DialogChatStyle'
import {ReactComponent as ChatSendIcon} from "../../../common/images/ChatSendIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../common/images/ProfileUserIcon.svg";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";

function DialogChat(props) {
    const {width, placeholder} = props;
    const [chatEmpty, setChatEmpty] = React.useState(false);

    return (
        <NotesBox width={width}>
            <NotesBoxIn>
                {chatEmpty ?
                    <div>
                        <ChatShow>
                            <AvatarBox>
                                <img src={TestProfileImage} alt='image'/>

                                {/* 프로필 없을 경우 */}
                                {/*<ProfileUserIcon />*/}
                            </AvatarBox>

                            <ChatRightBox>
                                <UserName>allergy46 :</UserName>
                                <ChatText>
                                    the center is the best position for a long-distance carry-gilder! He's not interested, so he's easy to scout...
                                </ChatText>
                                <ChatDateText>2023. 06. 09 10:10</ChatDateText>
                            </ChatRightBox>
                        </ChatShow>

                        {/* 나일 경우 */}
                        <ChatShow>
                            <AvatarBox>
                                {/*<img src={TestProfileImage} alt='image'/>*/}

                                {/* 프로필 없을 경우 */}
                                <ProfileUserIcon />
                            </AvatarBox>

                            <ChatRightBox>
                                <MyName>glorywiggle9754 :</MyName>
                                <ChatText>
                                    The beginning is very good~~
                                </ChatText>
                                <ChatDateText>2023. 06. 09 10:10 <span>read</span></ChatDateText>
                            </ChatRightBox>
                        </ChatShow>
                    </div>
                    :
                    <FlexRow>
                        <EmptyText>
                            You’ll see what you’ve sent and received from your operator.
                        </EmptyText>
                    </FlexRow>
                }
            </NotesBoxIn>

            <NotesMessageBox>
                <StyledTextarea
                    minRows={4}
                    maxRows={4}
                    placeholder={placeholder}
                />

                <SendButton disableRipple>
                    <ChatSendIcon/>
                </SendButton>
            </NotesMessageBox>
        </NotesBox>
    );
}

export default DialogChat;