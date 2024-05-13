import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Stack, Typography } from '@mui/material';
import { FlexColumnCenter } from '../../common/styled/CommonStyle';
import AirplaneIcon from '../../../../assets/images/AirplaneIcon.png';
import LineBkImage from '../../../../assets/images/LineBkImage.png';
import LandingLectureImage from '../../../../assets/images/LandingLectureImage.png';
import WaveBkImage from '../../../../assets/images/WaveBkImage.png';
import ScrollAnimation from 'react-animate-on-scroll';
import '../animation/animate.css';

const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: '#101828',
    backgroundImage: `url(${LineBkImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    padding: '168px 0 132px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('md')]: {
        backgroundSize: '30%',
        padding: '148px 0 60px'
    },
    [theme?.breakpoints?.down('sm')]: {
        padding: '90px 0 60px'
    }
}));

const ContainerWaveBk = styled(Stack)(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundImage: `url(${WaveBkImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom 200px left 10%',
    display: 'flex',
    alignItems: 'center',
    [theme?.breakpoints?.down('md')]: {
        backgroundSize: '30%',
        backgroundPosition: 'bottom 150px left 0'
    }
}));

const ContainerIn = styled(FlexColumnCenter)(({ theme }) => ({
    width: 1200,
    padding: '0 16px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('hd')]: {
        padding: '0 30px'
    },
    [theme?.breakpoints?.down('md')]: {
        width: '100%',
        padding: '0 24px'
    }
}));

const TextBox = styled(Box)(({ theme }) => ({
    paddingBottom: 40,
    position: 'relative',
    [theme?.breakpoints?.down('md')]: {
        paddingBottom: 40
    }
}));

const CharacterBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: -40,
    left: -10,
    width: 100,
    height: 100,
    overflow: 'hidden',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    [theme?.breakpoints?.down('md')]: {
        width: 90,
        height: 90
    },
    [theme?.breakpoints?.down('sm')]: {
        top: -20,
        left: 5,
        width: 50,
        height: 50
    }
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '3rem',
        color: '#fff',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        lineHeight: 'normal',
        textAlign: 'center',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        '& span': {
            color: '#00B959'
        },
        [theme?.breakpoints?.down('md')]: {
            fontSize: '2.625rem'
        },
        [theme?.breakpoints?.down('sm')]: {
            fontSize: '1.75rem'
        }
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        lineHeight: 'normal',
        textAlign: 'center',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        marginTop: 30,
        [theme?.breakpoints?.down('md')]: {
            fontSize: '1.125rem',
            marginTop: 24
        },
        [theme?.breakpoints?.down('sm')]: {
            lineHeight: '24px',
            fontSize: '1rem'
        }
    }
}));

const ImageBackBox = styled(Box)(({ theme }) => ({
    width: 1168,
    aspectRatio: '9/5.7',
    border: '1px solid #475467',
    overflow: 'hidden',
    marginBottom: 80,
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    [theme?.breakpoints?.down('hd')]: {
        width: '100%'
    },
    [theme?.breakpoints?.down('md')]: {
        width: '100%',
        marginBottom: 40
    }
}));

const IntroductionLectureContentsComponent = () => {
    return (
        <Container>
            <ContainerWaveBk>
                <ContainerIn>
                    <TextBox>
                        <CharacterBox>
                            <img src={AirplaneIcon} alt={'캐릭터 이미지'} />
                        </CharacterBox>
                        <TitleText>
                            한국에 가지 않고도
                            <br /> 어학당 강의를 들을 수 있다면?
                        </TitleText>
                    </TextBox>
                    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" duration={1} delay={0}>
                        <ImageBackBox>
                            <img src={LandingLectureImage} alt={'이미지'} />
                        </ImageBackBox>
                    </ScrollAnimation>
                    <TitleText>
                        당신이 꿈꾸던 한국어학당을
                        <br />
                        <span>KETSUP</span>에서!
                    </TitleText>
                    <TextStyle>
                        KETSUP의 강사들은 모두 한국어 교원 인증을 받은 전문 한국어 강사입니다.
                        <br />
                        한국어학당과 동일한 품질의 한국어 강의는 오직 KETSUP에서만 들을 수 있습니다.
                    </TextStyle>
                </ContainerIn>
            </ContainerWaveBk>
        </Container>
    );
};

export default IntroductionLectureContentsComponent;
