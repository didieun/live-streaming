import React, {Component} from 'react';
import {
    AlignCenter,
    AvatarBox,
    InfoBox,
    Line,
    LinkStyle,
    ListIcon,
    ListIconSize,
    ListText,
    PopoverBox
} from "./styles/ProfileMenuStyle";
import {List, ListItem, ListItemButton, Typography} from "@mui/material";
import {ReactComponent as MenuStudioIcon} from "../../common/images/MenuStudioIcon.svg";
import {ReactComponent as EarnIcon} from "../../common/images/EarnIcon.svg";
import {ReactComponent as SettingsIcon} from "../../common/images/SettingsIcon.svg";
import {ReactComponent as LogOutIcon} from "../../common/images/LogOutIcon.svg";
import {ReactComponent as LoginIcon} from "../../common/images/LoginIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../common/images/ProfileUserIcon.svg";
import {ReactComponent as SignalIcon} from "../../common/images/SignalIcon.svg";
import {ReactComponent as AimmIcon} from "../../common/images/AimmIcon.svg";
import {ReactComponent as HelpIcon} from "../../common/images/HelpIcon.svg";
import TestProfileImage from "../../common/images/TestProfileImage.jpeg";

class ProfileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { onClose, open, anchorEl, login, handleClickProfile } = this.props;

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
                <InfoBox onClick={handleClickProfile}>
                    <AvatarBox>
                        {login ?
                            <img src={TestProfileImage} alt='image'/>
                            :
                            <ProfileUserIcon />
                        }
                    </AvatarBox>
                    {login ?
                        <Typography>hannah Moore87</Typography>
                        :
                        <AlignCenter>
                            <AimmIcon style={{width: 57, height: 17, marginRight: 7}}/>
                            <Typography>User</Typography>
                        </AlignCenter>

                    }
                </InfoBox>
                <List>
                    <LinkStyle to={'/'} >
                        <ListItem>
                            <ListIconSize><SignalIcon /></ListIconSize>
                            <ListText primary={'My Channel'} />
                        </ListItem>
                    </LinkStyle>

                    <Line/>

                    <LinkStyle to={'/studio'} target="_blank">
                        <ListItem>
                            <ListIconSize><MenuStudioIcon /></ListIconSize>
                            <AlignCenter>
                                <AimmIcon style={{marginRight: 5}}/>
                                <ListText primary={'Studio'} />
                            </AlignCenter>

                        </ListItem>
                    </LinkStyle>

                    <Line/>

                    {login &&
                        <ListItem>
                            <ListIcon><EarnIcon/></ListIcon>
                            <ListText primary={'Earn & Purchases'} />
                        </ListItem>
                    }

                    {login &&
                        <Line/>
                    }

                    {login &&
                        <ListItem>
                            <ListIcon><SettingsIcon/></ListIcon>
                            <ListText primary={'Channel Manager'} />
                        </ListItem>
                    }

                    {login &&
                        <Line/>
                    }

                    <LinkStyle to={'/help'} >
                        <ListItem>
                            <ListIcon><HelpIcon style={{width: 22, height: 22}}/></ListIcon>
                            <ListText primary={'Help Center'} />
                        </ListItem>
                    </LinkStyle>

                    <Line/>

                    {login ?
                        <ListItem>
                            <ListIcon><LogOutIcon/></ListIcon>
                            <ListText primary={'Log Out'} />
                        </ListItem>
                        :
                        <ListItem>
                            <ListIcon><LoginIcon/></ListIcon>
                            <ListText primary={'Log In'} />
                        </ListItem>
                    }
                </List>
            </PopoverBox>
        );
    }
}

export default ProfileMenu;