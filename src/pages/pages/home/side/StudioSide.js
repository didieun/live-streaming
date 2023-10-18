import React from 'react';
import {
    ListIcon,
    ListText,
    ListItem, Line, ButtonIcon, AlignBox, SubListItem,
} from "./styles/SideStyle";
import {Box, List} from "@mui/material";
import {ReactComponent as DashboardIcon} from "../../common/images/DashboardIcon.svg";
import {ReactComponent as StartStreamIcon} from "../../common/images/StartStreamIcon.svg";
import {ReactComponent as EarnIcon} from "../../common/images/EarnIcon.svg";
import {ReactComponent as MenuArrowIcon} from "../../common/images/MenuArrowIcon.svg";
import {ReactComponent as HeartIcon} from "../../common/images/HeartIcon.svg";
import {ReactComponent as SettingsIcon} from "../../common/images/SettingsIcon.svg";

function StudioSide({open, menu, handleClickMenu, handleClickEarnMenu, earnMenu, handleClickEarnSubMenu, closeSideBarOpen}) {
    return (
        <Box>
            <List>
                <ListItem
                    onClick={() => handleClickMenu('dashboard')}
                    select={menu === 'dashboard'}
                    disableRipple
                >
                    <ListIcon><DashboardIcon/></ListIcon>
                    {open &&
                        <ListText primary={'Dashboard'} />
                    }
                </ListItem>

                <ListItem
                    onClick={() => handleClickMenu('startStream')}
                    select={menu === 'startStream'}
                    disableRipple
                >
                    <ListIcon><StartStreamIcon/></ListIcon>
                    {open &&
                        <ListText primary={'Start Stream'} />
                    }
                </ListItem>

                <Line/>

                <ListItem
                    onClick={open ? handleClickEarnMenu : closeSideBarOpen}
                    disableRipple
                >
                    <ListIcon><EarnIcon/></ListIcon>
                    {open &&
                        <AlignBox>
                            <ListText primary={'Earn & Purchases'} />
                            <ButtonIcon>
                                {earnMenu ?
                                    <MenuArrowIcon/>
                                    :
                                    <MenuArrowIcon style={{transform: 'scaleY(-1)'}}/>
                                }

                            </ButtonIcon>
                        </AlignBox>
                    }
                </ListItem>

                {earnMenu && open ?
                    <>
                        <SubListItem
                            onClick={() => handleClickEarnSubMenu('points')}
                            select={menu === 'points'}
                            disableRipple
                        >
                            {open &&
                                <ListText primary={'Points'} />
                            }
                        </SubListItem>
                        <SubListItem
                            onClick={() => handleClickEarnSubMenu('settlement')}
                            select={menu === 'settlement'}
                            disableRipple
                        >
                            {open &&
                                <ListText primary={'Settlement'} />
                            }
                        </SubListItem>
                        <SubListItem
                            onClick={() => handleClickEarnSubMenu('exchange')}
                            select={menu === 'exchange'}
                            disableRipple
                        >
                            {open &&
                                <ListText primary={'Exchange'} />
                            }
                        </SubListItem>
                    </>
                    :
                    null
                }

                <Line/>

                <ListItem
                    onClick={() => handleClickMenu('manager')}
                    select={menu === 'manager'}
                    disableRipple
                >
                    <ListIcon><SettingsIcon/></ListIcon>
                    {open &&
                        <ListText primary={'Channels Manager'} />
                    }
                </ListItem>

                <Line/>

                <ListItem
                    onClick={() => handleClickMenu('favorites')}
                    select={menu === 'favorites'}
                    disableRipple
                >
                    <ListIcon><HeartIcon style={{width: 22, height: 22}}/></ListIcon>
                    {open &&
                        <ListText primary={'Favorites'} />
                    }
                </ListItem>

                <Line/>
            </List>
        </Box>
    );

}

export default StudioSide;
