import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Tabs, Tab, Stack } from '@mui/material';
import ScheduleList from './ScheduleList';
import LectureCompleted from './LectureCompleted';
import VodLecture from './VodLecture';
import PropTypes from 'prop-types';
import Home from '../home/Home';

const Root = styled(Stack)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: isLg ? '30px 16px' : '30px 0'
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
        backgroundColor: '#00B959'
    }
}));
function LectureSchedule(props) {
    const { isLg } = useViewSize();
    const { isLeader } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Root isLg={isLg}>
            <TabsStyle value={value} onChange={handleChange} isLg={isLg}>
                <Tab label="VOD 강의 (진행 중)" value={0} />
                <Tab label="실시간 강의 (예정)" value={1} />
                <Tab label="실시간 강의 (완료)" value={2} />
            </TabsStyle>
            {value === 0 && <VodLecture isLeader={isLeader} />}
            {value === 1 && <ScheduleList isLeader={isLeader} />}
            {value === 2 && <LectureCompleted isLeader={isLeader} />}
        </Root>
    );
}

LectureSchedule.propTypes = {
    isLeader: PropTypes.bool
};

export default LectureSchedule;
