import React from 'react';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/ArrowIcon.svg';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Typography, List, ListItem, ListItemButton, ListItemText, Select, Stack } from '@mui/material';
import { Flex, FlexCenter, FlexColumn, Menu, SelectFormControlBox } from '../../common/styled/CommonStyle';
import KetsUpLogo from '../../../../assets/images/KetsUpLogo.png';

const Container = styled(Stack)(({ theme, isSd }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: isSd ? 'column' : 'row',
    alignItems: isSd ? 'flex-start' : 'center',
    justifyContent: 'space-between',
    background: '#fff',
    borderTop: '1px solid #D5D4DC',
    padding: isSd ? '40px 60px' : '40px 120px 40px 110px',
    boxSizing: 'border-box'
}));

const LogoBox = styled(Flex)(({ theme }) => ({
    maxWidth: 128,
    marginBottom: 14,
    '& img': {
        width: '100%'
    }
}));

const ListStyle = styled(List)(({ theme }) => ({
    '&.MuiList-root': {
        display: 'flex',
        flexDirection: 'row',
        gap: 56,
        '& .MuiListItemButton-root': {
            padding: 0,
            '&:hover': {
                backgroundColor: 'transparent'
            }
        },
        '& .MuiListItemText-root': {
            '& .MuiTypography-root': {
                color: '#4B5563',
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: '-0.28px',
                textAlign: 'left'
            }
        }
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        color: '#4B5563',
        fontSize: '0.875rem',
        fontWeight: 400,
        letterSpacing: '-0.28px',
        marginTop: 24
    }
}));

const FooterRight = styled(Flex)(({ theme, isSd }) => ({
    gap: 40,
    marginTop: isSd ? 24 : 0,
    '& .MuiFormControl-root': {
        minWidth: '142px!important',
        '& .MuiInputBase-root': {
            minHeight: '30px!important',
            height: 30
        },

        '& .MuiSelect-select': {
            fontSize: '0.875rem !important'
        },
        '& .MuiSelect-select.MuiSelect-outlined': {
            padding: '8px 24px 8px 18px!important'
        }
    }
}));

function Footer(props) {
    const { isSd } = useViewSize();
    const [filter, setFilter] = React.useState(0);
    const langList = [
        { text: '한국어' },
        { text: 'English' },
        { text: '中文' },
        { text: 'Bahasa Indonesia' },
        { text: 'tiếng việt' },
        { text: 'ภาษาไทย' },
        { text: 'Deutsch' },
        { text: 'Français' }
    ];
    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Container isSd={isSd}>
            <FlexColumn>
                <LogoBox>
                    <img src={KetsUpLogo} alt={'KetsUp Logo'} />
                </LogoBox>
                <ListStyle>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="이용약관" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="개인정보처리방침" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="고객센터" />
                        </ListItemButton>
                    </ListItem>
                </ListStyle>
                <TextStyle>KETSUP @ 2024. All rights reserved.</TextStyle>
            </FlexColumn>
            <FooterRight isSd={isSd}>
                <SelectFormControlBox variant="outlined">
                    <Select
                        id="filter"
                        value={filter}
                        onChange={handleChangeFilter}
                        IconComponent={() => (
                            <FlexCenter>
                                <ArrowIcon style={{ width: 20, height: 20, marginTop: -1, marginRight: 11 }} />
                            </FlexCenter>
                        )}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            transformOrigin: {
                                vertical: 'bottom',
                                horizontal: 'center'
                            },
                            PaperProps: {
                                sx: {
                                    '&.MuiPaper-root': {
                                        boxShadow: '0 4px 15px 0 rgba(51, 51, 51, 0.15)',
                                        border: '0',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box',
                                        marginTop: '4px',
                                        '& ul': {
                                            padding: '4px',
                                            '& li': {
                                                height: '34px',
                                                fontSize: '0.875rem'
                                            }
                                        }
                                    }
                                }
                            }
                        }}
                    >
                        {langList.map((list, i) => (
                            <Menu key={i} value={i} disableRipple>
                                {list.text}
                            </Menu>
                        ))}
                    </Select>
                </SelectFormControlBox>
            </FooterRight>
        </Container>
    );
}

export default Footer;
