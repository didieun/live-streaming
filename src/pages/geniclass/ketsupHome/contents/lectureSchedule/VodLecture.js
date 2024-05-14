import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Stack } from '@mui/material';
import VodLectureDetailComponent from './VodLectureDetailComponent';
import PropTypes from 'prop-types';
import LectureSchedule from './LectureSchedule';

const Root = styled(Stack)(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box'
}));

function VodLecture(props) {
    const { isLg } = useViewSize();
    const { isLeader } = props;

    const valueList = [
        {
            chip: ['VOD'],
            title: '24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 ',
            contents: '교육과정명',
            time: '18:40'
        },
        {
            chip: ['VOD'],
            title: '24년 1학년 1학기 심화과정',
            contents: '24년 1학년 1학기 심화과정 교육과정명',
            time: '18:40'
        },
        {
            chip: ['VOD'],
            title: '24년 1학년 1학기 심화과정',
            contents: '교육과정명',
            time: '18:40'
        },
        {
            chip: ['VOD'],
            title: '24년 1학년 1학기 심화과정',
            contents: '24년 1학년 1학기 심화과정 교육과정명',
            time: '18:40'
        }
    ];

    const studentValueList = [
        {
            chip: ['VOD'],
            title: '상사에게 인정받는 비즈니스 한국어',
            name: '국지현',
            contents: '국어국문학 전공 박사',
            checked1: false,
            checked2: false
        },
        {
            chip: ['VOD'],
            title: '상사에게 인정받는 비즈니스 한국어',
            name: '강사 이름',
            contents: '전공 학위',
            checked1: true,
            checked2: true
        },
        {
            chip: ['VOD'],
            title: '상사에게 인정받는 비즈니스 한국어',
            subText: 'Febyriani Elfida Trihtarani',
            name: '강사 이름',
            contents: '전공 학위',
            checked1: true,
            checked2: true
        }
    ];

    return (
        <Root>
            <VodLectureDetailComponent isLeader={isLeader} items={isLeader ? valueList : studentValueList} />
        </Root>
    );
}

VodLecture.propTypes = {
    isLeader: PropTypes.bool
};

export default VodLecture;
