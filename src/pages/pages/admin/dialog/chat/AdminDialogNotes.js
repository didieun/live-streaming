import React from 'react';
import {
    NotesBox,
    StyledTextarea,
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
    AlignCenter, ReadText, TextAreaBox, TooltipBox,
} from './styles/AdminDialogNotesStyle'
import {ReactComponent as ProfileUserIcon} from "../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../common/images/SettingDialogCloseIcon.svg";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import {Typography} from "@mui/material";
import {ButtonIcon} from "../../../home/dialog/styles/HomeCommonDialogStyle";

function AdminDialogNotes(props) {
    const {width, placeholder, tooltipMessage} = props;
    const [chatEmpty, setChatEmpty] = React.useState(true);
    const [tooltip, setTooltip] = React.useState(true);

    const handleCloseTooltip = () => {
        setTooltip(false);
    };

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
                                                I would like to purchase a 1-month channel for $2300. Where can I transfer money?
                                            </Typography>
                                        </ChatTextBox>
                                        <AlignCenter>
                                            <ChatDateText>PM 10:10</ChatDateText>
                                            <ReadText>read</ReadText>
                                        </AlignCenter>
                                    </AlignEnd>
                                </ChatRightBox>
                            </ChatShow>

                            <ChatShowRight>
                                <AlignEnd>
                                    <AlignCenter>
                                        <ReadText>read</ReadText>
                                        <ChatDateTextRight>PM 10:10</ChatDateTextRight>
                                    </AlignCenter>

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
                                                I would like to purchase a 1-month channel for $2300. Where can I transfer money?
                                            </Typography>
                                        </ChatTextBox>
                                        <AlignCenter>
                                            <ChatDateText>PM 10:10</ChatDateText>
                                            <ReadText>read</ReadText>
                                        </AlignCenter>
                                    </AlignEnd>
                                </ChatRightBox>
                            </ChatShow>

                            <ChatShowRight>
                                <AlignEnd>
                                    <AlignCenter>
                                        <ReadText>read</ReadText>
                                        <ChatDateTextRight>PM 10:10</ChatDateTextRight>
                                    </AlignCenter>
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

            <TextAreaBox>
                {tooltip &&
                    <TooltipBox>
                        <div>
                            {tooltipMessage}
                            <ButtonIcon onClick={handleCloseTooltip} disableRipple>
                                <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                            </ButtonIcon>
                        </div>
                    </TooltipBox>
                }

                <StyledTextarea
                    minRows={4}
                    maxRows={4}
                    placeholder={placeholder}
                />
            </TextAreaBox>

        </NotesBox>
    );
}

export default AdminDialogNotes;