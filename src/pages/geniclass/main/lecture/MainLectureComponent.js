import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import {
    ArrowTooltipInStyle,
    ArrowTooltipStyle,
    Flex,
    FlexCenter,
    FlexEnd,
    FlexSpace,
    IconButtonStyle
} from '../../common/styled/CommonStyle';
import { ReactComponent as MoreIcon } from '../../../../assets/images/MoreIcon.svg';
import { ReactComponent as ArrowClockwiseIcon } from '../../../../assets/images/ArrowClockwiseIcon.svg';
import { ReactComponent as TopicIcon } from '../../../../assets/images/TopicIcon.svg';
import { ReactComponent as CoachingIcon } from '../../../../assets/images/CoachingIcon.svg';
import { ReactComponent as VideoCameraIcon } from '../../../../assets/images/VideoCameraIcon.svg';
import { ReactComponent as PencilLineOutlineIcon } from '../../../../assets/images/PencilLineOutlineIcon.svg';
import { ReactComponent as NotepadIcon } from '../../../../assets/images/NotepadIcon.svg';
import { ReactComponent as Info } from '../../../../assets/images/Info.svg';
import { ReactComponent as TooltipCloseIcon } from '../../../../assets/images/TooltipCloseIcon.svg';
import MainLectureList from './MainLectureList';
import PropTypes from 'prop-types';
import TooltipArrowBlue from '../../../../assets/images/TooltipArrowBlue.svg';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: 30
}));

const CommunityBox = styled(FlexSpace)(({ theme }) => ({
    width: '100%',
    minHeight: 70,
    boxSizing: 'border-box',
    marginBottom: 20,
    borderRadius: 8,
    background: '#F5F6FA',
    padding: 20
}));

const CommunityChipText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.25rem',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        color: '#2572ed'
    }
}));

const CommunityText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        maxWidth: 'calc(100% - 70px)',
        fontSize: '1rem',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        color: '#111',
        padding: '0 0 0 20px'
    }
}));

const CommonButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
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

const RefreshButton = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 24,
        height: 24,
        marginLeft: 15,
        '& svg': {
            width: 24,
            height: 24,
            '& path': {
                fill: '#737373'
            }
        }
    }
}));

const DateText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: '#737373'
    }
}));

const BoxStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: 196,
    borderRadius: 10,
    background: '#F5F6FA',
    padding: 30,
    boxSizing: 'border-box',
    marginTop: 8,
    [theme.breakpoints.down('sd')]: {
        minHeight: 160
    }
}));

const GridBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
    gridTemplateRows: 'auto',
    gap: 18
}));

const BoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.25rem',
        color: '#333',
        fontWeight: 700,
        marginRight: 6
    }
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        maxWidth: 290,
        minHeight: 100,
        padding: '20px 35px',
        borderRadius: 10,
        background: '#fff',
        boxShadow: '0px 0px 4px 0px rgba(80, 82, 89, 0.10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover': {
            background: '#fff'
        },
        '&:last-child': {
            marginRight: 0
        },
        [theme.breakpoints.down('md')]: {
            padding: '16px 24px'
        },
        [theme.breakpoints.down('sl')]: {
            minHeight: 80
        }
    }
}));

const IconButton = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 28,
        height: 28,
        marginRight: 8,
        '& svg': {
            width: 28,
            height: 28
        }
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#787878',
        fontWeight: 500,
        letterSpacing: '-0.5px'
    }
}));

const NumberTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        color: '#3190FF',
        fontSize: '0.875rem',
        fontWeight: 400,
        '& span': {
            fontSize: '1.313rem',
            fontWeight: 600
        }
    }
}));

const TabsStyle = styled(Tabs)(({ theme }) => ({
    width: '100%',
    marginTop: 26,
    paddingBottom: 20,
    '& .MuiTabs-flexContainer': {
        gap: 15
    },
    '& .MuiTab-root': {
        minWidth: 30,
        boxSizing: 'border-box',
        padding: '16px 0px',
        color: '#bbb',
        fontSize: '1.5rem',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        '&.Mui-selected': {
            color: '#333'
        }
    },
    '& .MuiTabs-indicator': {
        height: 3,
        backgroundColor: '#F5CD79'
    }
}));

const MainLectureComponent = (props) => {
    const { handleChangeTab } = props;
    const [value, setValue] = React.useState(0);
    const [tooltip, setTooltip] = React.useState(0);
    const items = [
        { icon: <TopicIcon />, text: '토픽', number: 1 },
        { icon: <CoachingIcon />, text: '코칭', number: 2 },
        { icon: <VideoCameraIcon />, text: 'VOD', number: 0 },
        { icon: <PencilLineOutlineIcon />, text: '평가', number: 0 },
        { icon: <NotepadIcon />, text: '과제', number: 0 }
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickTooltip = () => {
        setTooltip(!tooltip);
    };

    const handleCloseTooltip = () => {
        setTooltip(false);
    };

    return (
        <Root>
            <CommunityBox>
                <Flex sx={{ width: 'calc(100% - 80px)' }}>
                    <CommunityChipText>공지</CommunityChipText>
                    <CommunityText>공지사항이 비어 있으면 수강생에게 표시되지 않습니다.</CommunityText>
                </Flex>
                <CommonButtonStyle disableRipple>
                    <Typography>더보기</Typography>
                    <MoreIcon />
                </CommonButtonStyle>
            </CommunityBox>

            <FlexEnd>
                <Flex>
                    <DateText>2023.11.06 13:10</DateText>
                    <RefreshButton disableRipple>
                        <ArrowClockwiseIcon />
                    </RefreshButton>
                </Flex>
            </FlexEnd>

            <BoxStyle>
                <Flex sx={{ marginBottom: '14px' }}>
                    <BoxText>교육과정현황</BoxText>
                    <ArrowTooltipStyle
                        open={tooltip}
                        title={
                            <ArrowTooltipInStyle>
                                <Typography sx={{ marginRight: 25 }}>해당 교육과정의 유형별 강의 수입니다.</Typography>
                                <IconButtonStyle onClick={handleCloseTooltip} disableRipple>
                                    <TooltipCloseIcon />
                                </IconButtonStyle>
                            </ArrowTooltipInStyle>
                        }
                        placement="bottom"
                        top={'-9px'}
                        left={'50%'}
                        triangle={TooltipArrowBlue}
                    >
                        <IconButtonStyle sx={{ width: '21px', height: '21px' }} onClick={handleClickTooltip} disableRipple>
                            <Info style={{ width: 21, height: 21 }} />
                        </IconButtonStyle>
                    </ArrowTooltipStyle>
                </Flex>
                <GridBox>
                    {items.map((item, i) => (
                        <ButtonStyle key={i} disableRipple>
                            <Flex>
                                <IconButton disableRipple>{item.icon}</IconButton>
                                <TextStyle>{item.text}</TextStyle>
                            </Flex>

                            <NumberTextStyle>
                                <span>{item.number}</span>개
                            </NumberTextStyle>
                        </ButtonStyle>
                    ))}
                </GridBox>
            </BoxStyle>

            <TabsStyle value={value} onChange={handleChange}>
                <Tab label="전체 강의(24)" value={0} />
                <Tab label="진행중(4)" value={1} />
                <Tab label="예정(2)" value={2} />
                <Tab label="종료(1)" value={3} />
            </TabsStyle>

            <MainLectureList handleChangeTab={handleChangeTab} />
        </Root>
    );
};

MainLectureComponent.propTypes = {
    handleChangeTab: PropTypes.func
};

export default MainLectureComponent;
