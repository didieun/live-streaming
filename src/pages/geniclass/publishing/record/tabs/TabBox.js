import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Tabs, Tab } from '@mui/material';
import { useViewSize } from '../../../../store';

const TabsStyle = styled(Tabs)(({ theme }) => ({
    width: '100%',
    marginTop: 26,
    paddingBottom: 20,
    '& .MuiTabs-flexContainer': {
        gap: 15
    },
    '& .MuiTab-root': {
        minWidth: 30,
        boxSizing: 'border-box',
        padding: '16px 0px',
        color: '#bbb',
        fontSize: '1.5rem',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        '&.Mui-selected': {
            color: '#333'
        }
    },
    '& .MuiTabs-indicator': {
        height: 3,
        backgroundColor: '#F5CD79'
    }
}));

function TabBox(props) {
    const { tabValue, handleChangeTab, valueList } = props;

    return (
        <TabsStyle value={tabValue} onChange={handleChangeTab} aria-label="wrapped label tabs example">
            {valueList.map((list, i) => (
                <Tab key={i} value={list.value} label={list.label} disableRipple />
            ))}
        </TabsStyle>
    );
}

TabBox.propTypes = {
    tabValue: PropTypes.bool,
    handleChangeTab: PropTypes.func,
    valueList: PropTypes.object
};

export default TabBox;
