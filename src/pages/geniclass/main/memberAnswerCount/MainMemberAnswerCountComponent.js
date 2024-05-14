import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { Flex, IconButtonStyle } from '../../common/styled/CommonStyle';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: 227,
    borderRadius: 10,
    background: '#F5F6FA',
    padding: 24,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sd')]: {
        minHeight: 160
    }
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 230,
        minHeight: 100,
        padding: '20px 35px',
        borderRadius: 10,
        background: '#fff',
        boxShadow: '0px 0px 4px 0px rgba(80, 82, 89, 0.10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 18,
        '&:hover': {
            background: '#fff'
        },
        '&:last-child': {
            marginRight: 0
        },
        [theme.breakpoints.down('sd')]: {
            minWidth: 'calc((100% / 3) - 18px)',
            minHeight: 80,
            padding: '16px 24px'
        }
    }
}));

const IconButton = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 28,
        height: 28,
        marginRight: 8,
        '& svg': {
            width: 28,
            height: 28
        }
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#787878',
        fontWeight: 500,
        letterSpacing: '-0.5px'
    }
}));

const NumberTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        color: '#3190FF',
        fontSize: '0.875rem',
        fontWeight: 400,
        '& span': {
            fontSize: '1.313rem',
            fontWeight: 600
        }
    }
}));

const MainMemberAnswerCountComponent = (props) => {
    const { items } = props;

    return (
        <Root>
            {items.map((item, i) => (
                <ButtonStyle key={i} disableRipple>
                    <Flex>
                        <IconButton disableRipple>{item.icon}</IconButton>
                        <TextStyle>{item.text}</TextStyle>
                    </Flex>

                    <NumberTextStyle>
                        <span>{item.number}</span>개
                    </NumberTextStyle>
                </ButtonStyle>
            ))}
        </Root>
    );
};

MainMemberAnswerCountComponent.propTypes = {};

export default MainMemberAnswerCountComponent;
