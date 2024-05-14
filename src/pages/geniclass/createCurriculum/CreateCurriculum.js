import React from 'react';
// import GroupCreateComponent from '../../../views/myRoom/GroupCreateComponent';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#fff',
    boxSizing: 'border-box'
}));

const CreateCurriculum = () => {
    return (
        <Container>
            {/*<GroupCreateComponent />*/}
        </Container>
    );
};

export default CreateCurriculum;
