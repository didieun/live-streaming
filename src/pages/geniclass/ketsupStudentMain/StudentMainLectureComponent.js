import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { ArrowTooltipInStyle, ArrowTooltipStyle, Flex, FlexEnd, FlexSpace, IconButtonStyle } from '../common/styled/CommonStyle';
import { ReactComponent as ArrowClockwiseIcon } from '../../../assets/images/ArrowClockwiseIcon.svg';
import { ReactComponent as ChalkboardIcon } from '../../../assets/images/ChalkboardIcon.svg';
import { ReactComponent as LiveIcon } from '../../../assets/images/LiveIcon.svg';
import { ReactComponent as CoachingIcon } from '../../../assets/images/CoachingIcon.svg';
import { ReactComponent as VideoCameraIcon } from '../../../assets/images/VideoCameraIcon.svg';
import { ReactComponent as PencilLineOutlineIcon } from '../../../assets/images/PencilLineOutlineIcon.svg';
import { ReactComponent as NotepadIcon } from '../../../assets/images/NotepadIcon.svg';
import { ReactComponent as Info } from '../../../assets/images/Info.svg';
import { ReactComponent as TooltipCloseIcon } from '../../../assets/images/TooltipCloseIcon.svg';
import PropTypes from 'prop-types';
import TooltipArrowBlue from '../../../assets/images/TooltipArrowBlue.svg';
import CardItemComponent from '../ketsupHome/contents/home/CardItemComponent';
import { useViewSize } from '../../../store';
import TestImage from '../../../assets/newImages/TestImg.jpg';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: 30
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
        cursor: 'default',
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

const TitleBox = styled(FlexSpace)(({ theme }) => ({
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 14,
    marginTop: 40
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    }
}));

const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.28px'
    }
}));

const CardList = styled(Box)(({ theme, isSl }) => ({
    width: 'calc(100% - 6px)',
    display: 'grid',
    gridTemplateColumns: isSl ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isSl ? 10 : 20
}));

const cardContent = [
    {
        chip: ['TOPIK', 'K-POP', '문법'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 ',
        summary1: '강의5',
        summary2: '100'
    },
    {
        chip: ['TOPIK 읽기', 'K-POP', '문법'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 ',
        summary1: '강의6',
        summary2: '100'
    },
    {
        chip: ['일상 한국어', 'K-POP', '문법'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 ',
        summary1: '강의5',
        summary2: '100'
    },
    {
        chip: ['K-POP', '문법'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 ',
        summary1: '강의6',
        summary2: '100'
    }
];

const StudentMainLectureComponent = (props) => {
    const { isSl } = useViewSize();
    const [tooltip, setTooltip] = React.useState(0);
    const items = [
        { icon: <ChalkboardIcon />, text: '교육과정 수', number: 1 },
        { icon: <LiveIcon />, text: '실시간', number: 2 },
        { icon: <VideoCameraIcon />, text: 'VOD', number: 0 }
        // { icon: <PencilLineOutlineIcon />, text: '평가', number: 0 },
        // { icon: <NotepadIcon />, text: '과제', number: 0 }
    ];

    const handleClickTooltip = () => {
        setTooltip(!tooltip);
    };

    const handleCloseTooltip = () => {
        setTooltip(false);
    };

    return (
        <Root>
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

            <TitleBox>
                <TitleText>교육과정 태그</TitleText>
                <SubText>강의 2개 • VOD 2개 (21분)</SubText>
            </TitleBox>
            <CardList isSl={isSl}>
                <CardItemComponent cardContent={cardContent} />
            </CardList>
        </Root>
    );
};

StudentMainLectureComponent.propTypes = {
    handleChangeTab: PropTypes.func
};

export default StudentMainLectureComponent;
