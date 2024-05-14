import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Button, MenuItem, MenuList, Popover, Stack, Typography } from '@mui/material';
import { ReactComponent as GlobeIcon } from '../../../../assets/images/GlobeIcon.svg';
import { ReactComponent as LanguageCaretDown } from '../../../../assets/images/LanguageCaretDown.svg';
import { useViewSize } from '../../../../store';
import { Flex } from '../../common/styled/CommonStyle';

const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#29272E',
    boxSizing: 'border-box',
    padding: '80px 0',
    borderBottom: '1px solid #E4E7EC',
    [theme?.breakpoints?.down('md')]: {
        padding: '40px 0'
    }
}));

const ContainerIn = styled(Box)(({ theme }) => ({
    width: 1200,
    padding: '0 16px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    [theme?.breakpoints?.down('md')]: {
        display: 'none'
    }
}));

const TabletContainerIn = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '0 24px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.up('md')]: {
        display: 'none'
    }
}));

const TabletBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 59
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400,
        lineHeight: '19.6px',
        letterSpacing: '-0.5px',
        textAlign: 'left'
    }
}));

const LineStyle = styled(Box)(({ theme }) => ({
    width: 1,
    height: 117,
    background: 'linear-gradient(0deg, #98A2B3 0%, #98A2B3 100%), linear-gradient(0deg, #D0D5DD 0%, #D0D5DD 100%), #E4E7EC'
}));

const LanguageButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 8,
        minWidth: 135,
        minHeight: 34,
        background: '#fff',
        borderRadius: 4,
        border: '1px solid #E4E7EC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& p': {
            fontSize: '0.875rem',
            color: '#0C111D',
            fontWeight: 400,
            letterSpacing: '-0.5px',
            paddingLeft: 6,
            paddingRight: 18
        },
        '&:hover': {
            background: '#fff'
        },
        [theme?.breakpoints?.down('md')]: {
            fontSize: '0.875rem',
            marginRight: 20
        }
    }
}));

const MenuBox = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px 80px',
    justifyItems: 'start'
}));

const MenuButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
        minWidth: 28,
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 600,
        letterSpacing: '-0.5px',
        background: 'transparent',
        textAlign: 'left',
        '&:hover': {
            background: 'transparent'
        }
    }
}));

const ChipBox = styled(Box)(({ theme }) => ({
    minWidth: 36,
    height: 20,
    background: '#D6FFEA',
    borderRadius: 4,
    marginLeft: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 6px',
    boxSizing: 'border-box',
    '& p': {
        fontSize: '0.625rem',
        color: '#00B959',
        fontWeight: 600,
        letterSpacing: '-0.352px'
    }
}));

const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: 137,
        boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: 4,
        background: '#fff',
        border: 0,
        '& .MuiList-root': {
            padding: 5,
            '& .MuiButtonBase-root': {
                fontSize: '0.875rem',
                height: 30,
                color: '#444343',
                fontWeight: 400,
                padding: '0 12px',
                boxSizing: 'border-box',
                '&:hover': {
                    background: '#f5f6fa',
                    borderRadius: 4
                }
            }
        }
    }
}));

const Footer = () => {
    const { isMd } = useViewSize();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [language, setLanguage] = React.useState('Language');
    const items = [
        { text: '한국어LAB' },
        { text: '가격' },
        { text: '사이트맵' },
        { text: '강사' },
        { text: 'AI 서비스' },
        { text: '고객센터' },
        { text: '교재' },
        { text: '무료강의・자료' }
    ];

    const languageItems = [{ text: '한국어' }, { text: '영어' }, { text: '중국어' }, { text: '일본어' }];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickMenu = (value) => {
        setLanguage(value);
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Container>
            <TabletContainerIn>
                {/*<TabletBox>*/}
                {/*    <MenuBox>*/}
                {/*        {items.map((item, i) => (*/}
                {/*            <MenuButton key={i} disableRipple>*/}
                {/*                {item.text}*/}
                {/*                {item.text === 'AI 서비스' && (*/}
                {/*                    <ChipBox>*/}
                {/*                        <Typography>BETA</Typography>*/}
                {/*                    </ChipBox>*/}
                {/*                )}*/}
                {/*            </MenuButton>*/}
                {/*        ))}*/}
                {/*    </MenuBox>*/}
                {/*    <LineStyle />*/}
                {/*    <LanguageButton onClick={handleClick} disableRipple>*/}
                {/*        <Flex>*/}
                {/*            <GlobeIcon />*/}
                {/*            <Typography>{language}</Typography>*/}
                {/*        </Flex>*/}

                {/*        <LanguageCaretDown />*/}
                {/*    </LanguageButton>*/}
                {/*</TabletBox>*/}
                <Box>
                    <TextStyle>
                        주식회사 그라운드KETSUP | 사업자번호 : 120-12-34567
                        <br />
                        대표이사 : 한승희 | 주소 : 서울 강남구 삼성로 100길 24-1
                        <br />
                        고객 문의 : contact@kets-up.com
                    </TextStyle>
                    {/*<TextStyle sx={{ margin: '40px 0 30px' }}>개인정보처리방침 | 이용약관</TextStyle>*/}
                    <TextStyle sx={{ margin: '40px 0 0' }}>KETSUP @ 2024. All rights reserved.</TextStyle>
                </Box>
            </TabletContainerIn>

            <ContainerIn>
                <Box>
                    <TextStyle>
                        주식회사 그라운드KETSUP | 사업자번호 : 120-12-34567
                        <br />
                        대표이사 : 한승희 | 주소 : 서울 강남구 삼성로 100길 24-1
                        <br />
                        고객 문의 : contact@kets-up.com
                    </TextStyle>
                    {/*<TextStyle sx={{ margin: '40px 0 30px' }}>개인정보처리방침 | 이용약관</TextStyle>*/}
                    <TextStyle sx={{ margin: '40px 0 0' }}>KETSUP @ 2024. All rights reserved.</TextStyle>
                </Box>
                {/*<MenuBox>*/}
                {/*    {items.map((item, i) => (*/}
                {/*        <MenuButton key={i} disableRipple>*/}
                {/*            {item.text}*/}
                {/*            {item.text === 'AI 서비스' && (*/}
                {/*                <ChipBox>*/}
                {/*                    <Typography>BETA</Typography>*/}
                {/*                </ChipBox>*/}
                {/*            )}*/}
                {/*        </MenuButton>*/}
                {/*    ))}*/}
                {/*</MenuBox>*/}
                {/*<LineStyle />*/}
                {/*<LanguageButton onClick={handleClick} disableRipple>*/}
                {/*    <Flex>*/}
                {/*        <GlobeIcon />*/}
                {/*        <Typography>{language}</Typography>*/}
                {/*    </Flex>*/}

                {/*    <LanguageCaretDown />*/}
                {/*</LanguageButton>*/}
            </ContainerIn>

            <PopoverBox
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
            >
                <MenuList>
                    {languageItems.map((item, i) => (
                        <MenuItem onClick={() => handleClickMenu(item.text)} key={i}>
                            {item.text}
                        </MenuItem>
                    ))}
                </MenuList>
            </PopoverBox>
        </Container>
    );
};

export default Footer;
