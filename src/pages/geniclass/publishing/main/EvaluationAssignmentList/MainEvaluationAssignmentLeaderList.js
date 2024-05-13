import React from 'react';
import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Grid, Typography } from '@mui/material';
import { Flex, FlexEnd, FlexSpace, FormControlLabelCheckBox } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/ArrowIcon.svg';
import { ReactComponent as ClockIcon } from '../../../../assets/images/ClockIcon.svg';
import { ReactComponent as AsideUsersThreeIcon } from '../../../../assets/images/AsideUsersThreeIcon.svg';
import { ReactComponent as UnRadioCheckIcon } from '../../../../assets/images/UnRadioCheckIcon.svg';
import { ReactComponent as RadioCheckIcon } from '../../../../assets/images/RadioCheckIcon.svg';
import { ReactComponent as PencilLineOutlineIcon } from '../../../../assets/images/PencilLineOutlineIcon.svg';
import { ReactComponent as MoreIcon } from '../../../../assets/images/MoreIcon.svg';
import PropTypes from 'prop-types';

const Root = styled(Box)(({ theme }) => ({
    paddingBottom: 80
}));

const AccordionBox = styled(Accordion)(({ theme }) => ({
    '&.MuiAccordion-root': {
        boxShadow: 'none',
        outline: '1px solid #D5D4DC',
        border: 0,
        borderRadius: 8,
        padding: '0',
        boxSizing: 'border-box',
        marginBottom: 20,
        backgroundColor: '#fff',
        '&:hover': {
            outline: '3px solid #F5CD79'
        },
        '&:before': {
            display: 'none'
        },
        '&.Mui-expanded': {
            backgroundColor: '#fff'
        }
    }
}));

const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
    '&.MuiAccordionSummary-root': {
        width: '100%',
        alignItems: 'flex-start',
        padding: '26px 27px',
        boxSizing: 'border-box',
        '& .MuiAccordionSummary-content': {
            width: 'calc(100% - 40px)',
            flexDirection: 'column',
            margin: '0'
        },
        '& .MuiIconButton-label, .MuiAccordionSummary-expandIconWrapper': {
            width: 40,
            height: 24,
            borderRadius: 48,
            background: '#E5F1FF',
            marginRight: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
                width: 13,
                height: 13,
                '& path': {
                    fill: '#3190FF'
                }
            }
        },
        [theme.breakpoints.down('sd')]: {
            padding: 16
        }
    }
}));

const AccordionTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#333',
        textAlign: 'left'
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 500,
        marginTop: 10,
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
            marginRight: 4
        },
        '& span': {
            color: '#3190FF'
        }
    }
}));

const GridBox = styled(Box)(({ theme }) => ({
    width: 'calc(100% - 80px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'auto',
    gap: 24,
    [theme.breakpoints.down('sd')]: {
        width: 'calc(100% - 60px)',
        gap: 10
    }
}));

const DetailGridBox = styled(GridBox)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('sd')]: {
        width: '100%'
    },
    [theme.breakpoints.down('sl')]: {
        width: 'calc(100% - 16px)',
        gridTemplateColumns: '1fr 1fr 102px !important'
    }
}));

const CountBox = styled(Flex)(({ theme }) => ({
    position: 'absolute',
    right: -40,
    '& p': {
        fontSize: '0.875rem',
        color: '#3190FF',
        fontWeight: 400,
        '& span': {
            fontWeight: 600,
            fontSize: '1.25rem'
        }
    },
    '& svg': {
        width: 30,
        height: 30,
        marginRight: 6,
        '& path': {
            fill: '#333'
        },
        [theme.breakpoints.down('sd')]: {
            width: 25,
            height: 25
        }
    }
}));

const BoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '9px 18px',
    backgroundColor: '#F5F6FA',
    borderRadius: 4,
    '& p': {
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 400
    }
}));

const AccordionDetailsStyled = styled(AccordionDetails)(({ theme }) => ({
    '&.MuiAccordionDetails-root': {
        color: '#666',
        backgroundColor: '#F5F6FA',
        borderRadius: '0',
        borderTop: '1px solid #D5D4DC',
        padding: '25px 27px 30px ',
        boxSizing: 'border-box',
        '& .MuiGrid-container': {
            paddingRight: 74
        },
        [theme.breakpoints.down('sd')]: {
            padding: 16
        }
    }
}));

const DetailScroll = styled(Box)(({ theme }) => ({
    maxHeight: 270,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#7A7A7A',
        borderRadius: '10px',
        backgroundClip: 'padding-box'
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: '#E8E8E8',
        marginTop: 14
    }
}));

const AccordionTitleDetails = styled(AccordionTitle)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#333',
        fontWeight: 600,
        marginBottom: 11
    }
}));

const BoxStyledDetail = styled(BoxStyled)(({ theme }) => ({
    backgroundColor: '#fff'
}));

const GridIcon = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& .MuiBox-root': {
        width: 'calc(100% - 32px - 10px)'
    },
    '& svg': {
        width: 32,
        height: 32,
        marginRight: 10,
        '& path': {
            fill: '#333'
        },
        [theme.breakpoints.down('sd')]: {
            width: 25,
            height: 25
        }
    }
}));

const CommonButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
        width: '100%',
        marginTop: 24,
        '& p': {
            color: '#333',
            fontSize: '0.875rem',
            fontWeight: 400,
            marginRight: 6
        },
        '&:hover': {
            backgroundColor: '#fff'
        },
        '& svg': {
            width: 20,
            height: 20
        }
    }
}));

const MainEvaluationAssignmentLeaderList = (props) => {
    const [completed, setCompleted] = React.useState(false);

    const handleClickCompleted = () => {
        setCompleted(!completed);
    };

    return (
        <Root>
            <AccordionBox>
                <AccordionSummaryStyled expandIcon={<ArrowIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <AccordionTitle>강의이름 1</AccordionTitle>

                    <Flex sx={{ marginBottom: '8px' }}>
                        <TextStyle sx={{ marginRight: '14px' }}>
                            <ClockIcon />
                            2024.03.19 10:00 ~ 11:30
                        </TextStyle>

                        <TextStyle>
                            <span>상시강의</span>
                        </TextStyle>
                    </Flex>

                    <FlexSpace sx={{ position: 'relative' }}>
                        <GridBox>
                            <Grid item xs={12} md={4}>
                                <BoxStyled>
                                    <Typography>제출기한</Typography>
                                    <Typography>
                                        ~ 기한 없음
                                        {/*{DATE_UTIL.getTimeZoneDate(lesson.closeDatetime, DATE_UTIL.FORMAT.FULL_DATE_DOT_FORMAT)}*/}
                                    </Typography>
                                </BoxStyled>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <BoxStyled>
                                    <Typography>제출</Typography>
                                    <Typography>2명</Typography>
                                </BoxStyled>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <BoxStyled>
                                    <Typography>미제출</Typography>
                                    <Typography>2명</Typography>
                                </BoxStyled>
                            </Grid>
                        </GridBox>

                        <CountBox>
                            <AsideUsersThreeIcon />
                            <Typography>
                                <span>100</span>명
                            </Typography>
                        </CountBox>
                    </FlexSpace>
                </AccordionSummaryStyled>
                <AccordionDetailsStyled>
                    <FlexEnd>
                        <FormControlLabelCheckBox
                            fontSize={'0.875rem'}
                            control={
                                <Checkbox
                                    icon={<UnRadioCheckIcon />}
                                    checkedIcon={<RadioCheckIcon />}
                                    value="completed"
                                    onClick={handleClickCompleted}
                                    disableRipple
                                />
                            }
                            label={'제출완료 수강생만'}
                        />
                    </FlexEnd>
                    <DetailScroll>
                        <Box sx={{ marginTop: '14px' }}>
                            <AccordionTitleDetails>교육생 이름2</AccordionTitleDetails>
                            <DetailGridBox container spacing={4}>
                                <Grid item xs={12} md={4}>
                                    <BoxStyledDetail>
                                        <Typography>제출일</Typography>
                                        <Typography>2023.09.13 16:00</Typography>
                                    </BoxStyledDetail>
                                </Grid>
                                <GridIcon item xs={12} md={4}>
                                    <PencilLineOutlineIcon />
                                    <BoxStyledDetail>
                                        <Typography>제출결과</Typography>
                                        <Typography>4/5개</Typography>
                                    </BoxStyledDetail>
                                </GridIcon>
                                <GridIcon item xs={12} md={4}>
                                    <CommonButton
                                        width={'102px'}
                                        height={'40px'}
                                        text={'결과보기'}
                                        background={'#2F3640'}
                                        color={'#fff'}
                                        fontWeight={700}
                                        fontSize={'0.938rem'}
                                        disabled={true}
                                    />
                                </GridIcon>
                            </DetailGridBox>
                        </Box>

                        <Box sx={{ marginTop: '14px' }}>
                            <AccordionTitleDetails>교육생 이름2</AccordionTitleDetails>
                            <DetailGridBox container spacing={4}>
                                <Grid item xs={12} md={4}>
                                    <BoxStyledDetail>
                                        <Typography>제출일</Typography>
                                        <Typography>2023.09.13 16:00</Typography>
                                    </BoxStyledDetail>
                                </Grid>
                                <GridIcon item xs={12} md={4}>
                                    <PencilLineOutlineIcon />
                                    <BoxStyledDetail>
                                        <Typography>제출결과</Typography>
                                        <Typography>4/5개</Typography>
                                    </BoxStyledDetail>
                                </GridIcon>
                                <GridIcon item xs={12} md={4}>
                                    <CommonButton
                                        width={'102px'}
                                        height={'40px'}
                                        text={'결과보기'}
                                        background={'#2F3640'}
                                        color={'#fff'}
                                        fontWeight={700}
                                        fontSize={'0.938rem'}
                                        disabled={true}
                                    />
                                </GridIcon>
                            </DetailGridBox>
                        </Box>
                    </DetailScroll>
                </AccordionDetailsStyled>
            </AccordionBox>

            <CommonButtonStyle disableRipple>
                <Typography>더보기</Typography>
                <MoreIcon />
            </CommonButtonStyle>
        </Root>
    );
};

MainEvaluationAssignmentLeaderList.propTypes = {
    isLeader: PropTypes.bool
};

export default MainEvaluationAssignmentLeaderList;
