import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    ChatContents,
    ChatHeader,
    Container,
    TitleText,
    ChatBox,
    SendButton,
    StyledTextarea,
    ChatBoxIn,
    TextStyle,
    GiftButton,
    PopoverBox,
    PopoverHeader,
    PopoverContents,
    FlexColumn,
    PointBox,
    PointText,
    MyPointsBox, JustifyRight, ButtonStyle, Chat, AvatarBox, ChatRightBox, UserName, ChatText, MyName, JustifySpace
} from "./styles/WatchingChatStyle";
import {ReactComponent as AsideCloseArrowIcon} from "../../../common/images/AsideCloseArrowIcon.svg";
import {ReactComponent as ChatIcon} from "../../../common/images/ChatIcon.svg";
import {ReactComponent as ChatSendIcon} from "../../../common/images/ChatSendIcon.svg";
import {ReactComponent as GiftIcon} from "../../../common/images/GiftIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../common/images/ProfileUserIcon.svg";
import {Typography} from "@mui/material";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";

function WatchingChat({handleClickChat, open}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickGiftOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseGift = () => {
        setAnchorEl(null);
    };

    const giftOpen = Boolean(anchorEl);
    const id = giftOpen ? 'simple-popover' : undefined;

    return (
        <Container open={open}>
            <ChatHeader>
                <ButtonIcon onClick={handleClickChat} disableRipple><AsideCloseArrowIcon/></ButtonIcon>
                <AlignCenter>
                    <ChatIcon/>
                    <TitleText>Live Chat</TitleText>
                </AlignCenter>
            </ChatHeader>

            <ChatContents>
                <ChatBoxIn>
                    {/* 내용 없을떄*/}
                    {/*<TextStyle>Welcome to the chat room!</TextStyle>*/}

                    <Chat>
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
                    </Chat>

                    {/* 나일 경우 */}
                    <Chat>
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
                    </Chat>

                    <GiftButton aria-describedby={id} onClick={handleClickGiftOpen} disableRipple>
                        <GiftIcon/>
                    </GiftButton>
                </ChatBoxIn>
                <ChatBox>
                    <StyledTextarea
                        minRows={5}
                        maxRows={5}
                        placeholder="Send a message"
                    />

                    <SendButton disableRipple>
                        <ChatSendIcon/>
                    </SendButton>
                </ChatBox>

                <PopoverBox
                    id={id}
                    open={giftOpen}
                    anchorEl={anchorEl}
                    onClose={handleCloseGift}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                    <PopoverHeader>
                        <Typography>Give a point gift</Typography>
                        <ButtonIcon onClick={handleCloseGift} disableRipple>
                            <SettingDialogCloseIcon/>
                        </ButtonIcon>
                    </PopoverHeader>

                    <PopoverContents>
                        <JustifySpace>
                            <FlexColumn>
                                <PointBox/>
                                <PointText>30P</PointText>
                            </FlexColumn>
                            <FlexColumn>
                                <PointBox/>
                                <PointText>60P</PointText>
                            </FlexColumn>
                            <FlexColumn>
                                <PointBox/>
                                <PointText>90P</PointText>
                            </FlexColumn>
                        </JustifySpace>

                        <JustifyRight>
                            <MyPointsBox>
                                <Typography>My Points : <span>100,000P</span></Typography>
                            </MyPointsBox>
                        </JustifyRight>

                        <ButtonStyle disableRipple>
                            <Typography>Send for <span>30P</span></Typography>
                        </ButtonStyle>

                    </PopoverContents>
                </PopoverBox>

            </ChatContents>
        </Container>
    );
}

export default WatchingChat;