import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { ArrowTooltipStyle } from '../../../common/styled/CommonStyle';
import TooltipArrowYellow from '../../../../../assets/images/TooltipArrowYellow.svg';

const TabsBox = styled(Tabs)(({ theme, gap, scrollButtons, contentsWidth }) => ({
    '&.MuiTabs-root': {
        width: '100%',
        borderBottom: '1px solid #D9D9D9',
        boxSizing: 'border-box',
        padding: scrollButtons ? '0' : contentsWidth < 1000 ? '0 10px' : '0 24px',
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
    const { tabValue, handleChangeTab, valueList, gap, scrollButtons, ellipsis = false, contentsWidth } = props;

    return (
        <TabsBox
            value={tabValue}
            onChange={handleChangeTab}
            gap={gap}
            variant="scrollable"
            scrollButtons={scrollButtons}
            aria-label="wrapped label tabs example"
            contentsWidth={contentsWidth}
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
                                            <Typography sx={{ textAlign: 'center' }}>
                                                Ariana
                                                <br />
                                                Dasom
                                            </Typography>
                                        </Box>
                                    }
                                    placement="bottom"
                                    top={'-20px'}
                                    left={'50%'}
                                    background={'#F5CD79'}
                                    triangle={TooltipArrowYellow}
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
    contentsWidth: PropTypes.number
};

export default TabBox;
