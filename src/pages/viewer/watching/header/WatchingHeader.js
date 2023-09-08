import React from 'react';
import {
    AlignCenter,
    ChannelImageBox,
    Container,
    ProfileButton,
    TitleText,
    AvatarBox,
    IconMargin,
    BellButtonIcon,
    LogoText, SearchIconButton, ButtonIcon, SearchBox, CloseButton, LogInButton
} from "./styles/WatchingHeaderStyle";
import {ReactComponent as StreamingArrowIcon} from "../../../common/images/StreamingArrowIcon.svg";
import {ReactComponent as StreamingBellIcon} from "../../../common/images/StreamingBellIcon.svg";
import ChannelTestImage from "../../../common/images/ChannelTestImage.png";
import { ReactComponent as ProfileUserIcon } from "../../../common/images/ProfileUserIcon.svg";
import { ReactComponent as SearchIcon } from "../../../common/images/SearchIcon.svg";
import { ReactComponent as CloseIcon } from "../../../common/images/CloseIcon.svg";
import HeaderCoinIcon from "../../../common/images/HeaderCoinIcon.png";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import WatchingProfileMenu from "./WatchingProfileMenu";
import ChannelInfo from "../../dialog/ChannelInfo";
import ViewerCommonDialog from "../../dialog/ViewerCommonDialog";
import LogInDialog from "../../dialog/LogInDialog";
import {InputAdornment, OutlinedInput} from "@mui/material";

function WatchingHeader(props) {
    const {handleClickNotificationsOpen, notificationsOpen, handleClickBuyPointsDialog} = props;
    const [channelInfo, setChannelInfo] = React.useState(false);
    const [search, setSearch] = React.useState(false);
    const [loginDialog, setLoginDialog] = React.useState(false);
    const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
    const profileOpen = Boolean(profileAnchorEl);

    const handleClickProfileMenuOpen = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleCloseProfileMenu = () => {
        setProfileAnchorEl(null);
    };

    const handleClickChannelInfo = () => {
        setChannelInfo(true);
    };

    const handleClickSearch = () => {
        setSearch(true);
    };

    const handleCloseSearch = () => {
        setSearch(false);
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
                <LogoText>Logo</LogoText>
            </AlignCenter>

            <AlignCenter>
                <ChannelImageBox onClick={handleClickChannelInfo}>
                    <img src={ChannelTestImage} alt='channel image'/>
                </ChannelImageBox>
                <TitleText onClick={handleClickChannelInfo}>
                    NBC Golf ChannelNBC Golf Channel NBC Golf ChannelNBC Golf Channel
                </TitleText>
            </AlignCenter>

            <AlignCenter>
                {search ?
                    <AlignCenter>
                        <SearchBox variant="outlined">
                            <OutlinedInput
                            placeholder="Search for channels"
                            endAdornment={
                                <InputAdornment position="end">
                                    <ButtonIcon disableRipple>
                                        <SearchIcon width='18' height='18'/>
                                    </ButtonIcon>
                                </InputAdornment>
                            }
                        />
                        </SearchBox>
                        <CloseButton onClick={handleCloseSearch} disableRipple>
                            <CloseIcon/>
                        </CloseButton>
                    </AlignCenter>
                    :

                    <SearchIconButton onClick={handleClickSearch} disableRipple>
                        <SearchIcon/>
                    </SearchIconButton>
                }


                <IconMargin onClick={handleClickBuyPointsDialog} disableRipple>
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