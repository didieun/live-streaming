import React from 'react';
import { ReactComponent as GeNiClassLogo } from '../../../../assets/images/GeNiClassLogo.svg';
import { useViewSize } from '../../../../store';
import CommonButton from '../../common/CommonButton';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 78,
    background: '#fff',
    boxSizing: 'border-box',
    boxShadow: '0 -5px 28px 0 rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const ContainerIn = styled(Box)(({ theme, isHd }) => ({
    width: isHd ? '100%' : 1280,
    padding: isHd ? '0 16px' : 0,
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        fontWeight: 500,
        color: '#333'
    }
}));

const BoxWidth = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 48
}));

function Header(props) {
    const { isHd } = useViewSize();
    return (
        <Container>
            <ContainerIn isHd={isHd}>
                <GeNiClassLogo />
                <TitleText>학습기록</TitleText>
                <BoxWidth>
                    <CommonButton width={'90px'} height={'39px'} text={'닫기'} background={'#2F3640'} fontSize={'1.125rem'} />
                </BoxWidth>
            </ContainerIn>
        </Container>
    );
}

export default Header;
