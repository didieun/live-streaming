import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Flex, FlexColumnCenter } from '../common/styled/CommonStyle';
import TestImage from '../../../assets/images/TestImage.png';
import CommonButton from '../common/CommonButton';
import { useViewSize } from '../../../store';
import CardItemComponent from '../curriculum/home/CardItemComponent';
import MainLectureListComponent from '../main/lecture/MainLectureListComponent';
import MainEmptyComponent from '../main/empty/MainEmptyComponent';

const Container = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    padding: isLg ? '90px 16px' : '90px 0 ',
    margin: '0 auto',
    minHeight: '100vh',
    boxSizing: 'border-box'
}));

const TabsStyle = styled(Tabs)(({ theme }) => ({
    width: '100%',
    marginBottom: 20,
    '& .MuiTabs-flexContainer': {
        gap: 15
    },
    '& .MuiTab-root': {
        minWidth: 30,
        boxSizing: 'border-box',
        padding: '16px 0px',
        color: '#bbb',
        fontSize: '1.5rem',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        '&.Mui-selected': {
            color: '#333'
        }
    },
    '& .MuiTabs-indicator': {
        height: 3,
        backgroundColor: '#F5CD79'
    }
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.375rem',
        color: '#333',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        textAlign: 'left',
        marginBottom: 4,
        marginTop: 40
    }
}));

const CardList = styled(Box)(({ theme, isSl }) => ({
    width: 'calc(100% - 6px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isSl ? 10 : 20
}));

const Search = (props) => {
    const { isLg, isSl } = useViewSize();
    const [value, setValue] = React.useState(0);
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

    const items = [
        {
            pin: false,
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
        }
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container isLg={isLg}>
            <TabsStyle value={value} onChange={handleChange}>
                <Tab label="전체(4)" value={0} />
                <Tab label="교육과정(3)" value={1} />
                <Tab label="강의(1)" value={2} />
                <Tab label="태그(0)" value={3} />
            </TabsStyle>

            {value === 0 && (
                <Box>
                    <TitleText>교육과정</TitleText>
                    <CardList isSl={isSl}>
                        <CardItemComponent cardContent={cardContent} />
                    </CardList>
                    <TitleText>강의</TitleText>
                    <MainLectureListComponent items={items} />
                    <TitleText>태그</TitleText>
                    <MainEmptyComponent emptyText={'검색 결과가 없습니다.'} />
                </Box>
            )}
            {value === 1 && (
                <Box>
                    <TitleText>교육과정</TitleText>
                    <CardList isSl={isSl}>
                        <CardItemComponent cardContent={cardContent} />
                    </CardList>
                </Box>
            )}
            {value === 2 && (
                <Box>
                    <TitleText>강의</TitleText>
                    <MainLectureListComponent items={items} />
                </Box>
            )}
            {value === 3 && (
                <Box>
                    <TitleText>태그</TitleText>
                    <MainEmptyComponent emptyText={'검색 결과가 없습니다.'} />
                </Box>
            )}
        </Container>
    );
};

export default Search;
