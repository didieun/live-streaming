import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button, Card, CardContent, Chip, Link, Typography } from '@mui/material';
import { Flex, FlexColumn, FlexEnd, FlexSpace } from '../../../common/styled/CommonStyle';
import { ReactComponent as VideoCameraIcon } from '../../../../../assets/images/VideoCameraIcon.svg';
import { ReactComponent as MoreIcon } from '../../../../../assets/images/MoreIcon.svg';
import { ReactComponent as MinusIcon } from '../../../../../assets/images/MinusIcon.svg';
import { ReactComponent as RadioCheckIcon } from '../../../../../assets/images/RadioCheckIcon.svg';
import { ReactComponent as UnRadioCheckIcon } from '../../../../../assets/images/UnRadioCheckIcon.svg';
import CommonButton from '../../../common/CommonButton';
import PropTypes from 'prop-types';
import VodLecture from './VodLecture';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box'
}));

const Wrap = styled(FlexColumn)(({ theme }) => ({
    width: '100%',
    gap: 20,
    boxSizing: 'border-box'
}));

const CardStyle = styled(Card)(({ theme, isSl }) => ({
    width: '100%',
    padding: 0,
    border: '1px solid #D5D4DC',
    borderRadius: 10,
    boxShadow: 'none',
    '& .MuiButtonBase-root': {},
    '& .MuiCardContent-root': {
        display: 'grid',
        padding: '0!important',
        '&::last-child': {
            padding: 0
        },
        '& .MuiTypography-h5': {
            fontSize: isSl ? '1.25rem' : '1.5rem',
            fontWeight: 700,
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
            linHeight: '24px',
            margin: isSl ? '5px 0 10px' : '10px 0 15px'
        },
        '& .MuiLink-root': {
            color: '#737373',
            fontSize: '0.875rem',
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

const CardInfo = styled(FlexSpace)(({ theme, isSl }) => ({
    alignItems: isSl ? 'flex-start' : 'flex-end',
    gap: 10,
    padding: isSl ? 20 : '34px 32px 26px',
    flexDirection: isSl ? 'column' : 'row'
}));

const ChipStyle = styled(Chip)(({ theme, isSl }) => ({
    minWidth: isSl ? 40 : 48,
    height: isSl ? 25 : 30,
    padding: isSl ? '2px 6px' : '5px 12px',
    backgroundColor: '#000',
    borderRadius: 6,
    lineHeight: 'initial',
    boxSizing: 'border-box',
    '& .MuiChip-label': {
        padding: 0,
        color: '#fff',
        fontSize: isSl ? '0.688rem' : '0.875rem',
        fontWeight: 700
    }
}));

const DateBox = styled(Flex)(({ theme }) => ({
    gap: 4,
    marginLeft: 20,
    '& p': {
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.28px'
    },
    '& svg': {
        width: 22,
        height: 22,
        '& path': {
            fill: '#787878'
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

const CommonText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        textAlign: 'left',
        display: '-webkit-box',
        wordBreak: 'break-all',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal',
        WebkitLineClamp: 1,
        overflow: 'hidden',
        linHeight: '16px'
    }
}));

const NameText = styled(CommonText)(({ theme }) => ({
    '&.MuiTypography-root': {
        color: '#737373',
        fontWeight: 400,
        letterSpacing: '-0.2px',
        marginBottom: 8
    }
}));

const TextStyle = styled(CommonText)(({ theme, isSl }) => ({
    '&.MuiTypography-root': {
        color: '#333',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        marginBottom: isSl ? 10 : 30
    }
}));

const CheckBox = styled(Flex)(({ theme, isHd, isMd }) => ({
    marginTop: 10,
    marginBottom: 10,
    gap: isMd ? 5 : isHd ? 30 : 80,
    flexDirection: isMd ? 'column' : 'row',
    alignItems: 'flex-start',
    '& svg': {
        '& .checked': {
            fill: '#00B959'
        }
    }
}));

const CheckText = styled(Typography)(({ theme, isMd }) => ({
    '&.MuiTypography-root': {
        fontSize: isMd ? '1rem' : '1.125rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        marginLeft: 8
    }
}));

function VodLectureDetailComponent(props) {
    const { isSl, isHd, isMd } = useViewSize();
    const { isLeader, items } = props;
    const [moreBtn, setMoreBtn] = React.useState(false);
    const [readyBtn, setReadyBtn] = React.useState(true);

    const handleClickMore = () => {
        setMoreBtn(!moreBtn);
    };

    const handleClickReady = () => {
        setReadyBtn(!readyBtn);
    };

    return (
        <Root>
            {items.length > 0 ? (
                <>
                    <Wrap>
                        {items.map((item, index) => (
                            <CardStyle key={index} isSl={isSl}>
                                <CardContent>
                                    <CardInfo isSl={isSl}>
                                        <FlexColumn>
                                            <Flex sx={{ gap: '8px' }}>
                                                {item.chip.map((list, i) => (
                                                    <ChipStyle label={list} isSl={isSl} />
                                                ))}
                                            </Flex>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            {isLeader ? (
                                                <Flex sx={{ marginBottom: '8px' }}>
                                                    <Link href="#" target="_blank">
                                                        {item.contents}
                                                    </Link>
                                                    <DateBox>
                                                        <VideoCameraIcon />
                                                        <Typography>{item.time}</Typography>
                                                    </DateBox>
                                                </Flex>
                                            ) : (
                                                <Box>
                                                    <NameText>{item.name}</NameText>
                                                    <TextStyle isSl={isSl}>{item.contents}</TextStyle>
                                                    <CheckBox isHd={isHd} isMd={isMd}>
                                                        <Flex>
                                                            {item.checked1 ? <RadioCheckIcon /> : <UnRadioCheckIcon />}
                                                            <CheckText isMd={isMd}>지난 주차 복습 퀴즈 풀기</CheckText>
                                                        </Flex>
                                                        <Flex>
                                                            {item.checked2 ? <RadioCheckIcon /> : <UnRadioCheckIcon />}
                                                            <CheckText isMd={isMd}>이번 주차 내용 미리보기</CheckText>
                                                        </Flex>
                                                    </CheckBox>
                                                </Box>
                                            )}
                                        </FlexColumn>
                                        <FlexEnd sx={{ '& button:first-child': { marginRight: '14px' } }}>
                                            <CommonButton
                                                width={isSl ? '90px' : '140px'}
                                                height={isSl ? '38px' : '50px'}
                                                text={isLeader ? '수업 콘텐츠 관리' : readyBtn ? '수업 준비하기' : '준비 다시하기'}
                                                background={'#fff'}
                                                border={'#2F3640'}
                                                color={'#333'}
                                                fontWeight={700}
                                                fontSize={isSl ? '1rem' : '1.125rem'}
                                                disabled={false}
                                                onClick={isLeader ? null : handleClickReady}
                                            />
                                            <CommonButton
                                                width={isSl ? '90px' : '140px'}
                                                height={isSl ? '38px' : '50px'}
                                                text={isLeader ? '강의하기' : '수업하기'}
                                                background={'#2F3640'}
                                                color={'#fff'}
                                                fontWeight={700}
                                                fontSize={isSl ? '1rem' : '1.125rem'}
                                                disabled={isLeader ? false : readyBtn}
                                            />
                                        </FlexEnd>
                                    </CardInfo>
                                </CardContent>
                            </CardStyle>
                        ))}
                    </Wrap>
                    {items.length > 4 && (
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

VodLectureDetailComponent.propTypes = {
    isLeader: PropTypes.bool,
    items: PropTypes.array
};

export default VodLectureDetailComponent;
