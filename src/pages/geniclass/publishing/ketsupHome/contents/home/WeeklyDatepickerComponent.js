import React, { useEffect, useRef, useState } from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, IconButton } from '@mui/material';
import { DatePickerBox, FlexCenter, FlexSpace } from '../../../common/styled/CommonStyle';
import { ReactComponent as CalendarLeftArrowIcon } from '../../../../../assets/newImages/CaretLeftIcon.svg';
import { ReactComponent as CalendarRightArrowIcon } from '../../../../../assets/newImages/CaretRightIcon.svg';
import { ReactComponent as CalendarCheckIcon } from '../../../../../assets/images/CalendarCheckIcon.svg';
import CommonCalendar from '../../../common/CommonCalendar';
import { Datepicker } from '@meinefinsternis/react-horizontal-date-picker';
import { ko } from 'date-fns/locale';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    border: '1px solid #D5D4DC',
    borderRadius: 10,
    padding: 25,
    marginBottom: 30,
    boxSizing: 'border-box'
}));

const DatepickerStyle = styled(Box)(({ theme }) => ({
    '& .dM': {
        paddingBottom: 0
    },
    '& .jb, & .WP:after, & .Ez:after': {
        display: 'none'
    },
    '& .Kq svg': {
        width: 21,
        height: 21,
        fill: '#333'
    },
    '& ._3n': {
        height: 101,
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '16px 0 5px',
        margin: '0 4px',
        backgroundColor: '#F1F5F9',
        border: '1px solid #F1F5F9',
        fontFamily: 'Pretendard !important'
    },
    '& ._3n .Lx': {
        fontSize: '1.125rem',
        color: '#333',
        marginBottom: 20
    },
    '& ._2E .Lx': {
        color: '#FF5E57'
    },
    '& _1g': {
        fontSize: '1.125rem',
        fontWeight: 700
    },
    '& .FC': {
        backgroundColor: '#F5CD79',
        border: '1px solid #EEC01D',
        '&:before': {
            backgroundColor: '#FCECCA!important'
        }
    },
    '& .FC .Lx': {
        color: '#333',
        fontWeight: 700
    },
    '& .FC ._1g': {
        backgroundColor: 'transparent',
        color: '#333',
        fontWeight: '700'
    },
    '& .schedule': {
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: 10,
            height: 10,
            borderRadius: 10,
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#F5CD79',
            zIndex: 999
        },
        '& .schedule.FC': {
            '&:before': {
                backgroundColor: '#FCECCA'
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
    '& svg': {
        width: 24,
        height: 24,
        '& path': {
            fill: '#333'
        }
    }
}));

function WeeklyDatepickerComponent(props) {
    const { isLg } = useViewSize();
    const [mounted, setMounted] = useState(false);
    const ref = useRef(null);
    const [date, setDate] = useState({
        startValue: null,
        endValue: null,
        rangeDates: []
    });
    const [startAnchorEl, setStartAnchorEl] = React.useState(null);

    const handleChange = (d) => {
        console.log(d[0]);
        const [startValue, endValue, rangeDates] = d;
        setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
    };

    const handleClickStart = (event) => {
        setStartAnchorEl(event.currentTarget);
    };
    const handleCloseStart = () => {
        setStartAnchorEl(null);
    };
    const startOpen = Boolean(startAnchorEl);
    const startId = startOpen ? 'simple-start-popover' : undefined;
    useEffect(() => {
        // if (ref?.current && !mounted) {
        //   setMounted(true);
        //   const elem = ref.current.getElementsByClassName("_3n");
        //   Array.from(elem).forEach((e) => {
        //     console.log("e=============>", e);
        //     if (e.firstElementChild) {
        //       e.firstElementChild.innerHTML = "ABC";
        //     }
        //     // e.insertAdjacentText('beforeend', 'div');
        //   });
        // }
    }, [ref, mounted]);

    return (
        <Root isLg={isLg}>
            <FlexSpace>
                <ControlBox>
                    <IconButtonStyle>
                        <CalendarLeftArrowIcon />
                    </IconButtonStyle>
                    <Box>3월</Box>
                    <IconButtonStyle>
                        <CalendarRightArrowIcon />
                    </IconButtonStyle>
                </ControlBox>
                <CalendarButton onClick={handleClickStart}>
                    <CalendarCheckIcon />
                </CalendarButton>
            </FlexSpace>
            <DatepickerStyle>
                <Datepicker
                    locale={ko}
                    ref={ref}
                    onChange={handleChange}
                    startValue={date.startValue}
                    endValue={date.startValue}
                    labelFormat={'MMMM'}
                    // classNames={{ dayItem: "schedule" }} //스케줄이 있을 때
                />
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

export default WeeklyDatepickerComponent;
