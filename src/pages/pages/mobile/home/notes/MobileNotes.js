import React from 'react';
import {
    NotesBox,
    NotesBoxIn,
    AvatarBox,
    ChatRightBox,
    UserName,
    ChatShow,
    FlexRow,
    ChatDateText,
    EmptyText,
    ChatTextBox,
    AlignEnd,
    ChatShowRight,
    ChatDateTextRight,
    ChatTextBoxRight,
    ChatShowBox,
    TitleDateText,
    OutlinedInputBox,
} from './styles/MobileNotesStyle'
import {ReactComponent as ProfileUserIcon} from "../../../common/images/ProfileUserIcon.svg";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import {Typography} from "@mui/material";

function MobileNotes(props) {
    const {width, placeholder} = props;
    const [chatEmpty, setChatEmpty] = React.useState(true);

    return (
        <NotesBox width={width}>
            <NotesBoxIn>
                {chatEmpty ?
                    <div>
                        <ChatShowBox>
                            <TitleDateText>
                                2023. 06. 09
                            </TitleDateText>
                            <ChatShow>
                                <AvatarBox>
                                    <img src={TestProfileImage} alt='image'/>

                                    {/* 프로필 없을 경우 */}
                                    {/*<ProfileUserIcon />*/}
                                </AvatarBox>

                                <ChatRightBox>
                                    <UserName>allergy46 :</UserName>

                                    <AlignEnd>
                                        <ChatTextBox>
                                            <Typography>
                                                the center is the best position for a long-distance carry-gilder! He's not interested, so he's easy to scout...
                                            </Typography>
                                        </ChatTextBox>
                                        <ChatDateText>PM 10:10</ChatDateText>
                                    </AlignEnd>
                                </ChatRightBox>
                            </ChatShow>

                            <ChatShowRight>
                                <AlignEnd>
                                    <ChatDateTextRight>PM 10:10</ChatDateTextRight>
                                    <ChatTextBoxRight>
                                        <Typography>
                                            The beginning is very good~~
                                        </Typography>
                                    </ChatTextBoxRight>
                                </AlignEnd>
                            </ChatShowRight>
                        </ChatShowBox>

                        <ChatShowBox>
                            <TitleDateText>
                                2023. 06. 14
                            </TitleDateText>
                            <ChatShow>
                                <AvatarBox>
                                    {/*<img src={TestProfileImage} alt='image'/>*/}

                                    {/* 프로필 없을 경우 */}
                                    <ProfileUserIcon />
                                </AvatarBox>

                                <ChatRightBox>
                                    <UserName>allergy46 :</UserName>

                                    <AlignEnd>
                                        <ChatTextBox>
                                            <Typography>
                                                the center is the best position for a long-distance carry-gilder! He's not interested, so he's easy to scout...
                                            </Typography>
                                        </ChatTextBox>
                                        <ChatDateText>PM 10:10</ChatDateText>
                                    </AlignEnd>
                                </ChatRightBox>
                            </ChatShow>

                            <ChatShowRight>
                                <AlignEnd>
                                    <ChatDateTextRight>PM 10:10</ChatDateTextRight>
                                    <ChatTextBoxRight>
                                        <Typography>
                                            The beginning is very good~~
                                        </Typography>
                                    </ChatTextBoxRight>
                                </AlignEnd>
                            </ChatShowRight>
                        </ChatShowBox>

                    </div>

                    :
                    <FlexRow>
                        <EmptyText>
                            You’ll see what you’ve sent and received from your operator.
                        </EmptyText>
                    </FlexRow>
                }
            </NotesBoxIn>

            <OutlinedInputBox
                placeholder={placeholder}
            />
        </NotesBox>
    );
}

export default MobileNotes;