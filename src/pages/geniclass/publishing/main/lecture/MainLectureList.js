import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { FlexSpace } from '../../common/styled/CommonStyle';
import PropTypes from 'prop-types';
import MainLectureListComponent from './MainLectureListComponent';

const Root = styled(Box)(({ theme }) => ({
    marginBottom: 100
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.375rem',
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

const MainLectureList = (props) => {
    const { handleChangeTab } = props;
    const items = [
        {
            pin: true,
            coaching: true,
            vod: false,
            evaluation: false,
            assignment: false,
            survey: false,
            type: true,
            record: true,
            title: '24년 1학년 1학기 심화과정',
            date: '2024.03.19 10:00 ~ 11:30',
            vodTime: '18:40',
            state: '진행중',
            coachingBtn: true,
            contentsBtn: true,
            lecture: true,
            lock: false
        },
        {
            pin: false,
            coaching: false,
            vod: true,
            evaluation: true,
            assignment: true,
            survey: false,
            type: true,
            record: false,
            title: '24년 1학년 1학기 심화과정',
            date: '2024.03.19 10:00 ~ 11:30',
            vodTime: '18:40',
            state: '예정',
            coachingBtn: false,
            contentsBtn: false,
            lecture: true,
            lock: false
        },
        {
            pin: false,
            coaching: false,
            vod: false,
            evaluation: false,
            assignment: false,
            survey: true,
            type: false,
            record: true,
            title: '24년 1학년 1학기 심화과정',
            date: '2024.03.19 10:00 ~ 11:30',
            vodTime: '18:40',
            state: '종료',
            coachingBtn: false,
            contentsBtn: false,
            lecture: false,
            lock: false
        },
        {
            pin: false,
            coaching: false,
            vod: true,
            evaluation: true,
            assignment: false,
            survey: false,
            type: false,
            record: false,
            title: '24년 1학년 1학기 심화과정',
            date: '2024.03.19 10:00 ~ 11:30',
            vodTime: '18:40',
            state: '임시저장',
            coachingBtn: false,
            contentsBtn: true,
            lecture: true,
            lock: true
        }
    ];

    return (
        <Root>
            <Box sx={{ marginTop: '40px' }}>
                <FlexSpace sx={{ marginBottom: '0.875rem' }}>
                    <TitleText>토픽(소주제)</TitleText>
                    <SubText>강의 2개 • VOD 2개 (21분)</SubText>
                </FlexSpace>
                <MainLectureListComponent items={items} handleChangeTab={handleChangeTab} />
            </Box>
        </Root>
    );
};

MainLectureList.propTypes = {
    handleChangeTab: PropTypes.func
};

export default MainLectureList;
