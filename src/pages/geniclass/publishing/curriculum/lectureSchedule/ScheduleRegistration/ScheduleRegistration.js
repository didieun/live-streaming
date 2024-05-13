import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useViewSize } from '../../../../../store';
import { scheduleHeight, scheduleUserListWidth } from '../../index';
import UserListComponent from './userList/UserListComponent';
import Schedule from './schedule/Schedule';

const Container = styled(Box)(({ theme, isLg, open }) => ({
    width: isLg ? (open ? '100%' : 'calc(100% - 60px)') : 1280,
    padding: isLg ? '25px 16px 33px' : '25px 0 33px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: open ? '0 auto' : isLg ? '0 0 0 60px' : '0 auto'
}));

const ListScheduleBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    marginBottom: 15
}));

const UserListBox = styled(Box)(({ theme }) => ({
    width: `${scheduleUserListWidth}px`,
    height: `${scheduleHeight}`,
    minHeight: 450,
    borderRadius: '10px 0px 0px 10px',
    background: '#fff',
    boxShadow: '4px 1px 28px 0px rgba(0, 0, 0, 0.10)',
    position: 'relative',
    boxSizing: 'border-box',
    padding: '19px 4px 19px 17px'
}));

const ScheduleBox = styled(Box)(({ theme }) => ({
    width: `calc(100% - ${scheduleUserListWidth}px)`,
    boxSizing: 'border-box',
    background: '#fff'
}));

const ScheduleBoxIn = styled(Box)(({ theme }) => ({
    width: '100%',
    height: `${scheduleHeight}`,
    minHeight: 450,
    borderRadius: '0 10px 10px 0px',
    border: '1px solid #ECECEC',
    borderLeft: 0,
    boxSizing: 'border-box',
    background: '#fff',
    marginBottom: 25
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 400,
        letterSpacing: '-0.7px',
        marginTop: 9.5
    }
}));

function ScheduleRegistration(props) {
    const { isLg } = useViewSize();
    const { open } = props;

    return (
        <Container isLg={isLg} open={open}>
            <ListScheduleBox>
                <UserListBox>
                    <UserListComponent />
                </UserListBox>
                <ScheduleBox>
                    <ScheduleBoxIn>
                        <Schedule />
                    </ScheduleBoxIn>
                </ScheduleBox>
            </ListScheduleBox>
        </Container>
    );
}

ScheduleRegistration.propTypes = {
    open: PropTypes.bool
};

export default ScheduleRegistration;
