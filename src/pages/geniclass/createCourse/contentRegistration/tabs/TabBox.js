import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { ArrowTooltipStyle } from '../../../common/styled/CommonStyle';
import TooltipArrowOrange from '../../../../../assets/images/TooltipArrowOrange.svg';
import { useViewSize } from '../../../../../store';

const TabsBox = styled(Tabs)(({ theme, gap, scrollButtons, open, isMd, isSl }) => ({
    '&.MuiTabs-root': {
        width: '100%',
        borderBottom: '1px solid #D9D9D9',
        boxSizing: 'border-box',
        padding: open ? (scrollButtons ? '0' : isMd ? '0 10px' : '0 24px') : scrollButtons ? '0' : isSl ? '0 10px' : '0 24px',
        '& .MuiTabs-flexContainer': {
            gap: gap ? gap : 32
        },
        '& .MuiButtonBase-root': {
            minWidth: 28,
            height: 56,
            padding: 0,
            fontSize: '1rem',
            color: '#4B4B4B',
            textTransform: 'none',
            lineHeight: '24px',
            fontWeight: 500,
            background: '#fff',
            '&.Mui-selected': {
                color: '#1976D2'
            },
            '&:last-child': {
                marginRight: 0
            }
        },
        '& .MuiTabs-indicator': {
            height: 2,
            background: '#1976D2'
        },
        '& .MuiTabs-scrollButtons ': {
            minWidth: 24,
            width: 24,
            marginRight: 0,
            '&.Mui-disabled': {
                opacity: 0.2
            }
        }
    }
}));

function TabBox(props) {
    const { isMd, isSl } = useViewSize();
    const { tabValue, handleChangeTab, valueList, gap, scrollButtons, ellipsis = false, open } = props;

    return (
        <TabsBox
            value={tabValue}
            onChange={handleChangeTab}
            gap={gap}
            variant="scrollable"
            scrollButtons={scrollButtons}
            aria-label="wrapped label tabs example"
            open={open}
            isMd={isMd}
            isSl={isSl}
        >
            {valueList.map((list, i) => (
                <Tab
                    key={i}
                    value={list.value}
                    label={
                        ellipsis ? (
                            list.label.length >= 10 ? (
                                <ArrowTooltipStyle
                                    title={
                                        <Box>
                                            <Typography sx={{ textAlign: 'center', fontWeight: '600 !important' }}>
                                                Ariana
                                                <br />
                                                Dasom
                                            </Typography>
                                        </Box>
                                    }
                                    placement="bottom"
                                    top={'-9px'}
                                    left={'50%'}
                                    background={'#F80'}
                                    triangle={TooltipArrowOrange}
                                >
                                    {list.label.substring(0, 10) + '...'}
                                </ArrowTooltipStyle>
                            ) : (
                                list.label
                            )
                        ) : (
                            list.label
                        )
                    }
                    disableRipple
                />
            ))}
        </TabsBox>
    );
}

TabBox.propTypes = {
    tabValue: PropTypes.bool,
    handleChangeTab: PropTypes.func,
    valueList: PropTypes.object,
    scrollButtons: PropTypes.bool,
    contentsWidth: PropTypes.number,
    open: PropTypes.bool
};

export default TabBox;
