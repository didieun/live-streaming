import React from 'react';
import {
    Drawer,
    LanguageBox,
    FormControlBox,
    ButtonIcon,
    Menu, FormControlBoxClose,
    ListIcon, ListItem, ListText
} from "./styles/AdminSideBarStyle";
import {Box, List, Select} from "@mui/material";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as LanguageIcon} from "../../common/images/LanguageIcon.svg";
import {ReactComponent as UserManagementIcon} from "../../common/images/UserManagementIcon.svg";
import {ReactComponent as ChannelManagementIcon} from "../../common/images/ChannelManagementIcon.svg";
import {ReactComponent as PointManagementIcon} from "../../common/images/PointManagementIcon.svg";
import {ReactComponent as ExchangeManagementIcon} from "../../common/images/ExchangeManagementIcon.svg";
import {ReactComponent as ContentManagementIcon} from "../../common/images/ContentManagementIcon.svg";
import {ReactComponent as HelpCenterIcon} from "../../common/images/HelpCenterIcon.svg";

function AdminSideBar(props) {
    const {open, menu, handleClickMenu} = props;
    const [languageFilter, setLanguageFilter] = React.useState('en');
    const [languageOpen, setLanguageOpen] = React.useState(false);
    const sideMenuList =
        [
            {
                icon: <UserManagementIcon/>,
                name: 'User Management',
                value: 'user'
            },
            {
                icon: <ChannelManagementIcon/>,
                name: 'Channel Management',
                value: 'channel'
            },
            {
                icon: <PointManagementIcon/>,
                name: 'Point Management',
                value: 'point'
            },
            {
                icon: <ExchangeManagementIcon/>,
                name: 'Exchange Management',
                value: 'exchange'
            },
            {
                icon: <ContentManagementIcon/>,
                name: 'Content Management',
                value: 'content'
            },
            {
                icon: <HelpCenterIcon/>,
                name: 'Support',
                value: 'support'
            },
        ]

    const handleChangeLanguageFilter = (event) => {
        setLanguageFilter(event.target.value);
    };

    const handleClickLanguageOpen = () => {
        setLanguageOpen(true);
    };

    const handleClickLanguageClose = () => {
        setLanguageOpen(false);
    };

    return (
        <Drawer
            variant="permanent"
            open={open}
        >

            <List>
                {sideMenuList.map((list, i) => (
                    <ListItem
                        key={i}
                        onClick={() => handleClickMenu(list.value)}
                        select={menu === list.value}
                        disableRipple
                    >
                        <ListIcon>{list.icon}</ListIcon>
                        {open ?
                            <ListText primary={list.name} />
                            :
                            null
                        }
                    </ListItem>
                ))}
            </List>


            {open ?
                <LanguageBox>
                    <LanguageIcon/>
                    <FormControlBox variant="outlined">
                        <Select
                            id="filter"
                            value={languageFilter}
                            onChange={handleChangeLanguageFilter}
                            IconComponent={(props) => (
                                <Box>
                                    <ArrowDownIcon {...props}/>
                                </Box>
                            )}
                            MenuProps={{
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "center"
                                },
                                transformOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                },
                                PaperProps: {
                                    sx: {
                                        '&.MuiPaper-root':{
                                            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
                                            border: '1px solid #bbb',
                                            boxSizing:'border-box',
                                            '& *': {
                                                fontFamily: 'Inter !important',
                                                letterSpacing: '-0.2px'
                                            },
                                            '& ul': {
                                                padding: '6px 0'
                                            }
                                        },
                                    }
                                }
                            }}
                        >
                            <Menu value={'en'} onClick={handleClickLanguageClose} disableRipple>
                                English
                            </Menu>
                        </Select>
                    </FormControlBox>
                </LanguageBox>
                :
                <LanguageBox>
                    <ButtonIcon onClick={handleClickLanguageOpen} disableRipple>
                        <LanguageIcon/>
                    </ButtonIcon>
                    <FormControlBoxClose variant="outlined">
                        <Select
                            id="filter"
                            value={languageFilter}
                            open={languageOpen}
                            MenuProps={{
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                },
                                transformOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                },
                                PaperProps: {
                                    sx: {
                                        '&.MuiPaper-root':{
                                            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
                                            border: '1px solid #bbb',
                                            boxSizing:'border-box',
                                            marginTop: -2,
                                            '& *': {
                                                fontFamily: 'Inter !important',
                                                letterSpacing: '-0.2px'
                                            },
                                            '& ul': {
                                                padding: '6px 0'
                                            }
                                        },
                                    }
                                }
                            }}
                        >
                            <Menu value={'en'} onClick={handleClickLanguageClose} disableRipple>
                                English
                            </Menu>
                        </Select>
                    </FormControlBoxClose>
                </LanguageBox>
            }
        </Drawer>
    );
}

export default AdminSideBar;
