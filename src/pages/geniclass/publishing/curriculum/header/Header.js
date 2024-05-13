import React from 'react';
import { ReactComponent as GeNiClassLogo } from '../../../../assets/images/GeNiClassLogo.svg';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, InputAdornment, Typography, TextField } from '@mui/material';
import { IconButtonStyle, SearchInput } from '../../common/styled/CommonStyle';
import { ReactComponent as SearchIcon } from '../../../../assets/images/SearchIcon.svg';
import { ReactComponent as PencilCircleIcon } from '../../../../assets/newImages/PencilCircleIcon.svg';
import { ReactComponent as BellIcon } from '../../../../assets/newImages/BellIcon.svg';
import { ReactComponent as AlarmDefaultIcon } from '../../../../assets/newImages/BellRingingIcon.svg';
import { ReactComponent as UserIcon } from '../../../../assets/newImages/UserIcon.svg';
import { AlignCenter, ButtonIcon } from '../../../../views/new/newHeader/styles/HeaderStyle';
import { headerHeight } from '../index';
import ClearIcon from '../../../../assets/images/ClearIcon.svg';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    height: `${headerHeight}px`,
    padding: '0 32px',
    background: '#fff',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.10)',
    borderBottom: '1px solid #D5D4DC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    position: 'fixed',
    zIndex: 1300
}));

const SearchInputStyle = styled(SearchInput)(({ theme }) => ({
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

function Header(props) {
    const { isHd } = useViewSize();
    return (
        <Container>
            <AlignCenter sx={{ gap: '40px' }}>
                <GeNiClassLogo />
                <SearchInputStyle
                    type="search"
                    label=""
                    variant="outlined"
                    placeholder={'교육과정, 강의, 태그를 검색해 보세요.'}
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
            </AlignCenter>
            <AlignCenter sx={{ gap: '24px' }}>
                <ButtonIcon disableRipple sx={{ width: 30, height: 30, marginLeft: '0 !important' }}>
                    <PencilCircleIcon />
                </ButtonIcon>
                <ButtonIcon disableRipple sx={{ width: 30, height: 30, marginLeft: '0 !important' }}>
                    {/*<BellIcon/>*/}
                    <AlarmDefaultIcon />
                </ButtonIcon>
                <ButtonIcon sx={{ width: 30, height: 30, marginLeft: '0 !important' }} aria-haspopup="true" disableRipple>
                    <UserIcon />
                </ButtonIcon>
            </AlignCenter>
        </Container>
    );
}

export default Header;
