import React from 'react';
import styled from '@emotion/styled/macro';
import { Stack } from '@mui/material';
import { Flex, IconButtonStyle } from '../../common/styled/CommonStyle';
import KetsUpLogo from '../../../../assets/images/KetsUpLogo.png';
import { ReactComponent as BellRingingIcon } from '../../../../assets/images/BellRingingIcon.svg';
import { ReactComponent as UserIcon } from '../../../../assets/images/UserIcon.svg';
import { headerHeight } from '../Home';

const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    height: `${headerHeight}px`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#fff',
    padding: '0 32px',
    boxSizing: 'border-box',
    borderBottom: '1px solid #D5D4DC',
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
    position: 'fixed',
    zIndex: 1300
}));

const LogoBox = styled(Flex)(({ theme }) => ({
    maxWidth: 128,
    '& img': {
        width: '100%'
    }
}));

const Header = () => {
    return (
        <Container>
            <LogoBox>
                <img src={KetsUpLogo} alt={'KetsUp Logo'} />
            </LogoBox>

            <Flex>
                <IconButtonStyle sx={{ width: 30, height: 30, marginRight: '24px' }} disableRipple>
                    <BellRingingIcon />
                </IconButtonStyle>
                <IconButtonStyle sx={{ width: 30, height: 30 }} disableRipple>
                    <UserIcon />
                </IconButtonStyle>
            </Flex>
        </Container>
    );
};

export default Header;
