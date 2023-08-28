import React from 'react';
import {
    AvatarBox,
    InfoBox,
    Line,
    LinkStyle,
    ListIcon,
    ListIconSize,
    ListText,
    PopoverBox
} from "./styles/WatchingProfileMenuStyle";
import {List, ListItem, Typography} from "@mui/material";
import {ReactComponent as MenuStudioIcon} from "../../../common/images/MenuStudioIcon.svg";
import {ReactComponent as EarnIcon} from "../../../common/images/EarnIcon.svg";
import {ReactComponent as SettingsIcon} from "../../../common/images/SettingsIcon.svg";
import {ReactComponent as LogOutIcon} from "../../../common/images/LogOutIcon.svg";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";

function WatchingProfileMenu(props) {
    const { onClose, open, anchorEl } = props;

    return (
        <PopoverBox
            id="simple-popper"
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <InfoBox>
                <AvatarBox>
                    <img src={TestProfileImage} alt='image'/>

                    {/* 프로필 없을경우 */}
                    {/*<ProfileUserIcon />*/}
                </AvatarBox>
                <Typography>hannah Moore87</Typography>
            </InfoBox>
            <List>
                <LinkStyle to={'/studio'} target="_blank">
                    <ListItem>
                        <ListIconSize><MenuStudioIcon /></ListIconSize>
                        <ListText primary={'My Studio'} />
                    </ListItem>
                </LinkStyle>

                <Line/>

                <ListItem>
                    <ListIcon><EarnIcon/></ListIcon>
                    <ListText primary={'Earn & Purchases'} />
                </ListItem>

                <Line/>

                <ListItem>
                    <ListIcon><SettingsIcon/></ListIcon>
                    <ListText primary={'Settings'} />
                </ListItem>

                <Line/>

                <ListItem>
                    <ListIcon><LogOutIcon/></ListIcon>
                    <ListText primary={'Log Out'} />
                </ListItem>
            </List>
        </PopoverBox>
    );
}

export default WatchingProfileMenu;