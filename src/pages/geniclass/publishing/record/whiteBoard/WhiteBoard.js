import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';
import CommonRadio from '../../common/CommonRadio';
import View from '../view/View';
import PropTypes from 'prop-types';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
}));

const ControlBoxSpace = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 25px'
}));

const WhiteBoard = (props) => {
    const { tabValue, sort } = props;

    const [value, setValue] = React.useState('전체');
    const valueList = [
        {
            label: '전체',
            value: '전체'
        },
        {
            label: '첨삭보기',
            value: '첨삭보기'
        },
        {
            label: '학생필기 보기',
            value: '학생필기 보기'
        }
    ];

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container>
            {sort && (
                <ControlBoxSpace>
                    <CommonRadio handleChange={handleChange} value={value} valueList={valueList} />
                </ControlBoxSpace>
            )}

            <View tabValue={tabValue} sort={sort} />
        </Container>
    );
};

WhiteBoard.propTypes = {
    tabValue: PropTypes.string,
    sort: PropTypes.bool
};

export default WhiteBoard;
