import React from 'react';
import styled from '@emotion/styled/macro';
import { InputAdornment, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useViewSize } from '../../../../../store';
import { IconButtonStyle, SearchInput } from '../../../common/styled/CommonStyle';
import ClearIcon from '../../../../../assets/images/ClearIcon.svg';
import { ReactComponent as SearchIcon } from '../../../../../assets/images/SearchIcon.svg';
import CardListComponent from '../home/CardListComponent';
import PropTypes from 'prop-types';
import Home from '../home/Home';

const Root = styled(Stack)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    padding: isLg ? '60px 16px' : '60px 0',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflowY: 'auto',
    boxSizing: 'border-box',
    margin: '0 auto'
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        textAlign: 'left',
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    }
}));

const SearchInputStyle = styled(SearchInput)(({ theme }) => ({
    '&.MuiFormControl-root': {
        margin: '16px 0 40px',
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
    }
}));

const CurriculumComponent = (props) => {
    const { isLg } = useViewSize();
    const { menuValue } = props;
    return (
        <Root isLg={isLg}>
            <TitleText>교육과정</TitleText>
            <SearchInputStyle
                type="search"
                label=""
                variant="outlined"
                placeholder={'키워드로 검색해 보세요.'}
                width={'500px'}
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
            <CardListComponent menuValue={menuValue} />
        </Root>
    );
};

CurriculumComponent.propTypes = {
    menuValue: PropTypes.array
};

export default CurriculumComponent;
