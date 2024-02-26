import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ReactComponent as CalendarBlankIcon } from '../../../assets/images/CalendarBlankIcon.svg';
import { CalendarContainerBox, CalendarMarginLeftRight, CalendarTextStyle, FlexColumn, IconButtonStyle } from './styled/CommonStyle';
import { Box } from '@mui/material';

function CommonCalendar(props) {
    const [calendarOpen, setCalendarOpen] = React.useState(false);
    const [endCalendarOpen, setEndCalendarOpen] = React.useState(false);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <CalendarContainerBox>
                    <FlexColumn>
                        <CalendarTextStyle>강의시작</CalendarTextStyle>
                        <DatePicker
                            defaultValue={dayjs()}
                            format="MMMM DD, YYYY"
                            open={calendarOpen}
                            onClose={() => setCalendarOpen(false)}
                            slotProps={{
                                textField: {
                                    onClick: () => setCalendarOpen(true)
                                    // placeholder: 'Start'
                                }
                            }}
                            slots={{
                                openPickerButton: (props) => (
                                    <IconButtonStyle {...props} disableRipple>
                                        <CalendarBlankIcon />
                                    </IconButtonStyle>
                                )
                            }}
                        />
                    </FlexColumn>

                    <CalendarMarginLeftRight>~</CalendarMarginLeftRight>

                    <FlexColumn>
                        <CalendarTextStyle>강의종료</CalendarTextStyle>
                        <DatePicker
                            format="MMMM DD, YYYY"
                            open={endCalendarOpen}
                            onClose={() => setEndCalendarOpen(false)}
                            slotProps={{
                                textField: {
                                    onClick: () => setEndCalendarOpen(true)
                                    // placeholder: 'End'
                                }
                            }}
                            slots={{
                                openPickerButton: (props) => (
                                    <IconButtonStyle {...props} disableRipple>
                                        <CalendarBlankIcon />
                                    </IconButtonStyle>
                                )
                            }}
                        />
                    </FlexColumn>
                </CalendarContainerBox>
            </DemoContainer>
        </LocalizationProvider>
    );
}

CommonCalendar.propTypes = {};

export default CommonCalendar;
