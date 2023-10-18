import * as React from 'react';
import {
    Container,
    FlexEnd,
    FormControlBox, GridBox, GridBoxIn, MainLanguageBox, Menu
} from "./styles/MobileHelpCenterContentStyle";
import {Box, Select} from "@mui/material";
import {ReactComponent as LanguageIcon} from "../../../common/images/LanguageIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as HelpAccountIcon} from "../../../common/images/HelpAccountIcon.svg";
import {ReactComponent as HelpBroadcastingIcon} from "../../../common/images/HelpBroadcastingIcon.svg";
import {ReactComponent as HelpChannelIcon} from "../../../common/images/HelpChannelIcon.svg";
import {ReactComponent as HelpPointIcon} from "../../../common/images/HelpPointIcon.svg";
import {ReactComponent as HelpChannelOwnerIcon} from "../../../common/images/HelpChannelOwnerIcon.svg";
import {ReactComponent as HelpStreamerIcon} from "../../../common/images/HelpStreamerIcon.svg";
import {ReactComponent as HelpTroubleshootingIcon} from "../../../common/images/HelpTroubleshootingIcon.svg";

function MobileHelpCenterMainContent(props) {
    const [languageFilter, setLanguageFilter] = React.useState('en');
    const buttonList =
        [
            {icon: <HelpAccountIcon style={{width: 42, height: 42}}/>, name: 'Account'},
            {icon: <HelpBroadcastingIcon style={{width: 50, height: 49}}/>, name: 'Broadcasting'},
            {icon: <HelpChannelIcon style={{width: 51, height: 40}}/>, name: 'Channel'},
            {icon: <HelpPointIcon style={{width: 49, height: 49}}/>, name: 'Point'},
            {icon: <HelpChannelOwnerIcon style={{width: 49, height: 49}}/>, name: 'Channel Owner'},
            {icon: <HelpStreamerIcon style={{width: 49, height: 49}}/>, name: 'Streamer'},
            {icon: <HelpTroubleshootingIcon style={{width: 49, height: 49}}/>, name: 'Troubleshooting'},
        ]

    const handleChangeLanguageFilter = (event) => {
        setLanguageFilter(event.target.value);
    };

    return (
        <Container>
            <FlexEnd>
                <MainLanguageBox>
                    <LanguageIcon style={{width: 18, height: 18}}/>
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
                </MainLanguageBox>
            </FlexEnd>

            <GridBox>
                {buttonList.map((list, i) => (
                    <GridBoxIn key={i} disableRipple>
                        {list.icon}
                        {list.name}
                    </GridBoxIn>
                ))}
            </GridBox>

        </Container>
    );
}

export default MobileHelpCenterMainContent;