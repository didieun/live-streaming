import React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendarBox } from './styled/CommonStyle';
import { ReactComponent as CalendarLeftArrowIcon } from '../../../assets/images/CalendarLeftArrowIcon.svg';
import { ReactComponent as CalendarRightArrowIcon } from '../../../assets/images/CalendarRightArrowIcon.svg';
import PropTypes from 'prop-types';

const slots = {
    leftArrowIcon: CalendarLeftArrowIcon,
    rightArrowIcon: CalendarRightArrowIcon
};

function CommonCalendar(props) {
    const formats = {
        monthAndYear: 'YYYY M월'
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} dateFormats={formats}>
            <DateCalendarBox
                defaultValue={dayjs()}
                showDaysOutsideCurrentMonth
                // fixedWeekNumber={5}
                dayOfWeekFormatter={(day) => `${day}`}
                slots={slots}
            />
        </LocalizationProvider>
    );
}

CommonCalendar.propTypes = {};

export default CommonCalendar;
