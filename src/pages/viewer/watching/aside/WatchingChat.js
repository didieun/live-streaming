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
    ButtonStyle,
    Chat,
    AvatarBox,
    ChatRightBox,
    UserName,
    ChatText,
    MyName,
    JustifySpace,
    CameraBox,
    CoinButton,
    CountBoxIn,
    InputBox,
    PointsBoxText,
    PopoverMoneyText, FlexWrap, MyPointsTitle, MyPointsMoney
} from "./styles/WatchingChatStyle";
import {ReactComponent as AsideCloseArrowIcon} from "../../../common/images/AsideCloseArrowIcon.svg";
import {ReactComponent as ChatIcon} from "../../../common/images/ChatIcon.svg";
import {ReactComponent as ChatSendIcon} from "../../../common/images/ChatSendIcon.svg";
import {ReactComponent as GiftIcon} from "../../../common/images/GiftIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as VideoOnIcon} from "../../../common/images/VideoOnIcon.svg";
import {ReactComponent as MinusIcon} from "../../../common/images/MinusIcon.svg";
import {ReactComponent as PlusIcon} from "../../../common/images/PlusIcon.svg";
import {Typography} from "@mui/material";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import {ArrowTooltipStylePopover, TooltipStyle} from "../styles/WatchingStyle";
import PopoverCoin10 from "../../../common/images/PopoverCoin10.png";
import PopoverCoin30 from "../../../common/images/PopoverCoin30.png";
import PopoverCoin50 from "../../../common/images/PopoverCoin50.png";
import PopoverCoin100 from "../../../common/images/PopoverCoin100.png";
import PopoverCoin500 from "../../../common/images/PopoverCoin500.png";

function WatchingChat(props) {
    const {handleClickChat, open} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [count10, setCount10] = React.useState(0);
    const [count30, setCount30] = React.useState(0);
    const [count50, setCount50] = React.useState(0);
    const [count100, setCount100] = React.useState(0);
    const [count500, setCount500] = React.useState(0);

    const handleClickGiftOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseGift = () => {
        setAnchorEl(null);
    };

    const handleClickPlus10 = () => {
        setCount10(count10 + 1)
    };

    const handleClickPlus30= () => {
        setCount30(count30 + 1)
    };

    const handleClickPlus50 = () => {
        setCount50(count50 + 1)
    };

    const handleClickPlus100 = () => {
        setCount100(count100 + 1)
    };

    const handleClickPlus500 = () => {
        setCount500(count500 + 1)
    };

    const handleClickMinus10 = () => {
        setCount10(count10 - 1)
    };

    const handleClickMinus30 = () => {
        setCount30(count30 - 1)
    };

    const handleClickMinus50 = () => {
        setCount50(count50 - 1)
    };

    const handleClickMinus100 = () => {
        setCount100(count100 - 1)
    };

    const handleClickMinus500 = () => {
        setCount500(count500 - 1)
    };

    const giftOpen = Boolean(anchorEl);
    const id = giftOpen ? 'simple-popover' : undefined;

    const coin10 = (
        <React.Fragment>
            <FlexColumn >
                <img src={PopoverCoin10} alt='coin10'/>
                <PopoverMoneyText>10 P</PopoverMoneyText>

                <PointsBoxText>Quantity</PointsBoxText>

                <CountBoxIn>
                    <ButtonIcon onClick={handleClickMinus10} disabled={count10 <= 0} disableRipple><MinusIcon/></ButtonIcon>
                    <InputBox
                        value={count10}
                    />
                    <ButtonIcon onClick={handleClickPlus10}  disableRipple><PlusIcon/></ButtonIcon>
                </CountBoxIn>
            </FlexColumn>
        </React.Fragment>
    );

    const coin30 = (
        <React.Fragment>
            <FlexColumn >
                <img src={PopoverCoin30} alt='coin10'/>
                <PopoverMoneyText>30 P</PopoverMoneyText>

                <PointsBoxText>Quantity</PointsBoxText>

                <CountBoxIn>
                    <ButtonIcon onClick={handleClickMinus30} disabled={count30 <= 0} disableRipple><MinusIcon/></ButtonIcon>
                    <InputBox
                        value={count30}
                    />
                    <ButtonIcon onClick={handleClickPlus30} disableRipple><PlusIcon/></ButtonIcon>
                </CountBoxIn>
            </FlexColumn>
        </React.Fragment>
    );

    const coin50 = (
        <React.Fragment>
            <FlexColumn >
                <img src={PopoverCoin50} alt='coin10'/>
                <PopoverMoneyText>50 P</PopoverMoneyText>

                <PointsBoxText>Quantity</PointsBoxText>

                <CountBoxIn>
                    <ButtonIcon onClick={handleClickMinus50} disabled={count50 <= 0} disableRipple><MinusIcon/></ButtonIcon>
                    <InputBox
                        value={count50}
                    />
                    <ButtonIcon onClick={handleClickPlus50} disableRipple><PlusIcon/></ButtonIcon>
                </CountBoxIn>
            </FlexColumn>
        </React.Fragment>
    );

    const coin100 = (
        <React.Fragment>
            <FlexColumn >
                <img src={PopoverCoin100} alt='coin10'/>
                <PopoverMoneyText>100 P</PopoverMoneyText>

                <PointsBoxText>Quantity</PointsBoxText>

                <CountBoxIn>
                    <ButtonIcon onClick={handleClickMinus100} disabled={count100 <= 0} disableRipple><MinusIcon/></ButtonIcon>
                    <InputBox
                        value={count100}
                    />
                    <ButtonIcon onClick={handleClickPlus100} disableRipple><PlusIcon/></ButtonIcon>
                </CountBoxIn>
            </FlexColumn>
        </React.Fragment>
    );

    const coin500 = (
        <React.Fragment>
            <FlexColumn >
                <img src={PopoverCoin500} alt='coin10'/>
                <PopoverMoneyText>500 P</PopoverMoneyText>

                <PointsBoxText>Quantity</PointsBoxText>

                <CountBoxIn>
                    <ButtonIcon onClick={handleClickMinus500} disabled={count500 <= 0} disableRipple><MinusIcon/></ButtonIcon>
                    <InputBox
                        value={count500}
                    />
                    <ButtonIcon onClick={handleClickPlus500} disableRipple><PlusIcon/></ButtonIcon>
                </CountBoxIn>
            </FlexColumn>
        </React.Fragment>
    );

    return (
        <Container open={open}>
            <ChatHeader>
                <TooltipStyle
                    title="Collapse"
                    placement="bottom"
                >
                    <ButtonIcon onClick={handleClickChat} disableRipple><AsideCloseArrowIcon/></ButtonIcon>
                </TooltipStyle>
                <AlignCenter>
                    <ChatIcon/>
                    <TitleText>Live Chat</TitleText>
                </AlignCenter>
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
                        </AlignCenter>
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


                </ChatBoxIn>
                <ChatBox>
                    <StyledTextarea
                        minRows={1}
                        maxRows={3}
                        placeholder="Send a message"
                    />

                    <JustifySpace>
                        <GiftButton aria-describedby={id} onClick={handleClickGiftOpen} disableRipple>
                            <GiftIcon/>
                        </GiftButton>
                        <SendButton disableRipple>
                            <ChatSendIcon/>
                        </SendButton>
                    </JustifySpace>
                </ChatBox>

                <PopoverBox
                    id={id}
                    open={giftOpen}
                    anchorEl={anchorEl}
                    onClose={handleCloseGift}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <PopoverHeader>
                        <Typography>Give a point gift</Typography>
                        <ButtonIcon onClick={handleCloseGift} disableRipple>
                            <SettingDialogCloseIcon/>
                        </ButtonIcon>
                    </PopoverHeader>

                    <PopoverContents>
                        <FlexWrap>
                            <ArrowTooltipStylePopover
                                title={<div>{coin10}</div>}
                                placement="left-start"
                            >
                                <CoinButton>
                                    <img src={PopoverCoin10} alt='coin10'/>
                                    <PopoverMoneyText>10 P</PopoverMoneyText>
                                </CoinButton>
                            </ArrowTooltipStylePopover>

                            <ArrowTooltipStylePopover
                                title={<div>{coin30}</div>}
                                placement="left-start"
                            >
                                <CoinButton>
                                    <img src={PopoverCoin30} alt='coin10'/>
                                    <PopoverMoneyText>30 P</PopoverMoneyText>
                                </CoinButton>
                            </ArrowTooltipStylePopover>
                            <ArrowTooltipStylePopover
                                title={<div>{coin50}</div>}
                                placement="left-start"
                            >
                                <CoinButton>
                                    <img src={PopoverCoin50} alt='coin10'/>
                                    <PopoverMoneyText>50 P</PopoverMoneyText>
                                </CoinButton>
                            </ArrowTooltipStylePopover>
                            <ArrowTooltipStylePopover
                                title={<div>{coin100}</div>}
                                placement="left-start"
                            >
                                <CoinButton>
                                    <img src={PopoverCoin100} alt='coin10'/>
                                    <PopoverMoneyText>100 P</PopoverMoneyText>
                                </CoinButton>
                            </ArrowTooltipStylePopover>
                            <ArrowTooltipStylePopover
                                title={<div>{coin500}</div>}
                                placement="left-start"
                            >
                                <CoinButton>
                                    <img src={PopoverCoin500} alt='coin10'/>
                                    <PopoverMoneyText>500 P</PopoverMoneyText>
                                </CoinButton>
                            </ArrowTooltipStylePopover>
                        </FlexWrap>

                        <MyPointsTitle>
                            My Points
                        </MyPointsTitle>
                        <MyPointsMoney>
                            <span>10,000</span> P
                        </MyPointsMoney>

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