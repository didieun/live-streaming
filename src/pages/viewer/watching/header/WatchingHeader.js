import React from 'react';
import {
    AlignCenter,
    ChannelImageBox,
    Container,
    ProfileButton,
    TitleText,
    AvatarBox, ArrowButtonIcon, FlexColumn, ButtonStyle, ButtonStyleOn, TextStyle, IconMargin, BellButtonIcon, LogInButton
} from "./styles/WatchingHeaderStyle";
import {ReactComponent as StreamingArrowIcon} from "../../../common/images/StreamingArrowIcon.svg";
import {ReactComponent as StreamingBellIcon} from "../../../common/images/StreamingBellIcon.svg";
import ChannelTestImage from "../../../common/images/ChannelTestImage.png";
import { ReactComponent as ProfileUserIcon } from "../../../common/images/ProfileUserIcon.svg";
import { ReactComponent as HeartIcon } from "../../../common/images/HeartIcon.svg";
import { ReactComponent as FillHeartIcon } from "../../../common/images/FillHeartIcon.svg";
import HeaderCoinIcon from "../../../common/images/HeaderCoinIcon.png";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import WatchingProfileMenu from "./WatchingProfileMenu";
import ChannelInfo from "../../dialog/ChannelInfo";
import ViewerCommonDialog from "../../dialog/ViewerCommonDialog";
import LogInDialog from "../../dialog/LogInDialog";

function WatchingHeader(props) {
    const {handleClickNotificationsOpen, notificationsOpen} = props;
    const [channelInfo, setChannelInfo] = React.useState(false);
    const [loginDialog, setLoginDialog] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);
    const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
    const profileOpen = Boolean(profileAnchorEl);

    const handleClickProfileMenuOpen = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleCloseProfileMenu = () => {
        setProfileAnchorEl(null);
    };

    const handleClickFavorite = () => {
        setFavorite(!favorite);
    };

    const handleClickChannelInfo = () => {
        setChannelInfo(true);
    };

    const handleClickLogin= () => {
        setLoginDialog(true);
    };

    const handleCloseDialog = () => {
        setChannelInfo(false);
        setLoginDialog(false);
    };

    return (
        <Container>
            <AlignCenter>
                <ChannelImageBox>
                    <img src={ChannelTestImage} alt='channel image'/>
                </ChannelImageBox>
                <FlexColumn>
                    {favorite ?
                        <ButtonStyleOn onClick={handleClickFavorite} disableRipple>Favorite</ButtonStyleOn>
                        :
                        <ButtonStyle onClick={handleClickFavorite} disableRipple>Favorite</ButtonStyle>
                    }

                    <AlignCenter>
                        {favorite ?
                            <FillHeartIcon/>
                            :
                            <HeartIcon/>
                        }
                        <TextStyle>14.1M</TextStyle>
                    </AlignCenter>
                </FlexColumn>

            </AlignCenter>

            <AlignCenter>
                <TitleText>
                    NBC Golf ChannelNBC Golf Channel NBC Golf ChannelNBC Golf Channel
                </TitleText>
                <ArrowButtonIcon onClick={handleClickChannelInfo} disableRipple>
                    <StreamingArrowIcon />
                </ArrowButtonIcon>
            </AlignCenter>

            <AlignCenter>
                <IconMargin disableRipple>
                    <img src={HeaderCoinIcon} alt='coin'/>
                </IconMargin>

                <BellButtonIcon onClick={handleClickNotificationsOpen} select={notificationsOpen} disableRipple>
                    <StreamingBellIcon/>
                </BellButtonIcon>

                <ProfileButton onClick={handleClickProfileMenuOpen} disableRipple>
                    <AvatarBox>
                        <img src={TestProfileImage} alt='image'/>

                        {/* 프로필 없을 경우 */}
                        {/*<ProfileUserIcon />*/}
                    </AvatarBox>
                    <StreamingArrowIcon />
                </ProfileButton>

                {/*<LogInButton onClick={handleClickLogin} disableRipple>Log in</LogInButton>*/}

                <WatchingProfileMenu
                    open={profileOpen}
                    anchorEl={profileAnchorEl}
                    onClose={handleCloseProfileMenu}
                />
            </AlignCenter>

            <LogInDialog
                open={loginDialog}
                onClose={handleCloseDialog}
            />

            <ViewerCommonDialog
                open={channelInfo}
                title={'Channel Info'}
                cancelBtn={false}
                onClose={handleCloseDialog}
                onClick={handleCloseDialog}
                children={<ChannelInfo/>}
            />
        </Container>
    );
}

export default WatchingHeader;