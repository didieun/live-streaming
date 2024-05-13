import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FlexSpace } from '../../common/styled/CommonStyle';
import LandingVideo2 from '../../../../assets/video/LandingVideo2.mp4';
import LandingVideo from '../../../../assets/video/LandingVideo.mov';

const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: '#F9FAFB',
    padding: '155px 0 130px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('md')]: {
        padding: '70px 0 60px'
    }
}));

const ContainerIn = styled(FlexSpace)(({ theme }) => ({
    width: 1200,
    padding: '0 16px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('hd')]: {
        padding: '0 30px'
    },
    [theme?.breakpoints?.down('md')]: {
        width: '100%',
        padding: '0 24px',
        flexDirection: 'column'
    }
}));

const TextBox = styled(Box)(({ theme }) => ({
    width: 361,
    [theme?.breakpoints?.down('md')]: {
        width: 460,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    [theme?.breakpoints?.down('sm')]: {
        width: '100%'
    }
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '3rem',
        color: '#0C111D',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        lineHeight: 'normal',
        textAlign: 'left',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        [theme?.breakpoints?.down('md')]: {
            fontSize: '2.625rem',
            textAlign: 'center'
        },
        [theme?.breakpoints?.down('sm')]: {
            fontSize: '1.75rem'
        }
    }
}));

const TextStyle = styled(TitleText)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.25rem',
        color: '#667085',
        fontWeight: 400,
        padding: '27px 0',
        [theme?.breakpoints?.down('md')]: {
            fontSize: '1.125rem',
            padding: '14px 0'
        },
        [theme?.breakpoints?.down('sm')]: {
            fontSize: '1rem'
        }
    }
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 215,
        height: 61,
        borderRadius: 999,
        padding: '0 16px',
        boxSizing: 'border-box',
        background: 'linear-gradient(90deg, #00B959 0%, #54D290 100%)',
        '& p': {
            fontSize: '1.125rem',
            color: '#fff',
            fontWeight: 700,
            letterSpacing: '-0.5px',
            lineHeight: 'normal',
            textAlign: 'left'
        },
        '&:hover': {
            background: 'linear-gradient(90deg, #00B959 0%, #54D290 100%)'
        },
        [theme?.breakpoints?.down('sm')]: {
            height: 48
        }
    }
}));

const VideoBox = styled(Box)(({ theme }) => ({
    width: 754,
    aspectRatio: 9 / 4.7,
    borderRadius: 20,
    background: '#fff',
    boxShadow: '0px 0px 20px 0px rgba(98, 101, 114, 0.40)',
    overflow: 'hidden',
    [theme?.breakpoints?.down('md')]: {
        width: '100%',
        marginTop: 40
    },
    '& video': {
        width: '100%'
    },
    [theme?.breakpoints?.down('sm')]: {
        borderRadius: 10
    }
}));

const VideoContentsComponent = () => {
    return (
        <Container>
            <ContainerIn>
                <TextBox>
                    <TitleText>
                        전문 한국어 강사와 <br />
                        함께하는 화상 한국어 강의
                    </TitleText>
                    <TextStyle>당신의 방으로 찾아가는 한국어학당</TextStyle>
                    <ButtonStyle disableRipple>
                        <Typography>프로모션 강의 신청하기</Typography>
                    </ButtonStyle>
                </TextBox>
                <VideoBox>
                    <video muted autoPlay loop>
                        <source src={LandingVideo} />
                    </video>
                </VideoBox>
            </ContainerIn>
        </Container>
    );
};

export default VideoContentsComponent;
