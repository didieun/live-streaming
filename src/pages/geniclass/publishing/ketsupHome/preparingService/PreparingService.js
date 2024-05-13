import React from 'react';
import styled from '@emotion/styled/macro';
import { Stack, Typography } from '@mui/material';
import { ReactComponent as PreparingServiceIcon } from '../../../../assets/images/PreparingServiceIcon.svg';

const Root = styled(Stack)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box'
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '2rem',
        color: '#000',
        letterSpacing: '-0.5px',
        fontWeight: 400,
        marginTop: 10,
        '& span': {
            fontWeight: 700
        }
    }
}));

function PreparingService(props) {
    return (
        <Root>
            <PreparingServiceIcon />
            <TextStyle>
                <span>서비스 준비 중</span>입니다.
            </TextStyle>
        </Root>
    );
}

PreparingService.propTypes = {};

export default PreparingService;
