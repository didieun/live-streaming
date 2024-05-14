import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { ReactComponent as ButtonAddIcon } from '../../../assets/images/ButtonAddIcon.svg';
import { ReactComponent as ArrowsCounterClockwiseIcon } from '../../../assets/images/ArrowsCounterClockwiseIcon.svg';
import { ReactComponent as PenCheckIcon } from '../../../assets/images/PenCheckIcon.svg';
import CommonButton from '../common/CommonButton';

const Container = styled(Box)(({ theme }) => ({}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#333',
        fontWeight: 500,
        marginBottom: 33,
        '& span': {
            color: '#1976D2'
        }
    }
}));

export const PenButtonConnection = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 357,
        height: 50,
        background: '#3190FF',
        padding: 16,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        '&:hover': {
            background: '#3190FF'
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
            <CommonButton
                width={'357px'}
                height={'50px'}
                text={'펜 연결'}
                // text={'펜 연결중...'}
                // text={'데이터 연결 성공'}
                background={'#3190FF'}
                color={'#fff'}
                fontSize={'1.125rem'}
                disabled={false}
                startIcon={<ButtonAddIcon />}
                // startIcon={<ArrowsCounterClockwiseIcon />}
                // startIcon={<PenCheckIcon />}
            />
        </Container>
    );
}

export default PenConnectionComponent;
