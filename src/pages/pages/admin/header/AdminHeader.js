import React from "react";
import {Box, Typography} from "@mui/material";
import { ReactComponent as Hamburger } from "../../common/images/Hamburger.svg";
import { ReactComponent as ProfileUserIcon } from "../../common/images/ProfileUserIcon.svg";
import { ReactComponent as ArrowDownIcon } from "../../common/images/ArrowDownIcon.svg";
import AimmLogo  from "../../common/images/AimmLogo.svg";
import TestProfileImage from "../../common/images/TestProfileImage.jpeg";
import {
    Container,
    ButtonIcon,
    LogoBox,
    AvatarBox, HamburgerButton, TitleText,
} from "./styles/AdminHeaderStyle";
import AdminProfileMenu from "./AdminProfileMenu";

function AdminHeader(props) {
    const { toggleSideBarOpen } = props;
    const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
    const profileOpen = Boolean(profileAnchorEl);

    const handleClickProfileMenuOpen = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleCloseProfileMenu = () => {
        setProfileAnchorEl(null);
    };

    return (
    <Container>
        <Box display="flex" alignItems="center">
            <HamburgerButton onClick={toggleSideBarOpen} disableRipple>
              <Hamburger />
            </HamburgerButton>

            <LogoBox>
                <img src={AimmLogo} alt='aimm logo'/>
                <Typography>Backoffice</Typography>
            </LogoBox>
        </Box>

        <ButtonIcon onClick={handleClickProfileMenuOpen} disableRipple>
          <AvatarBox>
              <img src={TestProfileImage} alt='image'/>

              {/* 프로필 없을 경우 */}
              {/*<ProfileUserIcon />*/}
          </AvatarBox>
          <ArrowDownIcon />
        </ButtonIcon>
        <AdminProfileMenu
            open={profileOpen}
            anchorEl={profileAnchorEl}
            onClose={handleCloseProfileMenu}
        />
    </Container>
  );
}

export default AdminHeader;

