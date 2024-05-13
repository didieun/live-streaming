import React from 'react';
import styled from '@emotion/styled/macro';
import { Stack, Typography } from '@mui/material';
import { FlexCenter, FlexColumnCenter } from '../../common/styled/CommonStyle';
import KetsUpTextImage from '../../../../assets/images/KetsUpTextImage.svg';

const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(90deg, #6EC698 0%, #6EC699 100%)',
    boxSizing: 'border-box'
}));

const ContainerBk = styled(FlexCenter)(({ theme }) => ({
    width: '100%',
    padding: '55px 0 ',
    boxSizing: 'border-box',
    backgroundImage: `url(${KetsUpTextImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '25%',
    backgroundPosition: 'bottom -30px left 5%',
    [theme?.breakpoints?.up('ul')]: {
        backgroundSize: 'unset'
    },
    [theme?.breakpoints?.down('md')]: {
        padding: '30px 0',
        backgroundPosition: 'top 15px left 20px'
    },
    [theme?.breakpoints?.down('sm')]: {
        padding: '14px 0',
        backgroundSize: '35%',
        backgroundPosition: 'top 0px left 3%'
    }
}));

const ContainerIn = styled(FlexColumnCenter)(({ theme }) => ({
    width: 1200,
    padding: '0 16px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('md')]: {
        width: '100%',
        padding: '0 24px'
    },
    [theme?.breakpoints?.down('sm')]: {
        padding: '0 10px'
    }
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '2.625rem',
        color: '#3B5346',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        lineHeight: 'normal',
        textAlign: 'center',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        '& span': {
            color: '#fff'
        },
        [theme?.breakpoints?.down('sm')]: {
            fontSize: '1.625rem'
        }
    }
}));

const TextContentsComponent = () => {
    return (
        <Container>
            <ContainerBk>
                <ContainerIn>
                    <TitleText>
                        <span>KETSUP에서</span>
                        <br />
                        온라인 한국어학당을 만나보세요!
                    </TitleText>
                </ContainerIn>
            </ContainerBk>
        </Container>
    );
};

export default TextContentsComponent;
