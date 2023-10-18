import * as React from 'react';
import {
    AlignCenter,
    BreadcrumbBoldButton,
    BreadcrumbButton,
    Container,
    ContainerIn,
    FormControlBox,
    JustifySpace,
    LanguageBox2,
    Menu,
    TitleText, QuestionButton, TextStyle, GreenText, FlexColumn, TextStyle2
} from "./styles/HelpCenterContentStyle";
import {Box, Select, Typography} from "@mui/material";
import {ReactComponent as LanguageIcon} from "../../common/images/LanguageIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AccordionArrowIcon} from "../../common/images/AccordionArrowIcon.svg";
import {ReactComponent as BreadcrumbArrowIcon} from "../../common/images/BreadcrumbArrowIcon.svg";
import {ReactComponent as HelpCenterSearchIcon} from "../../common/images/HelpCenterSearchIcon.svg";

function HelpCenterQuestionSearch(props) {
    const [languageFilter, setLanguageFilter] = React.useState('en');

    const handleChangeLanguageFilter = (event) => {
        setLanguageFilter(event.target.value);
    };

    return (
        <Container>
            <ContainerIn>
                <JustifySpace>
                    <AlignCenter>
                        <BreadcrumbButton disableRipple>Help Center</BreadcrumbButton>
                        <BreadcrumbArrowIcon/>
                        <BreadcrumbBoldButton disableRipple>Account</BreadcrumbBoldButton>
                    </AlignCenter>

                    <LanguageBox2>
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
                    </LanguageBox2>
                </JustifySpace>

                <AlignCenter>
                    <TextStyle>Search Results for:</TextStyle>
                    <GreenText>Points</GreenText>
                </AlignCenter>

                <div>
                    <QuestionButton  disableRipple>
                        <Typography>How much is the <span>point</span> cost?</Typography>
                    </QuestionButton>

                    <QuestionButton  disableRipple>
                        <Typography>How do I pay for <span>points</span>?</Typography>
                    </QuestionButton>
                </div>

                {/* 검색 결과 없을떄 */}
                {/*<FlexColumn>*/}
                {/*    <HelpCenterSearchIcon style={{marginTop: 40}}/>*/}
                {/*    <TextStyle2>*/}
                {/*        Try searching another keyword. Browse <span>Help Center</span>*/}
                {/*    </TextStyle2>*/}
                {/*</FlexColumn>*/}


            </ContainerIn>
        </Container>
    );
}

export default HelpCenterQuestionSearch;