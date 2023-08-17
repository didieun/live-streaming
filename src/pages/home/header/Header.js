import React from "react";
import {Box, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import { ReactComponent as Hamburger } from "../../common/images/Hamburger.svg";
import { ReactComponent as SearchIcon } from "../../common/images/SearchIcon.svg";
import { ReactComponent as HeaderCoinIcon } from "../../common/images/HeaderCoinIcon.svg";
import { ReactComponent as BellIcon } from "../../common/images/BellIcon.svg";
import { ReactComponent as NewBadgeBellIcon } from "../../common/images/NewBadgeBellIcon.svg";
import { ReactComponent as HelpIcon } from "../../common/images/HelpIcon.svg";
import { ReactComponent as ProfileUserIcon } from "../../common/images/ProfileUserIcon.svg";
import { ReactComponent as ArrowDownIcon } from "../../common/images/ArrowDownIcon.svg";
import TestProfileImage from "../../common/images/TestProfileImage.jpeg";
import ProfileMenu from "./ProfileMenu";
import {
  Container,
  ButtonIcon,
  LogoBox,
  SearchBox,
  ButtonMargin,
  AvatarBox,
  LogInButton,
  SignUpButton, HamburgerButton, HelpButtonIcon,
} from "./styles/HeaderStyle";

function Header(props) {
    const { toggleSideBarOpen, login, handleClickLogIn, handleClickNotificationsOpen } = props;
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
      {/* my studio 일때 width: 224 */}
      {/*<Box display="flex" alignItems="center" style={{width: 224}}>*/}
      <Box display="flex" alignItems="center">
        <HamburgerButton onClick={toggleSideBarOpen} disableRipple>
          <Hamburger />
        </HamburgerButton>
        <LogoBox>
            {/* my studio 일때 */}
            {/*<Typography>Logo Studio</Typography>*/}
            <Typography>Logo Area</Typography>
        </LogoBox>
      </Box>

      <SearchBox variant="outlined">
        <OutlinedInput
            placeholder="Search for channels"
            endAdornment={
              <InputAdornment position="end">
                  <ButtonIcon disableRipple>
                    <SearchIcon />
                  </ButtonIcon>
              </InputAdornment>
            }
        />
      </SearchBox>

      {login ? (
        <Box display="flex" alignItems="center">
          <ButtonIcon disableRipple>
            <HeaderCoinIcon />
          </ButtonIcon>


          {/* my studio 일때  추가*/}
          {/*<HelpButtonIcon disableRipple>*/}
          {/*  <HelpIcon />*/}
          {/*</HelpButtonIcon>*/}

          <ButtonMargin onClick={handleClickNotificationsOpen} disableRipple>
            {/*<BellIcon />*/}

            {/* 새로운 공지 있을 경우 아래 아이콘 으로 */}
            <NewBadgeBellIcon />
          </ButtonMargin>
          <ButtonIcon onClick={handleClickProfileMenuOpen} disableRipple>
            <AvatarBox>
              <img src={TestProfileImage} alt='image'/>

              {/* 프로필 없을경우 */}
              {/*<ProfileUserIcon />*/}
            </AvatarBox>
            <ArrowDownIcon />
          </ButtonIcon>

          <ProfileMenu
            open={profileOpen}
            anchorEl={profileAnchorEl}
            onClose={handleCloseProfileMenu}
          />
        </Box>
      ) : (
        <Box display="flex" alignItems="center">
          <LogInButton onClick={() => handleClickLogIn('login')} disableRipple>Log in</LogInButton>
          <SignUpButton disableRipple>Sign Up</SignUpButton>
        </Box>
      )}
    </Container>
  );
}

export default Header;

