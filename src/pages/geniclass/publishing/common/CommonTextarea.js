import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextarea, TextareaBox } from './styled/CommonStyle';

function CommonTextarea(props) {
    const { width, placeholder, minRows, maxRows } = props;

    return (
        <StyledTextarea width={width} label="" variant="outlined" fullWidth minRows={minRows} maxRows={maxRows} placeholder={placeholder} />
    );
}

CommonTextarea.propTypes = {
    width: PropTypes.string,
    placeholder: PropTypes.string,
    minRows: PropTypes.number,
    maxRows: PropTypes.number
};

export default CommonTextarea;
