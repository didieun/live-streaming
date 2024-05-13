import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FlexCenter, FlexSpace } from '../../../common/styled/CommonStyle';
import { ReactComponent as ArrowIcon } from '../../../../../assets/images/ArrowIcon.svg';
import ClassScheduleItemComponent from './ClassScheduleItemComponent';
import WeeklyDatepickerComponent from './WeeklyDatepickerComponent';
import PropTypes from 'prop-types';
import Home from './Home';

const Root = styled(Stack)(({ theme, isLg }) => ({
    width: '100%',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box',
    marginTop: 60
}));
const TitleBox = styled(FlexSpace)(({ theme }) => ({
    width: '100%',
    marginBottom: '14px',
    alignItems: 'flex-end'
}));
const DateBox = styled(FlexCenter)(({ theme }) => ({
    '& p': {
        color: '#333333',
        fontSize: '1.5rem',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    }
}));
const Today = styled('span')(({ theme }) => ({
    minWidth: 56,
    height: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00B959',
    fontSize: '1rem',
    fontWeight: 500,
    border: '1px solid #00B959',
    borderRadius: 25,
    marginLeft: 10,
    boxSizing: 'border-box'
}));
const Title = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        color: '#333',
        fontSize: '1.125rem',
        fontWeight: 500,
        padding: '0 6px',
        letterSpacing: '-0.5px',
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

const schedule = [
    {
        chip: ['실시간'],
        title: '24년 1학년 1학기 심화과정',
        contents: '교육과정명',
        date: '09:00 ~ 09:30'
    },
    {
        chip: ['실시간'],
        title: '24년 1학년 1학기 심화과정',
        contents: '교육과정명',
        date: '09:00 ~ 09:30'
    },
    {
        chip: ['코칭'],
        title: '24년 1학년 1학기 심화과정',
        contents: '교육과정명',
        date: '09:00 ~ 09:30'
    },
    {
        chip: ['VOD', '평가', '과제'],
        title: '24년 1학년 1학기 심화과정',
        contents: '24년 1학년 1학기 심화과정 교육과정명',
        date: '09:00 ~ 09:30'
    }
];

const studentSchedule = [
    {
        chip: ['실시간'],
        title: '상사에게 인정받는 비즈니스 한국어',
        contents: '이다혜',
        date: '09:00 ~ 09:30',
        checked1: false,
        checked2: false
    },
    {
        chip: ['실시간'],
        title: 'All-in-one 한국어 문법',
        contents: '최지현',
        date: '09:00 ~ 09:30',
        checked1: true,
        checked2: true
    }
];

function HomeScheduleComponent(props) {
    const { isLg } = useViewSize();
    const { isLeader } = props;

    return (
        <Root isLg={isLg}>
            <TitleBox>
                <DateBox>
                    <Typography>2월 27일 (화)</Typography>
                    <Today>오늘</Today>
                </DateBox>
                <Title disableRipple>
                    전체 일정 <ArrowIcon style={{ transform: 'rotate( -90deg )' }} />
                </Title>
            </TitleBox>
            <WeeklyDatepickerComponent />
            <ClassScheduleItemComponent schedule={isLeader ? schedule : studentSchedule} isLeader={isLeader} />
        </Root>
    );
}

HomeScheduleComponent.propTypes = {
    isLeader: PropTypes.bool
};

export default HomeScheduleComponent;
