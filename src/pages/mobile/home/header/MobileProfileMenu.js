import React from 'react';
import {
    ButtonIcon,
    DrawerBox, MessageBox, TopBox,
} from "./styles/MobileProfileMenuStyle";
import {Typography} from "@mui/material";
import {ReactComponent as MobileCloseIcon} from "../../../common/images/MobileCloseIcon.svg";
import {ReactComponent as AlertTriangleIcon} from "../../../common/images/AlertTriangleIcon.svg";

function MobileProfileMenu(props) {
    const { onClose, open } = props;

    return (
        <DrawerBox
            open={open}
            anchor='bottom'
            onClose={onClose}
        >
            <TopBox>
                <Typography>Notice</Typography>
                <ButtonIcon onClick={onClose} disableRipple>
                     <MobileCloseIcon/>
                </ButtonIcon>
            </TopBox>
            <MessageBox>
                <AlertTriangleIcon/>
                <Typography>
                    This website cannot be used on the<br/>
                    <span>mobile browser</span> you are currently using.<br/>
                    The <span>‘Studio’</span> page is optimized for the Chrome browser for PC.<br/>
                    We recommend accessing from a PC
                    using the Chrome browser.
                </Typography>
            </MessageBox>

        </DrawerBox>
    );
}

export default MobileProfileMenu;