import React from 'react';
import {
    Drawer,
    LanguageBox,
    FormControlBox,
    ButtonIcon,
    Menu, FormControlBoxClose,
} from "./styles/SideBarStyle";
import {Box, Select} from "@mui/material";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as LanguageIcon} from "../../common/images/LanguageIcon.svg";
import MainSide from "./MainSide";
import StudioSide from "./StudioSide";

function SideBar({open, menu, handleClickMenu, handleClickEarnMenu, earnMenu, handleClickEarnSubMenu, closeSideBarOpen}) {
    const [languageFilter, setLanguageFilter] = React.useState('en');
    const [languageOpen, setLanguageOpen] = React.useState(false);

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

            {/*<MainSide open={open} menu={menu} handleClickMenu={handleClickMenu}/>*/}

            {/*my studio 일때*/}
            <StudioSide
                open={open}
                menu={menu}
                handleClickMenu={handleClickMenu}
                handleClickEarnMenu={handleClickEarnMenu}
                handleClickEarnSubMenu={handleClickEarnSubMenu}
                earnMenu={earnMenu}
                closeSideBarOpen={closeSideBarOpen}
            />


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

export default SideBar;
