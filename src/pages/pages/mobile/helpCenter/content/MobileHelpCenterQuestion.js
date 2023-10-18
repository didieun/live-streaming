import * as React from 'react';
import {
    AlignCenter,
    BreadcrumbBoldButton,
    BreadcrumbButton,
    Container,
    FormControlBox,
    Menu,
    TitleText, QuestionButton, LanguageBox, FlexEnd
} from "./styles/MobileHelpCenterContentStyle";
import {Box, Select, Typography} from "@mui/material";
import {ReactComponent as LanguageIcon} from "../../../common/images/LanguageIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AccordionArrowIcon} from "../../../common/images/AccordionArrowIcon.svg";
import {ReactComponent as BreadcrumbArrowIcon} from "../../../common/images/BreadcrumbArrowIcon.svg";

function MobileHelpCenterQuestion(props) {
    const [languageFilter, setLanguageFilter] = React.useState('en');
    const questionList =
        [
            {title: 'How much does the enterprise cost?'},
            {title: 'How can I make a regular payment?'},
            {title: 'What\'s the difference between the On the Live 500 to 2,500 and the Enterprise?'},
            {title: 'How can I change the number of users or the plan while paying?'},
            {title: 'I\'d like to suspend or cancel my regular payment for a while.'},
            {title: 'I\'d like to withdraw from the membership.'},
            {title: 'I\'d like to suspend or cancel my regular payment for a while.'},
            {title: 'How much does the enterprise cost?'},
        ]

    const handleChangeLanguageFilter = (event) => {
        setLanguageFilter(event.target.value);
    };

    return (
        <Container>
            <AlignCenter>
                <BreadcrumbButton disableRipple>Help Center</BreadcrumbButton>
                <BreadcrumbArrowIcon/>
                <BreadcrumbBoldButton disableRipple>Account</BreadcrumbBoldButton>
            </AlignCenter>
            <FlexEnd>
                <LanguageBox>
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
                </LanguageBox>
            </FlexEnd>

            <TitleText>Account</TitleText>

            {questionList.map((list, i) => (
                <QuestionButton key={i} disableRipple>
                    <Typography>{list.title}</Typography>
                    <AccordionArrowIcon style={{width: 24, height: 24}} />
                </QuestionButton>
            ))}
        </Container>
    );
}

export default MobileHelpCenterQuestion;