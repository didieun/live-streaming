import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Calendar, Views, DateLocalizer, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import Toolbar from './Toolbar';
import 'moment/locale/ko';

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

const myEventsList = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2024, 3, 0),
        end: new Date(2024, 3, 1)
    }
];

const adjEvents = myEventsList.map((it, ind) => ({
    ...it,
    isDraggable: ind % 2 === 0
}));

const Root = styled(Box)(({ theme }) => ({
    height: '100%',
    '& .rbc-time-view': {
        border: 0,
        borderTop: '1px solid #ECECEC',
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '5px'
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#7A7A7A',
            borderRadius: '10px',
            backgroundClip: 'padding-box'
        },
        '&::-webkit-scrollbar-track': {
            borderRadius: '10px',
            background: '#E8E8E8'
        }
    },
    '& .rbc-time-header': {
        background: '#F3F6FA',
        borderRight: '0 !important',
        marginRight: '0 !important',
        minWidth: 995
    },
    '& .rbc-time-header-content': {
        borderLeft: 0,
        borderRight: 0,
        paddingRight: 5,
        boxSizing: 'border-box'
    },
    '& .rbc-time-view .rbc-row': {
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        '& .rbc-header': {
            borderBottom: 0,
            borderLeft: 0,
            '&.rbc-today': {
                background: '#F3F6FA',
                '&:after': {
                    content: "'오늘'",
                    padding: '4px 10px',
                    color: '#3190FF',
                    border: '1px solid #3190FF',
                    borderRadius: 90,
                    background: '#fff',
                    fontSize: '0.813rem',
                    fontWeight: 500,
                    marginLeft: 4
                }
            },
            '& .rbc-button-link': {
                fontFamily: 'Pretendard',
                fontSize: '1rem',
                color: '#333',
                fontWeight: 500,
                letterSpacing: '-0.5px'
            }
        }
    },
    '& .rbc-allday-cell': {
        display: 'none'
    },
    '& .rbc-time-content': {
        borderTop: '0',
        minWidth: 995,
        '& .rbc-time-gutter': {
            '& .rbc-timeslot-group': {
                width: 122,
                borderBottom: '1px solid #ECECEC',
                '& .rbc-time-slot': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 180,
                    '& .rbc-label': {
                        fontSize: '1rem',
                        color: '#737373',
                        fontWeight: 500,
                        letterSpacing: '-0.5px'
                    },
                    '&:not(:first-of-type)': {
                        display: 'none'
                    }
                },
                '& div:last-child': {
                    display: 'none'
                }
            }
        },
        '& .rbc-day-slot': {
            '& .rbc-timeslot-group': {
                '& .rbc-time-slot': {
                    height: '30px !important',
                    flex: 'none'
                }
            }
        },
        //
        '& .rbc-time-column': {
            '& .rbc-timeslot-group': {
                borderLeft: '1px solid #ECECEC',
                borderBottom: '0',
                '& .rbc-time-slot': {
                    borderTop: '1px solid #ECECEC'
                }
            },
            '&.rbc-today': {
                background: '#fff'
            }
        },
        '& .rbc-events-container': {
            marginRight: 0
        },
        '&::-webkit-scrollbar': {
            width: '5px'
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#7A7A7A',
            borderRadius: '10px',
            backgroundClip: 'padding-box'
        },
        '&::-webkit-scrollbar-track': {
            borderRadius: '10px',
            background: '#E8E8E8'
        }
    }
}));

function Schedule() {
    const [myEvents, setMyEvents] = useState(adjEvents);
    const [draggedEvent, setDraggedEvent] = useState();
    const [displayDragItemInCell, setDisplayDragItemInCell] = useState(true);
    const [counters, setCounters] = useState({ item1: 0, item2: 0 });

    const eventPropGetter = useCallback(
        (event) => ({
            ...(event.isDraggable ? { className: 'isDraggable' } : { className: 'nonDraggable' })
        }),
        []
    );

    const dragFromOutsideItem = useCallback(() => draggedEvent, [draggedEvent]);

    const customOnDragOver = useCallback(
        (dragEvent) => {
            if (draggedEvent !== 'undroppable') {
                console.log('preventDefault');
                dragEvent.preventDefault();
            }
        },
        [draggedEvent]
    );

    const handleDisplayDragItemInCell = useCallback(() => setDisplayDragItemInCell((prev) => !prev), []);

    const moveEvent = useCallback(
        ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
            const { allDay } = event;
            if (!allDay && droppedOnAllDaySlot) {
                event.allDay = true;
            }

            setMyEvents((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {};
                const filtered = prev.filter((ev) => ev.id !== event.id);
                return [...filtered, { ...existing, start, end, allDay }];
            });
        },
        [setMyEvents]
    );

    const newEvent = useCallback(
        (event) => {
            setMyEvents((prev) => {
                const idList = prev.map((item) => item.id);
                const newId = Math.max(...idList) + 1;
                return [...prev, { ...event, id: newId }];
            });
        },
        [setMyEvents]
    );

    const onDropFromOutside = useCallback(
        ({ start, end, allDay: isAllDay }) => {
            if (draggedEvent === 'undroppable') {
                setDraggedEvent(null);
                return;
            }

            const { name } = draggedEvent;
            const event = {
                title: formatName(name, counters[name]),
                start,
                end,
                isAllDay
            };
            setDraggedEvent(null);
            setCounters((prev) => {
                const { [name]: count } = prev;
                return {
                    ...prev,
                    [name]: count + 1
                };
            });
            newEvent(event);
        },
        [draggedEvent, counters, setDraggedEvent, setCounters, newEvent]
    );

    const resizeEvent = useCallback(
        ({ event, start, end }) => {
            setMyEvents((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {};
                const filtered = prev.filter((ev) => ev.id !== event.id);
                return [...filtered, { ...existing, start, end }];
            });
        },
        [setMyEvents]
    );

    return (
        <Root>
            <DragAndDropCalendar
                defaultDate={new Date()}
                defaultView={'week'}
                views={['week']}
                timeslots={6}
                step={10}
                dragFromOutsideItem={displayDragItemInCell ? dragFromOutsideItem : null}
                draggableAccessor="isDraggable"
                eventPropGetter={eventPropGetter}
                events={myEventsList}
                localizer={localizer}
                onDropFromOutside={onDropFromOutside}
                onDragOver={customOnDragOver}
                onEventDrop={moveEvent}
                onEventResize={resizeEvent}
                onSelectSlot={newEvent}
                resizable
                selectable
                // startAccessor="start"
                // endAccessor="end"
                style={{ height: '100%' }}
                formats={{
                    dayFormat: 'M/DD dd',
                    timeGutterFormat: 'h:mm A'
                }}
                components={{
                    toolbar: Toolbar
                }}
            />
        </Root>
    );
}

export default Schedule;
