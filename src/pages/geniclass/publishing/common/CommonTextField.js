import React from 'react';
import PropTypes from 'prop-types';
import { Select, Box } from '@mui/material';
import { ReactComponent as ArrowDownIcon } from '../../../assets/images/ArrowDownIcon.svg';
import { Menu, SelectFormControlBox, StyledInput } from './styled/CommonStyle';

function CommonTextField(props) {
    const { width, placeholder } = props;

    return <StyledInput label="" variant="outlined" fullWidth placeholder={placeholder} width={width} />;
}

CommonTextField.propTypes = {
    width: PropTypes.string,
    placeholder: PropTypes.string
};

export default CommonTextField;
