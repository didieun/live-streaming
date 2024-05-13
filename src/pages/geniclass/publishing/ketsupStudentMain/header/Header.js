import React from 'react';
import styled from '@emotion/styled/macro';
import { InputAdornment, Stack } from '@mui/material';
import { Flex, IconButtonStyle, SearchInput } from '../../common/styled/CommonStyle';
import KetsUpLogo from '../../../../assets/images/KetsUpLogo.png';
import { ReactComponent as BellRingingIcon } from '../../../../assets/images/BellRingingIcon.svg';
import { ReactComponent as UserIcon } from '../../../../assets/images/UserIcon.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/images/SearchIcon.svg';
import { headerHeight } from '../index';
import ClearIcon from '../../../../assets/images/ClearIcon.svg';

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

const SearchInputStyle = styled(SearchInput)(({ theme }) => ({
    '&.MuiFormControl-root': {
        marginLeft: 42
    },
    '& .MuiInputBase-root': {
        background: '#f5f6fa'
    },
    '& input': {
        fontSize: '0.875rem',
        color: '#737373',
        letterSpacing: '-0.5px',
        '&::placeholder': {
            color: '#737373!important'
        }
    },
    '& input[type="search"]::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
        height: 24,
        width: 24,
        borderRadius: '50em',
        background: `url(${ClearIcon})`,
        backgroundSize: 'contain',
        opacity: '0',
        pointerEvents: 'none',
        cursor: 'pointer'
    },
    '& input[type="search"]:focus::-webkit-search-cancel-button': {
        opacity: 1,
        pointerEvents: 'all'
    },
    '& .MuiOutlinedInput-notchedOutline': {
        height: 49,
        top: '-6px !important',
        left: '-1px !important',
        border: '1px solid #f5f6fa !important'
    },
    '& .MuiInputBase-root.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #3190FF !important'
        }
    }
}));

const Header = () => {
    return (
        <Container>
            <Flex>
                <LogoBox>
                    <img src={KetsUpLogo} alt={'KetsUp Logo'} />
                </LogoBox>
                <SearchInputStyle
                    type="search"
                    label=""
                    variant="outlined"
                    placeholder={'강사, 강의 등을 검색해 보세요.'}
                    width={'320px'}
                    height={'42px'}
                    borderRadius={'42px'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButtonStyle sx={{ width: 18, height: 18 }} disableRipple>
                                    <SearchIcon />
                                </IconButtonStyle>
                            </InputAdornment>
                        )
                    }}
                />
            </Flex>

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
