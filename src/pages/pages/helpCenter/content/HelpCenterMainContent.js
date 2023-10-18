import * as React from 'react';
import {
    FlexEnd,
    FormControlBox, GridBox, GridBoxIn, LanguageBox, MainContainer, MainContainerIn, Menu
} from "./styles/HelpCenterContentStyle";
import {Box, Select} from "@mui/material";
import {ReactComponent as LanguageIcon} from "../../common/images/LanguageIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as HelpAccountIcon} from "../../common/images/HelpAccountIcon.svg";
import {ReactComponent as HelpBroadcastingIcon} from "../../common/images/HelpBroadcastingIcon.svg";
import {ReactComponent as HelpChannelIcon} from "../../common/images/HelpChannelIcon.svg";
import {ReactComponent as HelpPointIcon} from "../../common/images/HelpPointIcon.svg";
import {ReactComponent as HelpChannelOwnerIcon} from "../../common/images/HelpChannelOwnerIcon.svg";
import {ReactComponent as HelpStreamerIcon} from "../../common/images/HelpStreamerIcon.svg";
import {ReactComponent as HelpTroubleshootingIcon} from "../../common/images/HelpTroubleshootingIcon.svg";

function HelpCenterMainContent(props) {
    const [languageFilter, setLanguageFilter] = React.useState('en');
    const buttonList =
        [
            {icon: <HelpAccountIcon/>, name: 'Account'},
            {icon: <HelpBroadcastingIcon/>, name: 'Broadcasting'},
            {icon: <HelpChannelIcon/>, name: 'Channel'},
            {icon: <HelpPointIcon/>, name: 'Point'},
            {icon: <HelpChannelOwnerIcon/>, name: 'Channel Owner'},
            {icon: <HelpStreamerIcon/>, name: 'Streamer'},
            {icon: <HelpTroubleshootingIcon/>, name: 'Troubleshooting'},
        ]

    const handleChangeLanguageFilter = (event) => {
        setLanguageFilter(event.target.value);
    };

    return (
        <MainContainer>
            <MainContainerIn>
                <FlexEnd>
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
                                        vertical: "bottom",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
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
                                <Menu value={'en'}  disableRipple>
                                    English
                                </Menu>
                            </Select>
                        </FormControlBox>
                    </LanguageBox>
                </FlexEnd>

                <GridBox>
                    {buttonList.map((list, i) => (
                        <GridBoxIn key={i} disableRipple>
                            {list.icon}
                            {list.name}
                        </GridBoxIn>
                    ))}
                </GridBox>

            </MainContainerIn>
        </MainContainer>
    );
}

export default HelpCenterMainContent;