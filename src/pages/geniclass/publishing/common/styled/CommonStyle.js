import { styled } from '@mui/material/styles';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    IconButton,
    LinearProgress,
    MenuItem,
    Pagination,
    Popover,
    Rating,
    Slider,
    Snackbar,
    TableContainer,
    TextareaAutosize,
    TextField,
    ToggleButtonGroup,
    Tooltip,
    Typography
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import TooltipWrapper from '../TooltipWrapper';
import { DateCalendar } from '@mui/x-date-pickers';
import LectureReviewComponent from '../../main/review/LectureReviewComponent';
import ClearIcon from '../../../../assets/images/ClearIcon.svg';

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#fff',
    boxSizing: 'border-box'
}));

export const ContainerIn = styled(Box)(({ theme, isHd }) => ({
    width: isHd ? '100%' : 1280,
    padding: isHd ? '25px 16px' : '25px 0',
    margin: '0 auto'
}));

export const IconButtonStyle = styled(IconButton)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
        borderRadius: '50%',
        '&:hover': {
            background: 'transparent'
        }
    }
}));

export const Flex = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}));

export const FlexColumn = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
}));

export const FlexColumnCenter = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

export const FlexSpace = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

export const FlexCenter = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const FlexEnd = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
}));

export const MarginBottom25 = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 25
}));

//button
export const ButtonStyle = styled(Button)(({ theme, width, height, background, border, borderRadius, hoverBk, hoverColor, error }) => ({
    '&.MuiButtonBase-root': {
        minWidth: width ? width : '100%',
        height: height,
        padding: '0 8px',
        background: error ? error : background,
        border: error ? `1px solid ${error}` : border ? `1px solid ${border}` : background,
        borderRadius: borderRadius ? borderRadius : 4,
        boxSizing: 'border-box',
        '&:hover': {
            background: error ? error : hoverBk ? hoverBk : background,
            border: hoverBk ? `1px solid ${hoverBk}` : border ? `1px solid ${border}` : background,
            '& p': {
                color: hoverColor
            }
        },
        '& .MuiButton-startIcon': {
            marginLeft: 0
        },
        '&.Mui-disabled': {
            background: '#bbbbbb',
            border: '1px solid #bbbbbb',
            '& p': {
                color: '#fff'
            },
            '& .arrow-clockwise': {
                fill: '#fff'
            }
        }
    }
}));

export const TextStyle = styled(Typography)(({ theme, color, fontSize, fontWeight }) => ({
    '&.MuiTypography-root': {
        color: color ? color : '#fff',
        fontSize: fontSize ? fontSize : '1.125rem',
        fontWeight: fontWeight ? fontWeight : 600,
        textTransform: 'none',
        letterSpacing: '-0.5px',
        lineHeight: 'normal'
    }
}));

//check
export const FormControlLabelCheckBox = styled(FormControlLabel)(({ theme, fontSize }) => ({
    '&.MuiFormControlLabel-root': {
        margin: '0',
        '& .MuiButtonBase-root': {
            padding: 0,
            '&:hover': {
                background: 'transparent'
            }
        },
        '& .MuiFormControlLabel-label': {
            marginLeft: 5,
            fontSize: fontSize ? fontSize : '1.125rem',
            color: '#000',
            fontWeight: 400
        }
    }
}));

//radio
export const FormControlBox = styled(FormControl)(({ theme, iconSize, fontSize }) => ({
    '&.MuiFormControl-root': {
        marginRight: 0,
        '& .MuiFormControlLabel-root': {
            margin: '0 10px 0 0',
            '&:last-child': {
                margin: 0
            }
        },
        '& .MuiButtonBase-root': {
            padding: 0
        },
        '& .MuiTypography-root': {
            fontSize: fontSize ? fontSize : '1.125rem',
            color: '#000000',
            fontWeight: 400,
            marginLeft: 3
        },
        '& svg': {
            width: iconSize ? iconSize : 24,
            height: iconSize ? iconSize : 24
        },
        '&.Mui-disabled': {
            '& .MuiTypography-root': {
                color: '#d9d9d9'
            }
        }
    }
}));

//select
export const SelectFormControlBox = styled(FormControl)(({ theme }) => ({
    '&.MuiFormControl-root': {
        minWidth: '100%',
        marginRight: 0,
        '& .MuiInputBase-root': {
            minHeight: 44
        },
        '& .MuiSelect-select': {
            width: '100%',
            boxSizing: 'border-box',
            padding: '8px 48px 8px 14px !important',
            fontSize: '1rem',
            color: '#333',
            fontWeight: 400,
            background: '#fff'
        },
        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #D5D4DC',
            borderRadius: 4,
            top: -5,
            bottom: 0,
            left: 0,
            right: 0
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #3190FF'
        },
        '& svg': {
            marginTop: -4,
            right: 10,
            '&.Mui-disabled': {
                '& path': {
                    fill: '#BBBBBB'
                }
            }
        },
        '&.Mui-disabled': {
            '& .MuiSelect-select': {
                color: '#BBBBBB'
            },
            '& input': {
                color: '#BBBBBB'
            },
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #BBBBBB'
            }
        }
    }
}));

export const Menu = styled(MenuItem)(({ theme }) => ({
    '&.MuiMenuItem-root': {
        width: '100%',
        fontSize: '0.875rem',
        color: '#111',
        boxSizing: 'border-box',
        height: 47,
        borderRadius: 4,
        padding: '0 12px',
        '&:hover': {
            background: '#f5f6fa'
        },
        '&.Mui-selected': {
            background: '#F5F6FA',
            fontWeight: 400
        },
        '&.Mui-disabled': {
            color: '#d9d9d9'
        }
    }
}));

//zoomIn zoomOut
export const ZoomInZoomOut = styled(Flex)(({ theme }) => ({
    margin: '0 12px'
}));

export const SliderBox = styled(Slider)(({ theme, width, height }) => ({
    '&.MuiSlider-root': {
        width: width,
        height: height,
        padding: '10px 0',
        boxSizing: 'border-box',
        margin: '0 8px',
        '& .MuiSlider-rail': {
            background: '#D8E5FC',
            opacity: 1
        },
        '& .MuiSlider-track': {
            border: 0,
            background: '#1976D2'
        },
        '& .MuiSlider-mark': {
            background: 'transparent'
        },
        '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
            background: '#1976D2',
            '&::after': {
                width: 20,
                height: 20,
                background: 'transparent'
            },
            '&.Mui-active': {
                boxShadow: 'none'
            },
            '&.Mui-focusVisible': {
                boxShadow: 'none'
            },
            '&:hover': {
                boxShadow: 'none'
            },
            '& .MuiSlider-valueLabel': {
                background: 'transparent',
                padding: 0,
                fontSize: '0.875rem',
                color: '#1976D2',
                lineHeight: 1.43,
                top: -4,
                '&::before': {
                    display: 'none'
                },
                '& .MuiSlider-valueLabelCircle': {
                    '&:after': {
                        content: "'%'",
                        fontSize: '0.875rem',
                        color: '#1976D2'
                    }
                }
            }
        }
    }
}));

//input
export const StyledInput = styled(TextField)(({ theme, width }) => ({
    '&.MuiFormControl-root': {
        width: width ? width : 'calc(100% - 2px)',
        boxSizing: 'border-box',
        margin: '0'
    },
    '& .MuiInputBase-root': {
        width: '100%',
        minHeight: 44,
        height: 44,
        background: '#fff',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '12px !important',
        '& input': {
            padding: '0 !important',
            fontSize: '1rem',
            color: '#333',
            fontWeight: 400,
            opacity: 1,
            minHeight: 44,
            '&::placeholder': {
                color: '#737373',
                opacity: 1,
                letterSpacing: '-0.8px'
            }
        },
        '& input[type="search"]::-webkit-search-cancel-button': {
            WebkitAppearance: 'none',
            height: 24,
            width: 24,
            borderRadius: '50em',
            background: `url(${ClearIcon})`,
            backgroundSize: 'contain',
            opacity: '0',
            pointerEvents: 'none',
            cursor: 'pointer'
        },
        '& input[type="search"]:focus::-webkit-search-cancel-button': {
            opacity: 1,
            pointerEvents: 'all'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            width: '100%',
            border: '1px solid #D5D4DC',
            boxSizing: 'border-box',
            top: -5,
            bottom: 0,
            left: 0,
            right: 0
        },
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #D5D4DC'
            }
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #3190FF'
            }
        },
        '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #FF5E57'
            }
        }
    }
}));

//textarea
export const StyledTextarea = styled(TextareaAutosize)(({ theme, width }) => ({
    width: width ? width : '100%',
    fontSize: '1rem',
    fontWeight: 400,
    color: '#2F3640',
    border: '0',
    borderRadius: 4,
    padding: '12px 12px 2px',
    background: '#fff',
    boxSizing: 'border-box',
    resize: 'none',
    overflowY: 'auto',
    outline: '1px solid #D5D4DC',
    '&::placeholder': {
        color: '#737373',
        opacity: 1,
        letterSpacing: '-0.8px'
    },
    '&:focus': {
        outline: '1px solid #3190FF'
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
        background: '#E8E8E8',
        marginTop: 5,
        marginBottom: 5
    }
}));

//dialog

export const DialogBox = styled(Dialog)(({ theme }) => ({
    '&.MuiDialog-root': {
        // zIndex: 1300
    },
    '& .MuiPaper-root': {
        minWidth: 393,
        maxWidth: 1200,
        background: '#fff',
        boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.20)',
        border: 0,
        padding: '0 0px 30px',
        boxSizing: 'border-box',
        borderRadius: 15
    }
}));

export const DialogHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '16px 24px 16px 32px',
    borderBottom: '1px solid #D5D4DC'
}));

export const DialogTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.375rem',
        color: '#111',
        fontWeight: 700
    }
}));

export const ChildrenBox = styled(Box)(({ theme }) => ({
    padding: '30px 31px'
}));

export const MessageTextBox = styled(Box)(({ theme }) => ({
    '& .MuiTypography-root': {
        minHeight: 67,
        boxSizing: 'border-box',
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 400,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export const ActionBox = styled(FlexCenter)(({ theme, mr }) => ({
    boxSizing: 'border-box',
    marginRight: 0,
    padding: '0 31px',
    '& button': {
        '&:first-child': {
            marginRight: mr ? 10 : 0
        }
    }
}));

//tooltip

export const LightTooltip = styled(TooltipWrapper)(({ theme }) => ({
    minWidth: 20,
    minHeight: 10,
    backgroundColor: '#FFFFF5',
    color: '#000',
    border: '1px solid #000',
    fontSize: '0.688rem',
    borderRadius: 0,
    margin: '0 !important',
    padding: '5px 10px',
    zIndex: 1301
}));

export const ArrowTooltipStyle = styled(TooltipWrapper)(({ theme, marginTop, top, bottom, right, left, triangle, background }) => ({
    maxWidth: 500,
    minHeight: 20,
    background: background ? background : '#3190FF',
    borderRadius: 6,
    padding: 11,
    '&.MuiTooltip-tooltip': {
        marginTop: marginTop ? `${marginTop}px !important` : '14px !important'
    },
    '& > div': {
        position: 'relative',
        '&:before': {
            content: "''",
            backgroundImage: `url(${triangle})`,
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            transform: 'translate(-50%, -50%) ',
            width: 24,
            height: 24
        }
    },
    '& p': {
        fontSize: '0.938rem',
        color: '#fff',
        fontWeight: 400,
        letterSpacing: '-0.2px',
        marginRight: 10,
        textAlign: 'left',
        display: '-webkit-box',
        wordBreak: 'keep-all',
        whiteSpace: 'pre-line'
    },
    '& button': {
        width: 20,
        height: 20
    }
}));

export const ArrowTooltipInStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
}));

//DatePicker
export const DatePickerLabel = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 500,
        letterSpacing: '-0.8px',
        marginBottom: 15
    }
}));

export const DatePickerText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#333',
        fontWeight: 600,
        letterSpacing: '-0.8px',
        margin: '40px 10px 0'
    }
}));

export const DatePickerInput = styled(StyledInput)(({ theme }) => ({
    '&.MuiFormControl-root': {
        width: '100%',
        boxSizing: 'border-box',
        marginRight: 0
    },
    '& .MuiInputBase-root': {
        width: '100%',
        minHeight: 44,
        height: 44,
        background: '#fff',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        padding: '0 12px !important',
        '& input': {
            padding: '0 !important',
            fontSize: '1rem',
            color: '#2F3640',
            fontWeight: 400,
            opacity: 1,
            minHeight: 44,
            cursor: 'pointer',
            '&::placeholder': {
                color: '#737373',
                opacity: 1
            }
        },
        '& .MuiInputAdornment-root': {
            marginRight: 10
        },
        '& .MuiOutlinedInput-notchedOutline': {
            width: '100%',
            border: '1px solid #D5D4DC',
            boxSizing: 'border-box'
        },
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #D5D4DC'
            }
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #3190FF'
            }
        },
        '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #FF5E57'
            }
        }
    }
}));

export const DatePickerBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root': {
        border: '1px solid #DDD',
        borderRadius: 6,
        background: '#fff',
        padding: '17px 25px'
    }
}));

export const DatePickerTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 400,
        marginRight: 6
    }
}));

export const TimeTextField = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root': {
        width: 66,
        height: 30,
        boxSizing: 'border-box',
        margin: 0
    },
    '& .MuiInputBase-root': {
        width: '100%',
        minHeight: 30,
        height: 30,
        background: '#E5F1FF',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: '0',
        '& input': {
            padding: '0 !important',
            fontSize: '1rem',
            color: '#3190FF',
            fontWeight: 500,
            opacity: 1,
            minHeight: 30,
            textAlign: 'center',
            cursor: 'pointer',
            '&::placeholder': {
                color: '#3190FF',
                opacity: 1
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '0'
        },
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0'
            }
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0'
            }
        },
        '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0'
            }
        }
    }
}));

//PickerTime
export const DatePickerTimeBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root': {
        border: '0',
        boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: 4,
        background: '#fff',
        padding: '0',
        '& ul': {
            padding: '3px 2px'
        }
    }
}));

export const DatePickerTimeMenuItem = styled(MenuItem)(({ theme, select }) => ({
    '&.MuiMenuItem-root': {
        width: 33,
        height: 25,
        boxSizing: 'border-box',
        padding: 0,
        fontSize: '0.875rem',
        color: '#6B7280',
        background: select ? '#EFF6FF' : '#fff',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 4,
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            background: '#EFF6FF'
        },
        '&:last-child': {
            marginBottom: 0
        }
    }
}));

export const DatePickerTimeMenuBox = styled(Box)(({ theme }) => ({
    height: 163,
    overflowY: 'auto',
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
        background: '#E8E8E8',
        marginTop: 5,
        marginBottom: 5
    }
}));
export const DatePickerTimeMenuButtonBox = styled(Box)(({ theme }) => ({
    borderTop: '1px solid #D5D4DC',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& button': {
        width: 42,
        minWidth: 42,
        height: 30,
        background: '#fff',
        fontSize: '0.875rem',
        color: '#3190FF',
        fontWeight: 500,
        padding: 0,
        boxSizing: 'border-box',
        '&:hover': {
            background: '#fff',
            color: '#3190FF'
        }
    }
}));

export const ToggleButtonGroupBox = styled(ToggleButtonGroup)(({ theme }) => ({
    '&.MuiToggleButtonGroup-root': {
        '& .MuiButtonBase-root': {
            width: 58,
            height: 30,
            background: '#F5F6FA',
            fontSize: '0.875rem',
            color: '#9EA1A1',
            fontWeight: 500,
            boxSizing: 'border-box',
            border: '2px solid #F5F6FA',
            padding: 0,
            marginLeft: 0,
            '&.Mui-selected': {
                borderRadius: 4,
                border: '2px solid #3190FF',
                background: '#fff',
                color: '#3190FF',
                boxSizing: 'border-box'
            }
        }
    }
}));

//calendar
export const DateCalendarBox = styled(DateCalendar)(({ theme }) => ({
    '&.MuiDateCalendar-root': {
        width: 'unset',
        maxHeight: 'auto',
        height: 'auto',
        '& .MuiPickersCalendarHeader-root': {
            marginTop: 0,
            marginBottom: 10,
            padding: '0',
            position: 'relative',
            '& .MuiPickersArrowSwitcher-root': {
                width: 0
            },
            '& .MuiIconButton-edgeEnd': {
                width: 20,
                height: 20,
                position: 'absolute',
                left: 8,
                top: 5,
                bottom: 0,
                padding: 0
            },
            '& .MuiIconButton-edgeStart': {
                width: 20,
                height: 20,
                position: 'absolute',
                right: 8,
                top: 5,
                bottom: 0,
                padding: 0
            },
            '& .MuiPickersArrowSwitcher-spacer': {
                display: 'none'
            },
            '& .MuiPickersCalendarHeader-labelContainer': {
                margin: 'auto',
                '& .MuiPickersFadeTransitionGroup-root': {
                    '& > div': {
                        fontSize: '0.875rem',
                        color: '#333',
                        fontWeight: 500,
                        marginRight: 0
                    }
                },
                '& .MuiPickersCalendarHeader-switchViewButton': {
                    display: 'none'
                }
            }
        },
        '& .MuiDayCalendar-header': {
            '& .MuiDayCalendar-weekDayLabel': {
                width: 34,
                height: 34,
                fontSize: '0.75rem',
                color: '#9CA3AF',
                fontWeight: 400,
                margin: 0,
                '&:last-child': {
                    color: '#3190FF'
                },
                '&:first-child': {
                    color: '#FF5E57'
                }
            }
        },
        '& .MuiDayCalendar-slideTransition': {
            height: 'auto',
            minHeight: 218,
            '& .MuiPickersDay-root': {
                width: 34,
                height: 34,
                fontSize: '0.75rem',
                color: '#2F3640',
                fontWeight: 400,
                margin: 0,
                '&.MuiPickersDay-today': {
                    color: '#3190FF',
                    fontWeight: 600
                },
                '&.Mui-selected': {
                    background: '#3190FF',
                    color: '#fff !important',
                    fontWeight: 400
                },
                '&:hover': {
                    background: '#3190FF',
                    color: '#fff !important'
                },
                '&:last-child': {
                    color: '#3190FF'
                },
                '&:first-child': {
                    color: '#FF5E57'
                }
            },
            '& .MuiPickersDay-dayOutsideMonth': {
                color: '#A7A7A7 !important'
            }
        },
        '& .MuiPickersYear-yearButton': {
            fontSize: '0.875rem',
            width: 60,
            height: 30,
            margin: '3px 0',
            '&.Mui-selected': {
                background: '#4D9FFF',
                color: '#fff'
            }
        },
        '& .MuiYearCalendar-root': {
            width: 223,
            height: 252,
            maxHeight: 252,
            border: '1px solid #D5D4DC',
            borderRadius: 4,
            boxSizing: 'border-box',
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
    }
}));

//search
export const SearchInput = styled(TextField)(({ theme, width, height, borderRadius }) => ({
    '&.MuiFormControl-root': {
        width: width ? width : '100%',
        boxSizing: 'border-box',
        margin: 0
    },
    '& .MuiInputBase-root': {
        width: '100%',
        minHeight: height ? height : 34,
        height: height ? height : 34,
        background: '#fff',
        borderRadius: borderRadius ? borderRadius : '90px',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '5px 15px !important',
        '& input': {
            padding: '0 !important',
            fontSize: '0.875rem',
            color: '#000',
            fontWeight: 400,
            opacity: 1,
            minHeight: height ? height : 34,
            '&::placeholder': {
                color: '#737373',
                opacity: 1
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            width: '100%',
            border: '1px solid #ECECEC',
            boxSizing: 'border-box'
        },
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #ECECEC'
            }
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #3190FF'
            }
        },
        '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #ECECEC'
            }
        }
    }
}));

//교재생성
export const TextbookRoot = styled(Box)(({ theme }) => ({
    position: 'relative',
    '& .drop_area drop_zone.is-disabled': { cursor: 'default' }
}));

export const TextbookFileBoxMoreBtn = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 12,
    right: 12
}));

export const TextbookMoreIconButton = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 24,
        height: 24,
        zIndex: 1000
    }
}));

export const TextbookPopoverBox = styled(Popover)(({ theme }) => ({
    '&.MuiPopover-root': {
        '& .MuiPaper-root': {
            boxShadow: '0 4px 15px 0 rgba(51, 51, 51, 0.15)',
            borderRadius: 4,
            background: '#fff',
            border: 0,
            padding: 0,
            '& .MuiList-root': {
                padding: 4,
                '& .MuiButtonBase-root': {
                    fontSize: '0.75rem',
                    minWidth: 75,
                    height: 30,
                    fontWeight: 400,
                    color: '#444343',
                    padding: '6px 12px',
                    boxSizing: 'border-box',
                    '&:hover': {
                        background: '#f5f6fa',
                        borderRadius: 4
                    }
                }
            }
        }
    }
}));

export const TextbookVideoBox = styled(FlexCenter)(({ theme, file }) => ({
    width: '100%',
    aspectRatio: 16 / 9,
    border: file ? '1px solid rgba(0, 0, 0, 0.6)' : '1px dashed rgba(15, 145, 210, 0.40)',
    background: 'rgba(15, 145, 210, 0.05)',
    borderRadius: 10,
    boxSizing: 'border-box',
    flexDirection: 'column',
    marginBottom: 15
}));

export const TextbookImgBox = styled(Box)(({ theme, left, right }) => ({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: left ? 'flex-start' : right ? 'flex-end' : 'center',
    '& > img': {
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'contain'
    },
    '& iframe': {
        borderRadius: 8
    }
}));

export const TextbookVideoTitle = styled(Typography)(({ theme, layout }) => ({
    '&.MuiTypography-root': {
        fontSize: layout ? '1.25rem' : '1.5rem',
        color: '#000',
        fontWeight: 600,
        marginTop: layout ? 18 : 24,
        [theme.breakpoints.up('xl')]: {
            fontSize: '1.5rem',
            marginTop: 24
        },
        [theme.breakpoints.down('sl')]: {
            fontSize: '1.25rem',
            marginTop: 18
        },
        [theme.breakpoints.down('sd')]: {
            fontSize: '1rem',
            marginTop: 12
        }
    }
}));

export const TextbookVideoText = styled(Typography)(({ theme, layout }) => ({
    '&.MuiTypography-root': {
        margin: layout ? '8px 0 16px' : '12px 0 24px',
        fontSize: layout ? '0.75rem' : '0.875rem',
        color: '#000',
        fontWeight: 400,
        [theme.breakpoints.up('xl')]: {
            margin: '12px 0 24px',
            fontSize: '0.875rem'
        },
        [theme.breakpoints.down('sl')]: {
            fontSize: '0.75rem',
            margin: '8px 0 16px'
        },
        [theme.breakpoints.down('sd')]: {
            margin: '6px 0 10px'
        }
    }
}));

export const TextbookButtonBox = styled(Box)(({ theme, layout }) => ({
    '& button': {
        minWidth: layout ? '100px !important' : '150px',
        height: layout ? '36px !important' : 48,
        '& p': {
            fontSize: layout ? '0.875rem !important' : '1rem'
        }
    },
    [theme.breakpoints.up('xl')]: {
        '& button': {
            minWidth: '150px !important',
            height: '48px !important',
            '& p': {
                fontSize: '1rem !important'
            }
        }
    },
    [theme.breakpoints.down('sl')]: {
        '& button': {
            minWidth: '100px !important',
            height: '36px !important',
            '& p': {
                fontSize: '0.875rem !important',
                [theme.breakpoints.down('sd')]: {
                    fontSize: '0.75rem !important'
                }
            }
        }
    }
}));

export const TextbookVideoTextSub = styled(Typography)(({ theme, layout }) => ({
    '&.MuiTypography-root': {
        marginBottom: layout ? 16 : 24,
        fontSize: '0.75rem',
        color: 'rgba(0, 0, 0, 0.40)',
        fontWeight: 400,
        [theme.breakpoints.up('xl')]: {
            marginBottom: 24
        },
        [theme.breakpoints.down('sl')]: {
            marginBottom: 16
        },
        [theme.breakpoints.down('sd')]: {
            marginBottom: 10
        }
    }
}));

export const TextbookQuizText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#a7a7a7',
        fontWeight: 400,
        letterSpacing: '-0.28px',
        textAlign: 'left',
        marginTop: 15,
        marginBottom: 42
    }
}));

export const TextbookAddQuestionButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 175,
        height: 48,
        borderRadius: 4,
        padding: '0 16px',
        boxSizing: 'border-box',
        background: '#2F3640',
        '&:hover': {
            background: '#2F3640'
        },
        '& p': {
            fontSize: '1rem',
            color: '#fff',
            marginLeft: 8
        }
    }
}));

export const TextbookQuizStyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: 'calc(100% - 24px - 10px)',
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#2F3640',
    border: '0',
    borderRadius: 0,
    padding: 0,
    boxSizing: 'border-box',
    background: 'transparent',
    resize: 'none',
    overflowY: 'auto',
    letterSpacing: '-0.28px',
    marginLeft: 0,
    '&::placeholder': {
        color: '#737373',
        opacity: 1
    },
    '&:focus': {
        outline: '0'
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
}));

export const TextbookQuizImageBox = styled(FlexSpace)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 25
}));

export const TextbookQuizTitleImgBox = styled(Box)(({ theme }) => ({
    width: 241,
    height: 181,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        cursor: 'pointer'
    }
}));

//rating
export const RatingStyle = styled(Rating)(({ theme }) => ({
    '&.MuiRating-root': {
        '& label': {
            marginRight: 5,
            '&:last-of-type': {
                marginRight: 0
            }
        },
        '&.Mui-disabled': {
            opacity: 1
        }
    }
}));

//LinearProgress
export const LinearProgressStyle = styled(LinearProgress)(({ theme }) => ({
    width: 400,
    height: 15,
    margin: '0 10px',
    background: '#fff',
    '& .MuiLinearProgress-bar': {
        background: '#F5CD79'
    }
}));

//main
export const FilterSelectBox = styled(Box)(({ theme }) => ({
    '& .MuiFormControl-root': {
        minWidth: '76px !important',
        '& .MuiInputBase-root': {
            minHeight: '32px !important'
        },
        '& .MuiSelect-select': {
            padding: '6px 38px 6px 14px !important',
            fontSize: '0.875rem !important'
        },
        '& svg': {
            marginTop: '-1px !important',
            width: '18px !important',
            height: '18px !important'
        }
    }
}));

//Snackbar
export const SnackbarStyle = styled(Snackbar)(({ theme }) => ({
    '&.MuiSnackbar-root': {
        minWidth: 200,
        background: '#737373',
        borderRadius: 8,
        padding: '12px 16px',
        '& p': {
            fontSize: '1rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.5px'
        },
        '& svg': {
            marginRight: 8
        }
    }
}));

// 공통 Table
export const TableContainerBox = styled(TableContainer)(({ theme }) => ({
    '&.MuiPaper-root': {
        background: 'transparent',
        boxShadow: 'none',
        border: 0,
        marginBottom: 24,
        '& .MuiTable-root': {
            '& thead': {
                border: '1px solid #D5D4DC',
                borderLeft: 0,
                borderRight: 0,
                '& .MuiTableCell-root': {
                    background: '#F5F6FA',
                    padding: '12px 8px',
                    fontSize: '1rem',
                    color: '#333',
                    fontWeight: 500,
                    letterSpacing: '-0.5px',
                    boxSizing: 'border-box',
                    borderBottom: '1px solid #D5D4DC'
                }
            },
            '& tbody': {
                '& .MuiTableRow-root': {
                    '& .MuiTableCell-root': {
                        width: '100%',
                        background: '#fff',
                        padding: '12px 8px',
                        fontSize: '1rem',
                        color: '#333',
                        fontWeight: 400,
                        boxSizing: 'border-box',
                        borderBottom: '1px solid #D5D4DC',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }
                }
            }
        },
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
            background: '#E8E8E8',
            marginTop: 5,
            marginBottom: 5
        }
    }
}));

export const UnderlineText = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        maxWidth: '180px',
        minWidth: 5,
        padding: 0,
        boxSizing: 'border-box',
        background: 'transparent',
        margin: '0 auto',
        '&:hover': {
            background: 'transparent'
        },
        '& p': {
            width: '100%',
            textTransform: 'none',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: '1rem',
            color: '#3190FF',
            textDecoration: 'underline',
            textAlign: 'center'
        }
    }
}));

//Pagination
export const PaginationStyle = styled(Pagination)(({ theme }) => ({
    '&.MuiPagination-root': {
        '& .MuiButtonBase-root': {
            width: 32,
            height: 32,
            border: '1px solid #f1f1f1',
            background: '#fff',
            fontSize: '0.813rem',
            color: '#111',
            fontWeight: 600,
            padding: 0,
            '&:hover': {
                background: '#F5CD79',
                border: '1px solid #F5CD79',
                color: '#fff'
            },
            '&.Mui-disabled': {
                opacity: 0.4
            },
            '&.Mui-selected': {
                background: '#F5CD79',
                border: '1px solid #F5CD79',
                color: '#fff'
            }
        }
    }
}));
