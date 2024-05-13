import React from 'react';
import { ReactComponent as GeNiClassLogo } from '../../../../assets/images/GeNiClassLogo.svg';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/ArrowIcon.svg';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Select } from '@mui/material';
import { Flex, FlexCenter, FlexColumn, FlexSpace, Menu, SelectFormControlBox } from '../../common/styled/CommonStyle';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    background: '#fff',
    borderTop: '1px solid #D5D4DC',
    boxSizing: 'border-box'
}));

const Wrap = styled(FlexSpace)(({ theme, isLg, isSd }) => ({
    width: isLg ? '100%' : 1700,
    margin: '0 auto',
    padding: isSd ? '40px 24px' : '80px 64px',
    boxSizing: 'border-box',
    flexDirection: isSd ? 'column' : 'row',
    alignItems: isSd ? 'flex-start' : 'center'
}));

const ListStyle = styled(List)(({ theme }) => ({
    '&.MuiList-root': {
        display: 'flex',
        flexDirection: 'row',
        gap: 80,
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
                textAlign: 'left'
            }
        }
    }
}));

const FooterRight = styled(Flex)(({ theme, isSd }) => ({
    gap: 40,
    marginTop: isSd ? 24 : 0,
    '& .MuiFormControl-root': {
        minWidth: '100px!important',
        '& .MuiInputBase-root': {
            minHeight: '30px!important',
            height: 30
        },
        '& .MuiSelect-select.MuiSelect-outlined': {
            padding: '8px 24px 8px 18px!important'
        }
    },
    '& .MuiTypography-body1': {
        color: '#4B5563',
        fontSize: '0.875rem'
    }
}));

function Footer(props) {
    const { isLg, isSd } = useViewSize();
    const [filter, setFilter] = React.useState(0);
    const langList = [{ text: '한국어' }, { text: '영어' }];
    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };
    return (
        <Container>
            <Wrap isLg={isLg} isSd={isSd}>
                <FlexColumn sx={{ gap: '24px' }}>
                    <GeNiClassLogo />
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
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                },
                                transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'left'
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
                    <Typography variant="body1">©2024 GENICLASS</Typography>
                </FooterRight>
            </Wrap>
        </Container>
    );
}

export default Footer;
