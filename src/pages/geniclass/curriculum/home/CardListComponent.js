import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Card, Typography } from '@mui/material';
import { FlexCenter, FlexSpace } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import { ReactComponent as PlusCircleIcon } from '../../../../assets/images/PlusCircleIcon.svg';
import { ReactComponent as RightArrowIcon } from '../../../../assets/newImages/OutlineChevronRightIcon.svg';
import TestImage from '../../../../assets/newImages/TestImg.jpg';
import CardItemComponent from './CardItemComponent';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box',
    marginTop: 50,
    paddingBottom: 100
}));

const TitleBox = styled(FlexSpace)(({ theme }) => ({
    width: '100%',
    marginBottom: '14px',
    alignItems: 'flex-end'
}));

const Title = styled(FlexCenter)(({ theme }) => ({
    color: '#333',
    fontSize: '1.375rem',
    fontWeight: 700,
    '& svg path': {
        fill: '#333'
    }
}));

const CardList = styled(Box)(({ theme, isSl }) => ({
    width: 'calc(100% - 6px)',
    display: 'grid',
    gridTemplateColumns: isSl ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isSl ? 10 : 20
}));

const EmptyBox = styled('div')(({ theme }) => ({
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
        chip: ['훈련', '연습', '테스트'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 ',
        summary1: '강의5',
        summary2: '100'
    },
    {
        chip: ['훈련'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 ',
        summary1: '강의6',
        summary2: '100'
    },
    {
        chip: ['훈련', '연습', '테스트'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 ',
        summary1: '강의5',
        summary2: '100'
    },
    {
        chip: ['훈련'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 ',
        summary1: '강의6',
        summary2: '100'
    }
];
export const mediaHeight = 236;

function CardListComponent(props) {
    const { isLg, isSl } = useViewSize();

    return (
        <Root isLg={isLg}>
            <TitleBox>
                <Title>
                    교육과정 <RightArrowIcon />
                </Title>
                <CommonButton
                    width={isSl ? '160px' : '200px'}
                    height={isSl ? '38px' : '50px'}
                    text={'교육 과정 만들기'}
                    background={'#F5CD79'}
                    color={'#333'}
                    fontWeight={500}
                    fontSize={isSl ? '1rem' : '1.125rem'}
                    disabled={false}
                    startIcon={<PlusCircleIcon />}
                />
            </TitleBox>

            <CardList isSl={isSl}>
                <CardItemComponent cardContent={cardContent} />
            </CardList>

            {/*<EmptyBox>*/}
            {/*    <Typography>수강 중인 교육과정이 없습니다.</Typography>*/}
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

export default CardListComponent;
