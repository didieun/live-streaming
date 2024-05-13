import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Flex, SnackbarStyle } from './styled/CommonStyle';

function CommonSnackbar(props) {
    const { open, onClose, message, icon = false } = props;

    return (
        <SnackbarStyle anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={onClose} open={open} autoHideDuration={5000}>
            <Flex>
                {icon && icon}
                <Typography>{message}</Typography>
            </Flex>
        </SnackbarStyle>
    );
}

CommonSnackbar.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    message: PropTypes.string,
    icon: PropTypes.element
};

export default CommonSnackbar;
