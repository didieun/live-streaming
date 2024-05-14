import React from 'react';
import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import styled from '@emotion/styled/macro';
import RegisterCourseTableComponent from '../curriculum/registerCourse/RegisterCourseTableComponent';
import PropTypes from 'prop-types';

const EmptyTableBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '130px 50px'
}));

export const EmptySubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        marginTop: 21,
        marginBottom: 24
    }
}));

function CommonTableNoData(props) {
    const { colSpan } = props;
    return (
        <TableBody>
            <TableRow>
                <TableCell colSpan={colSpan}>
                    <EmptyTableBox>
                        <EmptySubText>데이터가 없습니다.</EmptySubText>
                    </EmptyTableBox>
                </TableCell>
            </TableRow>
        </TableBody>
    );
}

CommonTableNoData.propTypes = {
    colSpan: PropTypes.number
};

export default CommonTableNoData;
