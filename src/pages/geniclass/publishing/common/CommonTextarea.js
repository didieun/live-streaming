import React from 'react';
import PropTypes from 'prop-types';
import { Select, Box } from '@mui/material';
import { ReactComponent as ArrowDownIcon } from '../../../assets/images/ArrowDownIcon.svg';
import { Menu, SelectFormControlBox, StyledInput, StyledTextarea, TextareaBox } from './styled/CommonStyle';

function CommonTextarea(props) {
    const { width, placeholder, minRows, maxRows } = props;

    return (
        <TextareaBox width={width}>
            <StyledTextarea label="" variant="outlined" fullWidth minRows={minRows} maxRows={maxRows} placeholder={placeholder} />
        </TextareaBox>
    );
}

CommonTextarea.propTypes = {
    width: PropTypes.string,
    placeholder: PropTypes.string,
    minRows: PropTypes.number,
    maxRows: PropTypes.number
};

export default CommonTextarea;
