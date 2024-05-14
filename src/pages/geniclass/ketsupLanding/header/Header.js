import React from 'react';
import styled from '@emotion/styled/macro';
import { Button, Stack, Typography } from '@mui/material';
import { Flex, FlexSpace } from '../../common/styled/CommonStyle';
import KetsUpLogo from '../../../../assets/images/KetsUpLogo.png';
import CommonButton from '../../common/CommonButton';
import { ReactComponent as UserCircleIcon } from '../../../../assets/images/UserCircleIcon.svg';
import { useViewSize } from '../../../../store';

const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    height: 78,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    boxSizing: 'border-box',
    borderBottom: '1px solid #E4E7EC'
}));

const ContainerIn = styled(FlexSpace)(({ theme }) => ({
    width: 1200,
    padding: '0 16px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('md')]: {
        width: '100%',
        padding: '0 24px'
    }
}));

const LogoBox = styled(Flex)(({ theme }) => ({
    maxWidth: 128,
    '& img': {
        width: '100%'
    },
    [theme?.breakpoints?.down('md')]: {
        maxWidth: 68
    }
}));

const MenuButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
        minWidth: 28,
        fontSize: '1rem',
        color: '#333',
        fontWeight: 600,
        letterSpacing: '-0.5px',
        background: 'transparent',
        marginRight: 40,
        '&:hover': {
            background: 'transparent'
        },
        '&:last-child': {
            marginRight: 0
        },
        [theme?.breakpoints?.down('md')]: {
            fontSize: '0.875rem',
            marginRight: 20
        }
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
        minWidth: 60,
        background: 'transparent',
        marginRight: 28,
        '&:hover': {
            background: 'transparent'
        },
        '& p': {
            fontSize: '0.875rem',
            color: '#333',
            fontWeight: 600,
            letterSpacing: '-0.5px'
        },
        '& svg': {
            marginRight: 6
        },
        [theme?.breakpoints?.down('md')]: {
            minWidth: 24,
            marginRight: 14,
            '& p': {
                display: 'none'
            },
            '& svg': {
                width: '24px !important',
                height: '24px !important',
                marginRight: 0
            }
        }
    }
}));

const Header = () => {
    const { isMd } = useViewSize();
    const items = [
        { text: '한국어LAB' },
        { text: '강사' },
        { text: '교재' },
        { text: '가격' },
        { text: 'AI 서비스' },
        { text: '무료강의・자료' },
        { text: '수강후기' }
    ];

    return (
        <Container>
            <ContainerIn>
                <LogoBox>
                    <img src={KetsUpLogo} alt={'KetsUp Logo'} />
                </LogoBox>
                {/*<Flex>*/}
                {/*    {items.map((item, i) => (*/}
                {/*        <MenuButton key={i} disableRipple>*/}
                {/*            {item.text}*/}
                {/*        </MenuButton>*/}
                {/*    ))}*/}
                {/*</Flex>*/}

                <Flex>
                    <LoginButton disableRipple>
                        <UserCircleIcon />
                        <Typography>로그인</Typography>
                    </LoginButton>

                    <CommonButton
                        width={isMd ? '95px' : '117px'}
                        height={isMd ? '32px' : '40px'}
                        text={'내 강의실'}
                        borderRadius={'999px'}
                        background={'#2F3640'}
                        color={'#fff'}
                        fontWeight={700}
                        fontSize={isMd ? '0.813rem' : '1rem'}
                        disabled={false}
                    />
                </Flex>
            </ContainerIn>
        </Container>
    );
};

export default Header;
