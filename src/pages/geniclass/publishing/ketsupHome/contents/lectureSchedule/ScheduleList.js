import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Stack, Typography } from '@mui/material';
import WeeklyDatepickerComponent_Backup from '../home/WeeklyDatepickerComponent';
import ScheduleListDetailComponent from './ScheduleListDetailComponent';
import { FlexCenter, FlexSpace } from '../../../common/styled/CommonStyle';
import PropTypes from 'prop-types';
import VodLecture from './VodLecture';

const Root = styled(Stack)(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box'
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

function LectureSchedule(props) {
    const { isLg } = useViewSize();
    const { isLeader } = props;
    const valueList = [
        {
            chip: ['실시간'],
            title: '24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 ',
            contents: '교육과정명',
            startTime: '09:00',
            endTime: '09:30'
        },
        {
            chip: ['실시간'],
            title: '24년 1학년 1학기 심화과정',
            contents: '24년 1학년 1학기 심화과정 교육과정명',
            startTime: '10:00',
            endTime: '12:30'
        },
        {
            chip: ['실시간'],
            title: '24년 1학년 1학기 심화과정',
            contents: '교육과정명',
            startTime: '09:00',
            endTime: '09:30'
        },
        {
            chip: ['실시간'],
            title: '24년 1학년 1학기 심화과정',
            contents: '24년 1학년 1학기 심화과정 교육과정명',
            startTime: '10:00',
            endTime: '12:30'
        }
    ];

    const studentValueList = [
        {
            chip: ['실시간'],
            title: '상사에게 인정받는 비즈니스 한국어',
            name: '국지현',
            contents: '국어국문학 전공 박사',
            startTime: '09:00',
            endTime: '09:30',
            checked1: false,
            checked2: false
        },
        {
            chip: ['실시간'],
            title: '상사에게 인정받는 비즈니스 한국어',
            name: '강사 이름',
            contents: '전공 학위',
            startTime: '10:00',
            endTime: '12:30',
            checked1: true,
            checked2: true
        },
        {
            chip: ['실시간'],
            title: '상사에게 인정받는 비즈니스 한국어',
            subText: 'Febyriani Elfida Trihtarani',
            name: '강사 이름',
            contents: '전공 학위',
            startTime: '09:00',
            endTime: '09:30',
            checked1: true,
            checked2: true
        }
    ];

    return (
        <Root>
            <TitleBox>
                <DateBox>
                    <Typography>2월 27일 (화)</Typography>
                    <Today>오늘</Today>
                </DateBox>
            </TitleBox>
            <WeeklyDatepickerComponent_Backup />
            <ScheduleListDetailComponent isLeader={isLeader} items={isLeader ? valueList : studentValueList} />
        </Root>
    );
}

LectureSchedule.propTypes = {
    isLeader: PropTypes.bool
};

export default LectureSchedule;
