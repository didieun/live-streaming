import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Tabs, Tab } from '@mui/material';
import ScheduleList from './ScheduleList';
import { FlexColumn } from '../../common/styled/CommonStyle';
import ScheduleRegistration from './ScheduleRegistration/ScheduleRegistration';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '30px 0'
}));

const ContentsIn = styled(FlexColumn)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    margin: '0 auto',
    boxSizing: 'border-box'
}));

const TabsStyle = styled(Tabs)(({ theme, isLg }) => ({
    width: '100%',
    marginBottom: 60,
    '& .MuiTabs-flexContainer': {
        gap: 24
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
function LectureSchedule(props) {
    const { isLg } = useViewSize();
    const [value, setValue] = React.useState('강의 일정');
    const [sideBarOpen, setSideBarOpen] = React.useState(true);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Root>
            <ContentsIn isLg={isLg}>
                <TabsStyle value={value} onChange={handleChange} isLg={isLg}>
                    <Tab label="강의 일정" value="강의 일정" />
                    <Tab label="코칭 스케줄" value="코칭 스케줄" />
                </TabsStyle>
                {value === '강의 일정' && <ScheduleList />}
                {value === '코칭 스케줄' && <ScheduleRegistration open={sideBarOpen} />}
            </ContentsIn>
        </Root>
    );
}

export default LectureSchedule;
