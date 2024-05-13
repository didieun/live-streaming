import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import GroupMainComponent from '../../../views/class/GroupMainComponent';

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#fff',
    boxSizing: 'border-box'
}));

const Main = () => {
    return (
        <Container>
            <GroupMainComponent />
        </Container>
    );
};

export default Main;
