import React from "react";
import {
    AlignCenter,
    Container, ContainerIn, LogoBox, AvatarBox, ButtonIcon, TopicsText, PopoverBox, Line, ListText
} from "./styles/HelpHeaderStyle";
import ProfileMenu from "../../home/header/ProfileMenu";
import AimmLogo from "../../common/images/AimmLogo.svg";
import TestProfileImage from "../../common/images/TestProfileImage.jpeg";
import { ReactComponent as ArrowDownIcon } from "../../common/images/ArrowDownIcon.svg";
import { ReactComponent as ProfileUserIcon } from "../../common/images/ProfileUserIcon.svg";
import {ListItem, List, Typography} from "@mui/material";

function HelpHeader(props) {
    const [login, setLogin] = React.useState(true);
    const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
    const [topicsAnchorEl, setTopicsAnchorEl] = React.useState(null);
    const profileOpen = Boolean(profileAnchorEl);
    const topicsOpen = Boolean(topicsAnchorEl);

    const handleClickProfileMenuOpen = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleCloseProfileMenu = () => {
        setProfileAnchorEl(null);
    };

    const handleClickTopicsOpen = (event) => {
        setTopicsAnchorEl(event.currentTarget);
    };

    const handleCloseTopics = () => {
        setTopicsAnchorEl(null);
    };

    return (
    <Container>
        <ContainerIn>
            <AlignCenter>
                <LogoBox>
                    <img src={AimmLogo} alt='aimm logo'/>
                    <Typography>Help</Typography>
                </LogoBox>

                <ButtonIcon onClick={handleClickTopicsOpen} disableRipple>
                    <TopicsText>Topics</TopicsText>
                    <ArrowDownIcon />
                </ButtonIcon>

                <PopoverBox
                    id="simple-popper"
                    open={topicsOpen}
                    anchorEl={topicsAnchorEl}
                    onClose={handleCloseTopics}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                >
                    <List>
                        <ListItem>
                            <ListText primary={'Account'} />
                        </ListItem>
                        <Line/>
                        <ListItem>
                            <ListText primary={'Broadcasting'} />
                        </ListItem>
                        <Line/>
                        <ListItem>
                            <ListText primary={'Channel'} />
                        </ListItem>
                        <Line/>
                        <ListItem>
                            <ListText primary={'Point'} />
                        </ListItem>
                        <Line/>
                        <ListItem>
                            <ListText primary={'Channel Owner'} />
                        </ListItem>
                        <Line/>
                        <ListItem>
                            <ListText primary={'Streamer'} />
                        </ListItem>
                        <Line/>
                        <ListItem>
                            <ListText primary={'Troubleshooting'} />
                        </ListItem>
                    </List>
                </PopoverBox>

            </AlignCenter>

            <ButtonIcon onClick={handleClickProfileMenuOpen} disableRipple>
                <AvatarBox>
                    {login ?
                        <img src={TestProfileImage} alt='image'/>
                        :
                        <ProfileUserIcon />
                    }
                </AvatarBox>
                <ArrowDownIcon />
            </ButtonIcon>

            <ProfileMenu
                open={profileOpen}
                login={login}
                anchorEl={profileAnchorEl}
                onClose={handleCloseProfileMenu}
            />
        </ContainerIn>
    </Container>
  );
}

export default HelpHeader;

