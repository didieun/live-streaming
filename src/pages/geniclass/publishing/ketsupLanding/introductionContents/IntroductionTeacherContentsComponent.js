import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Stack, Typography } from '@mui/material';
import { FlexSpace } from '../../common/styled/CommonStyle';
import LandingMemojis from '../../../../assets/images/LandingMemojis.png';
import DotImage from '../../../../assets/images/DotImage.png';
import LandingTeacherBackImage from '../../../../assets/images/LandingTeacherBackImage.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import '../animation/animate.css';

const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: '#101828',
    padding: '208px 0 80px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('md')]: {
        padding: '60px 0'
    },
    [theme?.breakpoints?.down('sm')]: {
        padding: '60px 0 20px'
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
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
}));

const TextBox = styled(Box)(({ theme }) => ({
    [theme?.breakpoints?.down('md')]: {
        paddingBottom: 40
    }
}));

const CharacterBox = styled(Box)(({ theme }) => ({
    width: 150,
    height: 150,
    paddingBottom: 10,
    overflow: 'hidden',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    [theme?.breakpoints?.down('md')]: {
        paddingBottom: 0
    },
    [theme?.breakpoints?.down('sm')]: {
        width: 80,
        height: 80
    }
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '3rem',
        color: '#fff',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        lineHeight: 'normal',
        textAlign: 'left',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        [theme?.breakpoints?.down('md')]: {
            fontSize: '2.625rem',
            paddingTop: 0
        },
        [theme?.breakpoints?.down('sm')]: {
            fontSize: '1.75rem'
        }
    }
}));

const ImageBackBox = styled(Box)(({ theme }) => ({
    width: 743,
    aspectRatio: '9/6',
    backgroundImage: `url(${DotImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    [theme?.breakpoints?.down('md')]: {
        width: '100%'
    },
    [theme?.breakpoints?.down('sm')]: {
        backgroundSize: '80%'
    }
}));

const ImageBox = styled(Box)(({ theme }) => ({
    width: 673,
    aspectRatio: '9/6',
    borderRadius: '200px 0 0 0',
    background: '#fff',
    border: '1px solid #475467',
    boxShadow: '0px 4px 10px 0px rgba(98, 101, 114, 0.25)',
    overflow: 'hidden',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    [theme?.breakpoints?.down('md')]: {
        width: 'calc(100% - 60px)'
    },
    [theme?.breakpoints?.down('sm')]: {
        borderRadius: '80px 0 0 0'
    }
}));

const IntroductionTeacherContentsComponent = () => {
    return (
        <Container>
            <ContainerIn>
                <TextBox>
                    <CharacterBox>
                        <img src={LandingMemojis} alt={'캐릭터 이미지'} />
                    </CharacterBox>
                    <TitleText>
                        당신의 방으로
                        <br /> 찾아오는
                        <br /> 한국어 강사를
                        <br /> 기다리고 계셨나요?
                    </TitleText>
                </TextBox>
                <ImageBackBox>
                    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" initiallyVisible={true} duration={1} delay={0}>
                        <ImageBox>
                            <img src={LandingTeacherBackImage} alt={'공부하는 여자'} />
                        </ImageBox>
                    </ScrollAnimation>
                </ImageBackBox>
            </ContainerIn>
        </Container>
    );
};

export default IntroductionTeacherContentsComponent;
