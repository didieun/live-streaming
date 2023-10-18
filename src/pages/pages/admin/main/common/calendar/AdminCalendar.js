import React from 'react';
import { ContainerBox, MarginLeftRight, TextStyle, ButtonIcon} from "./styles/AdminCalendarStyle";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ReactComponent as CalendarIcon } from "../../../../common/images/CalendarIcon.svg";

function AdminCalendar(props) {
    const [calendarOpen, setCalendarOpen] = React.useState(false);
    const [endCalendarOpen, setEndCalendarOpen] = React.useState(false);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <ContainerBox>
                    <TextStyle>Start</TextStyle>
                    <DatePicker
                        defaultValue={dayjs()}
                        format="MMMM DD, YYYY"
                        open={calendarOpen}
                        onClose={() => setCalendarOpen(false)}
                        slotProps={{
                            textField: {
                                onClick: () => setCalendarOpen(true),
                                // placeholder: 'Start'
                            },
                        }}
                        slots={{openPickerButton: (props) => <ButtonIcon {...props} disableRipple><CalendarIcon /></ButtonIcon>}}
                    />
                    <MarginLeftRight>~</MarginLeftRight>
                    <TextStyle>End</TextStyle>
                    <DatePicker
                        format="MMMM DD, YYYY"
                        open={endCalendarOpen}
                        onClose={() => setEndCalendarOpen(false)}
                        slotProps={{
                            textField: {
                                onClick: () => setEndCalendarOpen(true),
                                // placeholder: 'End'
                            },
                        }}
                        slots={{openPickerButton: (props) => <ButtonIcon {...props} disableRipple><CalendarIcon /></ButtonIcon>}}
                    />
                </ContainerBox>
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default AdminCalendar;