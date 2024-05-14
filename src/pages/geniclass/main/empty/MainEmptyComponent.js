import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import PropTypes from "prop-types";

const EmptyItemStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    borderRadius: 8,
    border: '1px solid #D5D4DC',
    '& p': {
        fontSize: '1rem',
        fontWeight: 500,
        color: '#737373'
    }
}));
const MainEmptyComponent = (props) => {
    const { emptyText } = props;
    return (
        <EmptyItemStyle>
            <Typography>{emptyText}</Typography>
        </EmptyItemStyle>
    );
};

MainEmptyComponent.propTypes = {
    emptyText: PropTypes.string
};

export default MainEmptyComponent;
