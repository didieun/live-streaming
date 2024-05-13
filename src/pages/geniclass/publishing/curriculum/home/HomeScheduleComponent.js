import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button } from '@mui/material';
import { FlexCenter, FlexSpace } from '../../common/styled/CommonStyle';
import { ReactComponent as RightArrowIcon } from '../../../../assets/newImages/OutlineChevronRightIcon.svg';
import ClassScheduleItemComponent from './ClassScheduleItemComponent';
import WeeklyDatepickerComponent from './WeeklyDatepickerComponent';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box',
    marginTop: 50
}));
const TitleBox = styled(FlexSpace)(({ theme }) => ({
    width: '100%',
    marginBottom: '14px',
    alignItems: 'flex-end'
}));
const DateBox = styled(FlexCenter)(({ theme }) => ({
    color: '#333333',
    fontSize: '1.5rem',
    fontWeight: 700,
    letterSpacing: '-0.5px'
}));
const Today = styled('span')(({ theme }) => ({
    width: 56,
    height: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#3190FF',
    fontSize: '1rem',
    fontWeight: 500,
    border: '1px solid #3190FF',
    borderRadius: 25,
    marginLeft: 10,
    boxSizing: 'border-box'
}));
const Title = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        color: '#333',
        fontSize: '1.125rem',
        fontWeight: 500,
        '& svg path': {
            fill: '#333'
        },
        '&:hover': {
            background: 'transparent'
        }
    }
}));

const schedule = [
    {
        chip: ['코칭'],
        title: '24년 1학년 1학기 심화과정',
        contents: '교육과정명',
        date: '09:00~09:30'
    },
    {
        chip: ['VOD', '평가', '과제'],
        title: '24년 1학년 1학기 심화과정',
        contents: '24년 1학년 1학기 심화과정 교육과정명',
        date: '09:00~09:30'
    }
];

function HomeScheduleComponent(props) {
    const { isLg } = useViewSize();
    return (
        <Root isLg={isLg}>
            <TitleBox>
                <DateBox>
                    2월 27일 (화) <Today>오늘</Today>
                </DateBox>
                <Title>
                    전체 일정 <RightArrowIcon />
                </Title>
            </TitleBox>
            <WeeklyDatepickerComponent />
            <ClassScheduleItemComponent schedule={schedule} />
        </Root>
    );
}

export default HomeScheduleComponent;
