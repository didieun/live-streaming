import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button, Card, Typography } from '@mui/material';
import { FlexCenter, FlexEnd, FlexSpace } from '../../../common/styled/CommonStyle';
import CommonButton from '../../../common/CommonButton';
import { ReactComponent as PlusCircleIcon } from '../../../../../assets/images/PlusCircleIcon.svg';
import { ReactComponent as ArrowIcon } from '../../../../../assets/images/ArrowIcon.svg';
import TestImage from '../../../../../assets/newImages/TestImg.jpg';
import CardItemComponent from './CardItemComponent';
import Teacher01 from '../../../../../assets/images/Teacher01.png';
import Teacher02 from '../../../../../assets/images/Teacher02.png';
import Teacher03 from '../../../../../assets/images/Teacher03.png';
import Teacher04 from '../../../../../assets/images/Teacher04.png';
import CardTeacherItemComponent from './CardTeacherItemComponent';
import PropTypes from 'prop-types';
import HomeScheduleComponent from './HomeScheduleComponent';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box',
    marginTop: 40,
    paddingBottom: 100
}));

const CardList = styled(Box)(({ theme, isSl }) => ({
    width: 'calc(100% - 6px)',
    display: 'grid',
    gridTemplateColumns: isSl ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isSl ? 10 : 20
}));

const Title = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        color: '#333',
        fontSize: '1.125rem',
        fontWeight: 500,
        padding: '0 6px',
        letterSpacing: '-0.5px',
        marginBottom: 15,
        '& svg': {
            width: 17,
            height: 17,
            marginLeft: 4,
            '& path': {
                fill: '#333'
            }
        },
        '&:hover': {
            background: 'transparent'
        }
    }
}));

const EmptyBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 200,
    border: '1px solid #D5D4DC',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > p': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        marginBottom: 14
    }
}));

const cardContent = [
    {
        chip: ['TOPIK', 'K-POP', '문법'],
        img: Teacher01,
        name: '이다혜',
        text1: '한국어 교육 전공 석사',
        text2: '한국어 교원 자격 2급'
    },
    {
        chip: ['TOPIK', '비지니스_한국어', '첨삭지도가능'],
        img: Teacher02,
        name: '최지현',
        text1: '국어국문학 전공 박사',
        text2: '한국어 교원 자격 2급'
    },
    {
        chip: ['일상 한국어', '일반_한국어', '읽기'],
        img: Teacher03,
        name: '이기섭',
        text1: '한국어 교원 자격 2급',
        text2: ''
    },
    {
        chip: ['비지니스_한국어', '유쾌한', '쓰기과제'],
        img: Teacher04,
        name: '이성숙',
        text1: '',
        text2: ''
    }
];

function CardListTeacherComponent(props) {
    const { isLg, isSl } = useViewSize();
    const { handleClickAllTeacher } = props;
    return (
        <Root isLg={isLg}>
            <FlexEnd sx={{ width: '100%' }}>
                <Title onClick={() => handleClickAllTeacher('강사')} disableRipple>
                    전체 강사 <ArrowIcon style={{ transform: 'rotate( -90deg )' }} />
                </Title>
            </FlexEnd>
            <CardList isSl={isSl}>
                <CardTeacherItemComponent cardContent={cardContent} />
            </CardList>

            {/*<EmptyBox>*/}
            {/*    <Typography>추천 강사가 없습니다.</Typography>*/}
            {/*    <CommonButton*/}
            {/*        width={isSl ? '160px' : '200px'}*/}
            {/*        height={isSl ? '38px' : '50px'}*/}
            {/*        text={'교육 과정 찾기'}*/}
            {/*        background={'#F5CD79'}*/}
            {/*        color={'#333'}*/}
            {/*        fontWeight={500}*/}
            {/*        fontSize={isSl ? '1rem' : '1.125rem'}*/}
            {/*        disabled={false}*/}
            {/*        startIcon={<PlusCircleIcon />}*/}
            {/*    />*/}
            {/*</EmptyBox>*/}
        </Root>
    );
}

CardListTeacherComponent.propTypes = {
    handleClickAllTeacher: PropTypes.bool
};

export default CardListTeacherComponent;
