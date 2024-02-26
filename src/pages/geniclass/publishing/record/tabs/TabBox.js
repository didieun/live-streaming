import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Tabs, Tab } from '@mui/material';
import { useViewSize } from '../../../../store';

const TabsBox = styled(Tabs)(({ theme, isSd }) => ({
    '&.MuiTabs-root': {
        width: '100%',
        '& .MuiTabs-flexContainer': {},
        '& .MuiButtonBase-root': {
            minWidth: 84,
            height: 66,
            padding: 0,
            fontSize: '1.5rem',
            color: '#dddddd',
            textTransform: 'none',
            lineHeight: 0.83,
            fontWeight: 600,
            background: '#fff',
            '&.Mui-selected': {
                color: '#2f3640'
            },
            '&:last-child': {
                marginLeft: 30
            }
        },
        '& .MuiTabs-indicator': {
            height: 5,
            background: '#f5cd79'
        }
    }
}));

function TabBox(props) {
    const { tabValue, handleChangeTab, valueList } = props;

    return (
        <TabsBox value={tabValue} onChange={handleChangeTab} aria-label="wrapped label tabs example">
            {valueList.map((list, i) => (
                <Tab key={i} value={list.value} label={list.label} disableRipple />
            ))}
        </TabsBox>
    );
}

TabBox.propTypes = {
    tabValue: PropTypes.bool,
    handleChangeTab: PropTypes.func,
    valueList: PropTypes.object
};

export default TabBox;
