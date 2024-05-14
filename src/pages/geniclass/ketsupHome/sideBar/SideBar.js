import React from 'react';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/ArrowIcon.svg';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Typography, List, ListItem, ListItemButton, ListItemText, Select, Stack, Box, Button } from '@mui/material';
import { Flex, FlexCenter, FlexColumn, Menu, SelectFormControlBox } from '../../common/styled/CommonStyle';
import KetsUpLogo from '../../../../assets/images/KetsUpLogo.png';
import { sideBarWidth } from '../Home';
import PropTypes from 'prop-types';

const Container = styled(Stack)(({ theme }) => ({
    width: `${sideBarWidth}px`,
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    borderRight: '1px solid #D5D4DC',
    padding: '60px 16px',
    boxSizing: 'border-box'
}));

const ContainerIn = styled(Box)(({ theme }) => ({
    position: 'sticky',
    top: 138,
    left: 16,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

const MenuButton = styled(Button)(({ theme, active }) => ({
    '&.MuiButtonBase-root': {
        width: 60,
        height: 70,
        flexDirection: 'column',
        background: active ? '#F1F7F2' : '#fff',
        padding: '8px 10px',
        boxSizing: 'border-box',
        borderRadius: 8,
        marginBottom: 16,
        '&:last-child': {
            marginBottom: 0
        },
        '& p': {
            fontSize: '0.75rem',
            color: active ? '#00B959' : '#333',
            fontWeight: active ? 700 : 400,
            letterSpacing: '-0.5px',
            marginTop: 2
        },
        '& svg': {
            width: 32,
            height: 32,
            '& .list-checks, .student': {
                fill: '#333'
            },
            '& .house-active, .list-checks-active, .student-active': {
                fill: '#00B959'
            }
        },
        '&:hover': {
            background: '#F1F7F2'
        }
    }
}));

function SideBar(props) {
    const { isSd } = useViewSize();
    const { menuItem, menuValue, handleClickMenu } = props;

    return (
        <Container>
            <ContainerIn>
                {menuItem.map((item, i) => (
                    <MenuButton key={i} onClick={() => handleClickMenu(item.text)} active={menuValue === item.text} disableRipple>
                        {menuValue === item.text ? item.iconActive : item.icon}
                        <Typography>{item.text}</Typography>
                    </MenuButton>
                ))}
            </ContainerIn>
        </Container>
    );
}

SideBar.propTypes = {
    menuItem: PropTypes.array,
    menuValue: PropTypes.string,
    handleClickMenu: PropTypes.func
};

export default SideBar;
