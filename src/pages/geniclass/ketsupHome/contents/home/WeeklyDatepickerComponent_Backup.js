import React, { useEffect, useRef, useState } from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, IconButton } from '@mui/material';
import { DatePickerBox, FlexCenter, FlexSpace } from '../../../common/styled/CommonStyle';
import { ReactComponent as CalendarLeftArrowIcon } from '../../../../../assets/newImages/CaretLeftIcon.svg';
import { ReactComponent as CalendarRightArrowIcon } from '../../../../../assets/newImages/CaretRightIcon.svg';
import LeftArrowIcon from '../../../../../assets/images/CalendarLeftArrowIcon.svg';
import RightArrowIcon from '../../../../../assets/images/CalendarRightArrowIcon.svg';
import { ReactComponent as CalendarBlankIcon } from '../../../../../assets/images/CalendarBlankIcon.svg';
import CommonCalendar from '../../../common/CommonCalendar';
import Datepicker from 'react-horizontal-strip-datepicker';
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css';
import { ko } from 'date-fns/locale';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    border: '1px solid #D5D4DC',
    borderRadius: 10,
    padding: 25,
    marginBottom: 25,
    boxSizing: 'border-box'
}));

const DatepickerStyle = styled(Box)(({ theme }) => ({
    marginTop: 25,
    '& .datepicker-strip': {
        width: '100%',
        '& .datepicker-month-label': {
            display: 'none',
            textAlign: 'center'
        },
        '& .datepicker': {
            justifyContent: 'space-between',
            margin: 0,
            '& .wrapper': {
                '& .scroll-head, & .blank-space-div': {
                    display: 'none'
                },
                '& .datepicker-button-previous, & .datepicker-button-next': {
                    position: 'relative',
                    textIndent: '-9999px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    transform: 'rotate(0deg)',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        display: 'flex',
                        width: 22,
                        height: 24,
                        transform: 'translate(50%, 50%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center'
                    }
                },
                '& .datepicker-button-previous': {
                    '&::after': {
                        backgroundImage: `url(${LeftArrowIcon})`
                    }
                },
                '& .datepicker-button-next': {
                    '&::after': {
                        backgroundImage: `url(${RightArrowIcon})`
                    }
                },
                // 여기부터 날짜
                '& .datepicker-date-day-Item': {
                    width: 51,
                    height: 101,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    padding: 5,
                    margin: '0 4px',
                    backgroundColor: '#F1F5F9',
                    border: '1px solid #F1F5F9',
                    borderRadius: 10,
                    fontFamily: 'Pretendard !important',
                    '&:hover': {
                        backgroundColor: '#F5CD79',
                        border: '1px solid #EEC01D'
                    },
                    '&.date-day-Item-selected': {
                        backgroundColor: '#F5CD79',
                        border: '1px solid #EEC01D',
                        '& .datepicker-day-label, & .datepicker-date-label': {
                            fontWeight: 700
                        }
                    },
                    '&.date-day-item-disabled': {},
                    '& .datepicker-day-label': {
                        fontSize: '1.125rem',
                        fontWeight: '400',
                        color: '#333',
                        marginTop: 0,
                        lineHeight: '40px'
                    },
                    '& .datepicker-date-label': {
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        color: '#333',
                        marginTop: 0,
                        lineHeight: '40px'
                    }
                }
            }
        }
    }
}));

const ControlBox = styled(FlexCenter)(({ theme }) => ({
    fontSize: '1.125rem',
    fontWeight: 700,
    gap: 25,
    flex: 1
}));

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
    width: 32,
    height: 32,
    borderRadius: 32,
    boxShadow: '0px 0px 3.6px rgba(181.08, 183.66, 187.10, 0.60)',
    boxSizing: 'border-box'
}));

const CalendarButton = styled(IconButton)(({ theme }) => ({
    boxSizing: 'border-box',
    '& svg path': {
        fill: '#333'
    }
}));

function WeeklyDatepickerComponent_Backup(props) {
    const { isLg } = useViewSize();
    const [mounted, setMounted] = useState(false);
    const ref = useRef(null);
    const [startAnchorEl, setStartAnchorEl] = React.useState(null);

    const handleClickStart = (event) => {
        setStartAnchorEl(event.currentTarget);
    };
    const handleCloseStart = () => {
        setStartAnchorEl(null);
    };
    const startOpen = Boolean(startAnchorEl);
    useEffect(() => {}, [ref, mounted]);
    const onSelectedDay = (d) => {
        console.log(d);
    };
    return (
        <Root isLg={isLg}>
            <FlexSpace>
                <ControlBox>
                    <IconButtonStyle>
                        <CalendarLeftArrowIcon />
                    </IconButtonStyle>
                    <Box>1월</Box>
                    <IconButtonStyle>
                        <CalendarRightArrowIcon />
                    </IconButtonStyle>
                </ControlBox>
                <CalendarButton onClick={handleClickStart}>
                    <CalendarBlankIcon />
                </CalendarButton>
            </FlexSpace>
            <DatepickerStyle>
                <Datepicker locale={ko} ref={ref} selectedDay={onSelectedDay} enableScroll={true} enableDays={80} />
            </DatepickerStyle>
            <DatePickerBox
                open={startOpen}
                anchorEl={startAnchorEl}
                onClose={handleCloseStart}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <CommonCalendar />
            </DatePickerBox>
        </Root>
    );
}

export default WeeklyDatepickerComponent_Backup;
