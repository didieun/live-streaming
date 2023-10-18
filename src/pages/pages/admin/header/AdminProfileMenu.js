import React from "react";
import {
    AvatarBox,
    InfoBox,
    Line,
    ListIcon,
    ListText,
    PopoverBox
} from "./styles/AdminProfileMenuStyle";
import {List, ListItem, Typography} from "@mui/material";
import {ReactComponent as LogOutIcon} from "../../common/images/LogOutIcon.svg";
import TestProfileImage from "../../common/images/TestProfileImage.jpeg";

function AdminProfileMenu(props) {
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

                    {/* 프로필 없을 경우 */}
                    {/*<ProfileUserIcon />*/}
                </AvatarBox>
                <Typography>hannah Moore87</Typography>
            </InfoBox>
            <List>
                <Line/>
                <ListItem>
                    <ListIcon><LogOutIcon/></ListIcon>
                    <ListText primary={'Log Out'} />
                </ListItem>

            </List>
        </PopoverBox>
    );
}

export default AdminProfileMenu;