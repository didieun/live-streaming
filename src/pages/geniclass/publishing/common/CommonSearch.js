import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput, IconButtonStyle } from './styled/CommonStyle';
import { InputAdornment } from '@mui/material';
import { ReactComponent as SearchIcon } from '../../../assets/images/SearchIcon.svg';

function CommonSearch(props) {
    const { width, height, placeholder, borderRadius } = props;

    return (
        <SearchInput
            label=""
            variant="outlined"
            placeholder={placeholder}
            width={width}
            height={height}
            borderRadius={borderRadius}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButtonStyle sx={{ width: 24, height: 24 }} disableRipple>
                            <SearchIcon />
                        </IconButtonStyle>
                    </InputAdornment>
                )
            }}
        />
    );
}

CommonSearch.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    placeholder: PropTypes.string,
    borderRadius: PropTypes.string
};

export default CommonSearch;
