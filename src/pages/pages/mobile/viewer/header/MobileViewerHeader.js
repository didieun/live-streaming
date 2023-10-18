import React from "react";
import {Box, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import { ReactComponent as HeaderCoinIcon } from "../../../common/images/HeaderCoinIcon.svg";
import { ReactComponent as BellIcon } from "../../../common/images/BellIcon.svg";
import { ReactComponent as NewBadgeBellIcon } from "../../../common/images/NewBadgeBellIcon.svg";
import { ReactComponent as ProfileUserIcon } from "../../../common/images/ProfileUserIcon.svg";
import { ReactComponent as SearchIcon } from "../../../common/images/SearchIcon.svg";
import { ReactComponent as MobileBackIcon } from "../../../common/images/MobileBackIcon.svg";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import {
    Container,
    ButtonIcon,
    LogoBox,
    ButtonMargin,
    AvatarBox,
    LogInButton,
    SignUpButton,
    ButtonIconMarginRight, ContainerSearch,
    SearchBox, TabletSearchBox
} from "./styles/MobileViewerHeaderStyle";
import MobileViewerProfileMenu from "./MobileViewerProfileMenu";
import MobileViewerNotifications from "../notifications/MobileViewerNotifications";
import MobileViewerNotificationsDetail from "../notifications/MobileViewerNotificationsDetail";
import MobileViewerInviteToStream from "../notifications/MobileViewerInviteToStream";
import MobileViewerBuyPoints from "./MobileViewerBuyPoints";
import MobileViewerAlertDialog from "../dialog/MobileViewerAlertDialog";
import WhiteAimmLogo from "../../../common/images/WhiteAimmLogo.svg";

function MobileViewerHeader(props) {
    const [login, setLogin] = React.useState(false);
    const [search, setSearch] = React.useState(false);
    const [profileOpen, setProfileOpen] = React.useState(false);
    const [buyPointsDialogOpen, setBuyPointsDialogOpen] = React.useState(false);

    // 공지
    const [notificationsOpen, setNotificationsOpen] = React.useState(false);
    const [noticeDialogOpen, setNoticeDialogOpen] = React.useState(false);
    const [inviteToStreamDialogOpen, setInviteToStreamDialogOpen] = React.useState(false);
    const [alertDialogOpen, setAlertDialogOpen] = React.useState(false);

    const handleClickProfileMenuOpen = () => {
        setProfileOpen(true);
    };

    const handleCloseProfileMenu = () => {
        setProfileOpen(false);
    };

    const handleClickSearch = () => {
        setSearch(true);
    };

    const handleCloseSearch = () => {
        setSearch(false);
    };

    const handleClickNotificationsOpen = () => {
        setNotificationsOpen(!notificationsOpen);
    };

    const handleCloseNotifications = () => {
        setNotificationsOpen(false);
    };

    const handleClickNoticeDialog = (event) => {
        event.stopPropagation();
        setNoticeDialogOpen(true);
    };

    const handleClickInviteToStreamDialogOpen = () => {
        setInviteToStreamDialogOpen(true);
    };

    const handleClickAlertDialogOpen = () => {
        setAlertDialogOpen(true);
    };

    const handleClickBuyPointsDialogOpen = () => {
        setBuyPointsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setNoticeDialogOpen(false);
        setInviteToStreamDialogOpen(false);
        setAlertDialogOpen(false);
        setBuyPointsDialogOpen(false);
    };

    return (
        <div>
            {search ?
                <ContainerSearch>
                    <ButtonIcon onClick={handleCloseSearch} disableRipple>
                        <MobileBackIcon width='18' height='18' />
                    </ButtonIcon>

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
                </ContainerSearch>
                :
                <Container>
                    <Box display="flex" alignItems="center">
                        <LogoBox>
                            <img src={WhiteAimmLogo} alt='aimm logo' style={{width: 100}} />
                        </LogoBox>
                    </Box>

                    <TabletSearchBox variant="outlined">
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
                    </TabletSearchBox>

                    {!login ? (
                        <Box display="flex" alignItems="center">
                            <ButtonIconMarginRight onClick={handleClickSearch} disableRipple>
                                <SearchIcon width='24' height='24'/>
                            </ButtonIconMarginRight>

                            <ButtonIcon onClick={handleClickBuyPointsDialogOpen} disableRipple>
                                <HeaderCoinIcon width='28' height='28' />
                            </ButtonIcon>

                            <ButtonMargin onClick={handleClickNotificationsOpen} disableRipple>
                                <BellIcon width='24' height='24'/>

                                {/* 새로운 공지 있을 경우 아래 아이콘 으로 */}
                                {/*<NewBadgeBellIcon width='24' height='24'/>*/}
                            </ButtonMargin>
                            <ButtonIcon onClick={handleClickProfileMenuOpen} disableRipple>
                                <AvatarBox>
                                    {/*<img src={TestProfileImage} alt='image'/>*/}

                                    {/* 프로필 없을 경우 */}
                                    <ProfileUserIcon width='17' height='17' />
                                </AvatarBox>
                            </ButtonIcon>
                            <MobileViewerProfileMenu
                                open={profileOpen}
                                onClose={handleCloseProfileMenu}
                            />
                        </Box>
                    ) : (
                        <Box display="flex" alignItems="center">
                            <LogInButton disableRipple>Log in</LogInButton>
                            <SignUpButton disableRipple>Sign Up</SignUpButton>
                        </Box>
                    )}
                </Container>
            }

            <MobileViewerNotifications
                notificationsOpen={notificationsOpen}
                handleCloseNotifications={handleCloseNotifications}
                handleClickNoticeDialog={handleClickNoticeDialog}
                handleClickInviteToStreamDialogOpen={handleClickInviteToStreamDialogOpen}
            />

            <MobileViewerNotificationsDetail
                open={noticeDialogOpen}
                handleClose={handleCloseDialog}
            />
            <MobileViewerInviteToStream
                open={inviteToStreamDialogOpen}
                handleClose={handleCloseDialog}
                handleClickAlertDialogOpen={handleClickAlertDialogOpen}
            />
            <MobileViewerBuyPoints
                open={buyPointsDialogOpen}
                handleClose={handleCloseDialog}
            />
            <MobileViewerAlertDialog
                open={alertDialogOpen}
                onClose={handleCloseDialog}
                actionCancel={true}
                title={''}
                children={
                    <Typography>Would you like to accept the<br/> invitation?</Typography>
                }
            />
        </div>

  );
}

export default MobileViewerHeader;

