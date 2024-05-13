import React from 'react';
import { ReactComponent as ArrowIcon } from '../../../../../assets/images/ArrowIcon.svg';
import { ReactComponent as CalendarBlueIcon } from '../../../../../assets/images/CalendarBlueIcon.svg';
import { styled } from '@mui/material/styles';
import { Box, ToggleButton, Typography } from '@mui/material';
import {
    DatePickerBox,
    DatePickerTextStyle,
    Flex,
    FlexSpace,
    IconButtonStyle,
    TimeTextField,
    ToggleButtonGroupBox
} from '../../../common/styled/CommonStyle';
import CommonCalendar from '../../../common/CommonCalendar';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '10px 46px',
    boxSizing: 'border-box'
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        margin: '0 24px'
    }
}));

const IconSize = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 32,
        height: 32,
        filter: 'drop-shadow(0px 0px 3.683px rgba(181, 184, 187, 0.60))',
        background: '#fff',
        '&:hover': {
            background: '#fff'
        },
        '& svg': {
            width: 16,
            height: 16
        }
    }
}));

const CalendarIconSize = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 32,
        height: 32,
        marginLeft: 30
    }
}));

export default function Toolbar(props) {
    const { date } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const navigate = (action) => {
        props.onNavigate(action);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Root>
            <Flex>
                <IconSize onClick={navigate.bind(null, 'PREV')} disableRipple>
                    <ArrowIcon style={{ transform: 'rotate( 90deg )' }} />
                </IconSize>
                <TextStyle>{`${date.getMonth() + 1}월`}</TextStyle>
                <IconSize onClick={navigate.bind(null, 'NEXT')} disableRipple>
                    <ArrowIcon style={{ transform: 'rotate( -90deg )' }} />
                </IconSize>

                <CalendarIconSize onClick={handleClick} disableRipple>
                    <CalendarBlueIcon />
                </CalendarIconSize>
            </Flex>

            <DatePickerBox
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <CommonCalendar />
            </DatePickerBox>
        </Root>
    );
}
