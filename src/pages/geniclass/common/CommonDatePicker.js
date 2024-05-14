import React from 'react';
import { Box, Button, InputAdornment, MenuItem, MenuList, Popover, ToggleButton } from '@mui/material';
import {
    DatePickerBox,
    DatePickerInput,
    DatePickerLabel,
    DatePickerText,
    DatePickerTextStyle,
    DatePickerTimeBox,
    DatePickerTimeMenuBox,
    DatePickerTimeMenuButtonBox,
    DatePickerTimeMenuItem,
    Flex,
    FlexColumn,
    FlexSpace,
    TimeTextField,
    ToggleButtonGroupBox
} from './styled/CommonStyle';
import { ReactComponent as CalendarBlankIcon } from '../../../assets/images/CalendarBlankIcon.svg';
import CommonCalendar from './CommonCalendar';
import { Route } from 'react-router-dom';

function CommonDatePicker(props) {
    const { placeholder, viewSize } = props;
    const [startAnchorEl, setStartAnchorEl] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const hourArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const minuteArray = ['00', '10', '20', '30', '40', '50'];
    const [hourSelect, setHourSelect] = React.useState('');
    const [minuteSelect, setMinuteSelect] = React.useState('');

    const [time, setTime] = React.useState('am');

    const handleClickStart = (event) => {
        setStartAnchorEl(event.currentTarget);
    };

    const handleCloseStart = () => {
        setStartAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleTime = (event, newTime) => {
        if (newTime !== null) {
            setTime(newTime);
        }
    };

    const handleClickHour = (value) => {
        setHourSelect(value);
    };

    const handleClickMinute = (value) => {
        setMinuteSelect(value);
    };

    const startOpen = Boolean(startAnchorEl);
    const startId = startOpen ? 'simple-start-popover' : undefined;

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Flex sx={{ width: '100%' }}>
            <FlexColumn sx={{ width: viewSize ? 'calc((100% / 2) - 30px)' : '353px', maxWidth: '353px' }}>
                <DatePickerLabel>강의시작</DatePickerLabel>
                {/* 날짜/시간 표시(오전,오후) -> 2024-02-05 07:00 , 2024-02-05 18:00 */}
                <DatePickerInput
                    onClick={handleClickStart}
                    aria-describedby={startId}
                    label=""
                    variant="outlined"
                    placeholder={placeholder ? placeholder : '날짜 / 시간선택'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <CalendarBlankIcon />
                            </InputAdornment>
                        ),
                        readOnly: true
                    }}
                />
            </FlexColumn>
            <DatePickerText>~</DatePickerText>
            <FlexColumn sx={{ width: viewSize ? 'calc((100% / 2) - 30px)' : '353px', maxWidth: '353px' }}>
                <DatePickerLabel>강의종료</DatePickerLabel>
                <DatePickerInput
                    onClick={handleClickStart}
                    aria-describedby={startId}
                    label=""
                    variant="outlined"
                    placeholder={placeholder ? placeholder : '날짜 / 시간선택'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <CalendarBlankIcon />
                            </InputAdornment>
                        ),
                        readOnly: true
                    }}
                />
            </FlexColumn>
            <DatePickerBox
                id={startId}
                open={startOpen}
                anchorEl={startAnchorEl}
                onClose={handleCloseStart}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <CommonCalendar />
                <FlexSpace>
                    <Flex>
                        <DatePickerTextStyle>시간</DatePickerTextStyle>
                        <TimeTextField
                            value={hourSelect === '' && minuteSelect === '' ? '00:00' : `${hourSelect} : ${minuteSelect}`}
                            onClick={handleClick}
                            variant="outlined"
                            InputProps={{
                                readOnly: true
                            }}
                        />
                    </Flex>

                    <ToggleButtonGroupBox value={time} exclusive onChange={handleTime} aria-label="text alignment">
                        <ToggleButton value="am" aria-label="left aligned">
                            AM
                        </ToggleButton>
                        <ToggleButton value="pm" aria-label="right aligned">
                            PM
                        </ToggleButton>
                    </ToggleButtonGroupBox>
                </FlexSpace>
            </DatePickerBox>

            <DatePickerTimeBox
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
                <Box>
                    <Flex>
                        <DatePickerTimeMenuBox>
                            <MenuList sx={{ borderRight: '1px solid #D5D4DC' }}>
                                {hourArray.map((hour, i) => {
                                    return (
                                        <DatePickerTimeMenuItem
                                            key={i}
                                            select={hourSelect === hour}
                                            onClick={() => handleClickHour(hour)}
                                            disableRipple
                                        >
                                            {hour}
                                        </DatePickerTimeMenuItem>
                                    );
                                })}
                            </MenuList>
                        </DatePickerTimeMenuBox>
                        <DatePickerTimeMenuBox>
                            <MenuList>
                                {minuteArray.map((minute, i) => {
                                    return (
                                        <DatePickerTimeMenuItem
                                            key={i}
                                            select={minuteSelect === minute}
                                            onClick={() => handleClickMinute(minute)}
                                            disableRipple
                                        >
                                            {minute}
                                        </DatePickerTimeMenuItem>
                                    );
                                })}
                            </MenuList>
                        </DatePickerTimeMenuBox>
                    </Flex>
                    <DatePickerTimeMenuButtonBox>
                        <Button onClick={handleClose} disableRipple>
                            OK
                        </Button>
                    </DatePickerTimeMenuButtonBox>
                </Box>
            </DatePickerTimeBox>
        </Flex>
    );
}

CommonDatePicker.propTypes = {};

export default CommonDatePicker;
