import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button, Card, CardContent, Chip, Link, Typography } from '@mui/material';
import { Flex, FlexCenter, FlexColumn, FlexColumnCenter, FlexEnd, FlexSpace } from '../../common/styled/CommonStyle';
import { ReactComponent as ClockIcon } from '../../../../assets/newImages/ClockIcon.svg';
import { ReactComponent as PlusCircleIcon } from '../../../../assets/newImages/PlusCircleIcon.svg';
import { ReactComponent as MoreIcon } from '../../../../assets/images/MoreIcon.svg';
import { ReactComponent as MinusIcon } from '../../../../assets/images/MinusIcon.svg';
import CommonButton from '../../common/CommonButton';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box'
}));

const Wrap = styled(FlexColumn)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    gap: 20,
    boxSizing: 'border-box'
}));

const CardStyle = styled(Card)(({ theme, isSl }) => ({
    width: '100%',
    padding: 0,
    border: '1px solid #ddd',
    borderRadius: 10,
    boxShadow: 'none',
    '& .MuiButtonBase-root': {
        padding: 0
    },
    '& .MuiCardContent-root': {
        display: 'grid',
        gridTemplateColumns: isSl ? '120px 1fr' : '140px 1fr',
        padding: '0!important',
        '&::last-child': {
            padding: 0
        },
        '& .MuiTypography-h5': {
            fontSize: isSl ? '1rem' : '1.5rem',
            fontWeight: 500,
            color: '#333',
            textAlign: 'left',
            letterSpacing: '-0.5px',
            display: '-webkit-box',
            wordBreak: 'break-all',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'normal',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            margin: isSl ? '5px 0 10px' : '10px 0 15px'
        },
        '& .MuiLink-root': {
            color: '#3190FF',
            fontSize: isSl ? '0.875rem' : '1rem',
            fontWeight: 500,
            textAlign: 'left',
            textDecoration: 'underline',
            marginBottom: 0,
            display: '-webkit-box',
            wordBreak: 'break-all',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'normal',
            WebkitLineClamp: 1,
            overflow: 'hidden'
        }
    }
}));
const CardTime = styled(FlexColumnCenter)(({ theme, isSl }) => ({
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 4,
    padding: isSl ? '25px 20px' : '31px 28px',
    backgroundColor: '#F3F6FA',
    borderRight: '1px solid #D5D4DC',
    color: '#333',
    boxSizing: 'border-box',
    '& svg': {
        width: isSl ? 24 : 28,
        height: isSl ? 24 : 28,
        '& path': {
            fill: '#333'
        }
    },
    '& .MuiTypography-h4': {
        fontSize: isSl ? '1.313rem' : '1.5rem',
        fontWeight: 700,
        lineHeight: '28.8px',
        letterSpacing: '-0.5px',
        textAlign: 'right'
    }
}));

const CardInfo = styled(FlexSpace)(({ theme, isSl }) => ({
    alignItems: isSl ? 'flex-start' : 'flex-end',
    gap: 10,
    padding: isSl ? 20 : 30,
    flexDirection: isSl ? 'column' : 'row'
}));

const ChipStyle = styled(Chip)(({ theme, isSl }) => ({
    minWidth: isSl ? 40 : 48,
    height: isSl ? 25 : 30,
    padding: isSl ? '2px 6px' : '5px 12px',
    backgroundColor: '#2BCBBA',
    borderRadius: 6,
    '& .MuiChip-label': {
        padding: 0,
        color: '#fff',
        fontSize: isSl ? '0.688rem' : '0.875rem',
        fontWeight: 700
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

const EmptyBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 200,
    border: '1px solid #D5D4DC',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 500,
        letterSpacing: '-0.5px'
    }
}));

function ScheduleListDetailComponent(props) {
    const { isLg, isSl } = useViewSize();
    const [moreBtn, setMoreBtn] = React.useState(false);

    const valueList = [
        {
            chip: ['코칭'],
            title: '24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 ',
            contents: '교육과정명',
            startTime: '09:00',
            endTime: '09:30'
        },
        {
            chip: ['VOD'],
            title: '24년 1학년 1학기 심화과정',
            contents: '24년 1학년 1학기 심화과정 교육과정명',
            startTime: '10:00',
            endTime: '12:30'
        },
        {
            chip: ['코칭'],
            title: '24년 1학년 1학기 심화과정',
            contents: '교육과정명',
            startTime: '09:00',
            endTime: '09:30'
        },
        {
            chip: ['VOD'],
            title: '24년 1학년 1학기 심화과정',
            contents: '24년 1학년 1학기 심화과정 교육과정명',
            startTime: '10:00',
            endTime: '12:30'
        }
    ];

    const handleClickMore = () => {
        setMoreBtn(!moreBtn);
    };

    return (
        <Root>
            {valueList.length > 0 ? (
                <>
                    <Wrap isLg={isLg}>
                        {valueList.map((item, index) => (
                            <CardStyle key={index} isSl={isSl}>
                                <CardContent>
                                    <CardTime isSl={isSl}>
                                        <ClockIcon />
                                        <Typography variant="h4">
                                            {item.startTime}
                                            <br /> ~ {item.endTime}
                                        </Typography>
                                    </CardTime>
                                    <CardInfo isSl={isSl}>
                                        <FlexColumn>
                                            <Flex sx={{ gap: '8px' }}>
                                                {item.chip.map((list, i) => (
                                                    <ChipStyle
                                                        label={list}
                                                        isSl={isSl}
                                                        sx={{
                                                            backgroundColor:
                                                                list === '코칭' ? '#FD7272' : list === 'VOD' ? '#000000' : '#00CCA5'
                                                        }}
                                                    />
                                                ))}
                                            </Flex>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Link href="#" target="_blank">
                                                {item.contents}
                                            </Link>
                                        </FlexColumn>
                                        <FlexEnd>
                                            <CommonButton
                                                width={isSl ? '90px' : '140px'}
                                                height={isSl ? '38px' : '50px'}
                                                text={'강의하기'}
                                                background={'#2F3640'}
                                                color={'#fff'}
                                                fontWeight={700}
                                                fontSize={isSl ? '1rem' : '1.125rem'}
                                                disabled={false}
                                            />
                                        </FlexEnd>
                                    </CardInfo>
                                </CardContent>
                            </CardStyle>
                        ))}
                    </Wrap>
                    {valueList.length > 4 && (
                        <CommonButtonStyle onClick={handleClickMore} disableRipple>
                            <Typography>{moreBtn ? '접기' : '더보기'}</Typography>
                            {moreBtn ? <MinusIcon /> : <MoreIcon />}
                        </CommonButtonStyle>
                    )}
                </>
            ) : (
                <EmptyBox>
                    <Typography>등록된 강의가 없습니다.</Typography>
                </EmptyBox>
            )}
        </Root>
    );
}

export default ScheduleListDetailComponent;
