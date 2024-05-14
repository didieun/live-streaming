import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styled/CommonStyle';

function CommonTextField(props) {
    const { width, placeholder, onChange } = props;

    return <StyledInput type="search" label="" variant="outlined" fullWidth placeholder={placeholder} width={width} onChange={onChange} />;
}

CommonTextField.propTypes = {
    width: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default CommonTextField;
