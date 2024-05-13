import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button, Card, CardContent, Chip, Link, Typography } from '@mui/material';
import { Flex, FlexCenter, FlexColumn, FlexEnd, FlexSpace } from '../../../common/styled/CommonStyle';
import { ReactComponent as MoreIcon } from '../../../../../assets/images/MoreIcon.svg';
import { ReactComponent as MinusIcon } from '../../../../../assets/images/MinusIcon.svg';
import { ReactComponent as LikeIcon } from '../../../../../assets/images/LikeIcon.svg';
import Teacher01 from '../../../../../assets/images/Teacher01.png';
import Teacher02 from '../../../../../assets/images/Teacher02.png';
import Teacher03 from '../../../../../assets/images/Teacher03.png';
import Teacher04 from '../../../../../assets/images/Teacher04.png';
import CommonButton from '../../../common/CommonButton';

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
    padding: isSl ? 20 : 23,
    background: '#FEDF89',
    border: 0,
    borderRadius: 10,
    boxShadow: 'none',
    boxSizing: 'border-box',
    '& .MuiButtonBase-root': {},
    '& .MuiCardContent-root': {
        display: 'grid',
        gridTemplateColumns: '194px 1fr',
        gap: 14,
        padding: '0!important',
        '&::last-child': {
            padding: 0
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

const CardImage = styled(Box)(({ theme, isSl }) => ({
    aspectRatio: isSl ? 9 / 10 : 1,
    borderRadius: 10,
    background: '#fff',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));

const CardInfo = styled(Box)(({ theme, isSl }) => ({
    alignItems: 'flex-end',
    display: 'grid',
    gridTemplateColumns: isSl ? '1fr' : '4fr 1fr',
    gap: isSl ? 10 : 36,
    background: '#fff',
    borderRadius: 10,
    padding: isSl ? 16 : '23px 26px',
    boxSizing: 'border-box'
}));

const NameText = styled(Typography)(({ theme, isSl }) => ({
    '&.MuiTypography-root': {
        fontSize: isSl ? '1.375rem' : '1.75rem',
        color: '#333',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        lineHeight: 'normal',
        display: '-webkit-box',
        wordBreak: 'break-all',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal',
        WebkitLineClamp: 1,
        overflow: 'hidden'
    }
}));

const TextBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '11px 0',
    margin: '11px 0',
    borderTop: '1px solid #D5D4DC',
    borderBottom: '1px solid #D5D4DC'
}));

const TextStyle = styled(Typography)(({ theme, isSl }) => ({
    '&.MuiTypography-root': {
        fontSize: isSl ? '0.875rem' : '1rem',
        fontWeight: 400,
        color: '#737373',
        textAlign: 'left',
        lineHeight: 'normal',
        letterSpacing: '-0.5px',
        display: '-webkit-box',
        wordBreak: 'break-all',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal',
        WebkitLineClamp: 1,
        overflow: 'hidden'
    }
}));

const RecommendationBox = styled(FlexCenter)(({ theme }) => ({
    minWidth: 92,
    height: 25,
    padding: '4px 8px',
    borderRadius: 99,
    backgroundColor: '#FFD6E5',
    marginLeft: 14,
    '& p': {
        color: '#F61E6C',
        fontSize: '0.625rem',
        fontWeight: 500,
        letterSpacing: '-0.361px',
        textTransform: 'uppercase',
        lineHeight: 'normal',
        marginLeft: 3
    }
}));

const ChipStyle = styled(Chip)(({ theme }) => ({
    minWidth: 42,
    height: 24,
    padding: '4px 8px',
    borderRadius: 4,
    backgroundColor: '#F1F7F2',
    '& .MuiChip-label': {
        padding: 0,
        color: '#00B959',
        fontSize: '0.813rem',
        fontWeight: 700,
        lineHeight: 'normal'
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

function LectureCompletedDetailComponent1(props) {
    const { isLg, isSl } = useViewSize();
    const [moreBtn, setMoreBtn] = React.useState(false);

    const valueList = [
        {
            image: Teacher01,
            recommendation: false,
            name: '이다혜',
            text1: '한국어 교육 전공 석사',
            text2: '한국어 교원 자격 2급',
            contents: '교육과정명',
            date: '2024.03.19 10:00 ~ 11:30',
            chip: ['TOPIK', 'K-POP', '문법']
        },
        {
            image: Teacher02,
            recommendation: true,
            name: '최지현',
            text1: '국어국문학 전공 박사',
            text2: '한국어 교원 자격 2급',
            contents: '24년 1학년 1학기 심화과정 교육과정명',
            date: '2024.03.19 10:00 ~ 11:30',
            chip: ['TOPIK', '비즈니스_한국어', '첨삭지도가능']
        },
        {
            image: Teacher03,
            recommendation: false,
            name: '이기섭',
            text1: '외국어로서의 한국어 전공 학사',
            text2: '한국어 교원 자격 2급',
            contents: '교육과정명',
            date: '2024.03.19 10:00 ~ 11:30',
            chip: ['TOPIK', '일반_한국어', '읽기']
        },
        {
            image: Teacher04,
            recommendation: true,
            name: '이성숙',
            text1: '한국어 교육학 전공 석사',
            text2: '한국어 교원 자격 2급',
            contents: '24년 1학년 1학기 심화과정 교육과정명',
            date: '2024.03.19 10:00 ~ 11:30',
            chip: ['비지니스_한국어', '유쾌한', '쓰기과제']
        }
    ];

    const handleClickMore = () => {
        setMoreBtn(!moreBtn);
    };

    return (
        <Root>
            {valueList.length > 0 ? (
                <>
                    <Wrap>
                        {valueList.map((item, index) => (
                            <CardStyle key={index} isSl={isSl}>
                                <CardContent>
                                    <CardImage isSl={isSl}>
                                        <img src={item.image} alt="프로필 이미지" />
                                    </CardImage>
                                    <CardInfo isSl={isSl}>
                                        <FlexColumn>
                                            <Flex>
                                                <NameText isSl={isSl}>{item.name}</NameText>
                                                {item.recommendation && (
                                                    <RecommendationBox>
                                                        <LikeIcon />
                                                        <Typography>Ketsup 추천</Typography>
                                                    </RecommendationBox>
                                                )}
                                            </Flex>

                                            <TextBox>
                                                <TextStyle isSl={isSl}>･ {item.text1}</TextStyle>
                                                <TextStyle isSl={isSl}>･ {item.text2}</TextStyle>
                                            </TextBox>
                                            <Flex sx={{ gap: '10px' }}>
                                                {item.chip.map((list, i) => (
                                                    <ChipStyle label={list} />
                                                ))}
                                            </Flex>
                                        </FlexColumn>
                                        <FlexEnd>
                                            <CommonButton
                                                width={isSl ? '90px' : '144px'}
                                                height={isSl ? '38px' : '50px'}
                                                text={'강의 신청'}
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

export default LectureCompletedDetailComponent1;
