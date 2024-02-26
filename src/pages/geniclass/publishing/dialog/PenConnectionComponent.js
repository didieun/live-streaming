import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { ReactComponent as ButtonAddIcon } from '../../../assets/images/ButtonAddIcon.svg';
import { ReactComponent as ArrowsCounterClockwiseIcon } from '../../../assets/images/ArrowsCounterClockwiseIcon.svg';
import { ReactComponent as PenCheckIcon } from '../../../assets/images/PenCheckIcon.svg';

const Container = styled(Box)(({ theme, isSd }) => ({}));

const TitleText = styled(Typography)(({ theme, isSd }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 500,
        marginBottom: 25,
        '& span': {
            color: '#1976D2',
            fontWeight: 700
        }
    }
}));

export const PenButtonConnection = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 357,
        height: 50,
        background: '#1976D2',
        padding: 16,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        '&:hover': {
            background: '#1976D2'
        },
        '& p': {
            fontSize: '1.125rem',
            color: '#fff',
            fontWeight: 400,
            marginLeft: 8
        }
    }
}));

function PenConnectionComponent() {
    return (
        <Container>
            <TitleText>
                [&nbsp;<span>참여자명</span> 학생&nbsp;]
            </TitleText>
            <PenButtonConnection disableRipple>
                <ButtonAddIcon />
                <Typography>펜 연결</Typography>

                {/*<ArrowsCounterClockwiseIcon />*/}
                {/*<Typography>펜 연결중...</Typography>*/}

                {/*<PenCheckIcon />*/}
                {/*<Typography>데이터 연결 성공</Typography>*/}
            </PenButtonConnection>
        </Container>
    );
}

export default PenConnectionComponent;
