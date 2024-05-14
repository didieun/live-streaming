import styled from '@emotion/styled/macro';
import React from 'react';
import { Box, Tab, Tabs, IconButton, Typography, Link } from '@mui/material';
import PropTypes from 'prop-types';
import { headerHeight, footerHeight, sideBarWidth, closeSideBarWidth } from '../Curriculum';
import { ReactComponent as ArrowLineLeft } from '../../../../assets/newImages/ArrowLineLeft.svg';
import { ReactComponent as ArrowLineRight } from '../../../../assets/images/ArrowLineRight.svg';
import { ReactComponent as UserSquareIcon } from '../../../../assets/images/UserSquareIcon.svg';
import MuiDrawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import { FlexCenter, FlexColumnCenter, SearchInput } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import CommonDialog from '../../common/CommonDialog';

const openedMixin = (theme) => ({
    width: `${sideBarWidth}px`,
    borderRight: '1px solid #e8edf7'
    // overflowX: 'hidden'
});

const closedMixin = (theme) => ({
    // overflowX: 'hidden',
    width: `${closeSideBarWidth}px`,
    '& .MuiTab-root': {
        justifyContent: 'center',
        padding: 0
    },
    '&.MuiDrawer-root .MuiDrawer-paper': {
        '& > .MuiBox-root': {
            justifyContent: 'center'
        }
    }
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    borderRight: '1px solid #D4D4D4',
    width: `${sideBarWidth}px`,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    position: 'relative',
    '&.MuiDrawer-root': {
        '& .MuiPaper-root': {
            // height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
            border: 0,
            background: 'transparent',
            position: 'unset !important',
            overflow: 'unset !important',
            padding: '16px 8px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '& .MuiTabs-indicator': {
                display: 'none'
            }
        }
    },
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));

const DrawerHeader = styled(Box)(({ theme, open }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'center' : 'flex-end',
    '& button': {
        marginBottom: 18,
        width: 20,
        height: 20
    }
}));

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
    minWidth: 'auto',
    padding: 0
}));

const TabStyle = styled(Tab)(({ theme, open }) => ({
    '&.MuiTab-root': {
        minHeight: 48,
        minWidth: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: open ? 'center' : 'flex-start',
        gap: 14,
        borderRadius: 8,
        padding: open ? 0 : '12px 16px',
        color: '#333',
        fontWeight: 400,
        fontSize: '0.875rem',
        textAlign: 'left',
        boxSizing: 'border-box',
        '&.Mui-selected': {
            backgroundColor: '#E5F1FF',
            color: '#3190FF',
            fontWeight: 700
        },
        '&:hover': {
            backgroundColor: '#E5F1FF'
        },
        '& svg': {
            width: 20,
            height: 20,
            marginRight: 0,
            '& .calendar': {
                fill: '#333'
            }
        }
    }
}));

const MenuPosition = styled(Box)(({ theme, open }) => ({
    width: open ? `calc(${sideBarWidth}px - 16px)` : `calc(${closeSideBarWidth}px - 16px)`,
    // position: 'fixed',
    position: 'sticky',
    top: `calc(${headerHeight}px + 16px)`,
    left: 8
}));

const DialogText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        boxSizing: 'border-box',
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: 14
    }
}));

const LinkText = styled(Link)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        boxSizing: 'border-box',
        fontSize: '1.125rem',
        color: '#3190FF',
        fontWeight: 400,
        textAlign: 'center',
        textDecoration: 'underline',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}));

const SideBar = (props) => {
    const theme = useTheme();
    const { open, menuItem, value, handleChange, ToggleClickSideBar } = props;
    const [dialog, setDialog] = React.useState(false);

    const handleClickDialog = () => {
        setDialog(true);
    };

    const handleCloseDialog = () => {
        setDialog(false);
    };

    return (
        <Drawer variant="permanent" anchor="left" open={open}>
            <Box sx={{ height: `calc(100% - 60px)`, position: 'relative' }}>
                <MenuPosition open={open}>
                    <DrawerHeader>
                        <IconButtonStyle onClick={ToggleClickSideBar}>{open ? <ArrowLineLeft /> : <ArrowLineRight />}</IconButtonStyle>
                    </DrawerHeader>
                    <Tabs orientation="vertical" onChange={handleChange} value={value}>
                        {menuItem.map((item, i) => (
                            <TabStyle
                                key={i}
                                value={item.value}
                                label={open ? item.text : null}
                                icon={value === item.value ? item.iconActive : item.icon}
                                iconPosition="start"
                            />
                        ))}
                    </Tabs>
                </MenuPosition>
            </Box>

            {open ? (
                <Box sx={{ width: '80%', margin: '0 auto' }}>
                    <CommonButton
                        width={'100%'}
                        height={'48px'}
                        text={'강사 권한 요청'}
                        background={'#fff'}
                        border={'#D5D4DC'}
                        color={'#2F3640'}
                        fontWeight={500}
                        fontSize={'0.875rem'}
                        startIcon={<UserSquareIcon />}
                        onClick={handleClickDialog}
                    />
                </Box>
            ) : (
                <IconButtonStyle sx={{ width: 20, height: 20, margin: '0 auto' }} onClick={handleClickDialog} disableRipple>
                    {' '}
                    <UserSquareIcon />
                </IconButtonStyle>
            )}

            <CommonDialog
                open={dialog}
                title={'알림'}
                children={
                    <FlexColumnCenter>
                        <DialogText>강사 권한을 요청하시려면 메일로 문의 주시기 바랍니다.</DialogText>
                        <LinkText href="mailto:office@enirobot.com">office@enirobot.com</LinkText>
                    </FlexColumnCenter>
                }
                actionBtn1={false}
                btnText2={'확인'}
                onClose={handleCloseDialog}
                btnClick2={handleCloseDialog}
            />
        </Drawer>
    );
};

SideBar.propTypes = {
    open: PropTypes.bool,
    menuItem: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func
};

export default SideBar;
