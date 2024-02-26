import { styled } from '@mui/material/styles';
import { Box, Button, FormControl, IconButton, MenuItem, TextareaAutosize, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import TooltipWrapper from '../TooltipWrapper';

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
export const ButtonStyle = styled(Button)(({ theme, width, height, background, border, borderRadius, hoverBk, hoverColor }) => ({
    '&.MuiButtonBase-root': {
        width: width ? width : '100%',
        height: height,
        padding: '0 8px',
        background: background,
        border: border ? `1px solid ${border}` : background,
        borderRadius: borderRadius ? borderRadius : 8,
        boxSizing: 'border-box',
        '&:hover': {
            background: hoverBk ? hoverBk : background,
            border: hoverBk ? `1px solid ${hoverBk}` : border ? `1px solid ${border}` : background,
            '& p': {
                color: hoverColor
            }
        },
        '& .MuiButton-startIcon': {
            marginLeft: 0
        },
        '&.Mui-disabled': {
            background: '#D9D9D9',
            border: '1px solid #D9D9D9',
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
        fontWeight: fontWeight ? fontWeight : 500,
        textTransform: 'none',
        letterSpacing: '0.5px'
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
        width: 'calc(100% - 2px)',
        marginRight: 0,
        '& .MuiSelect-select': {
            width: '100%',
            boxSizing: 'border-box',
            padding: '14px 13px 14px 19px !important',
            fontSize: '1rem',
            color: '#2f3640',
            fontWeight: 400,
            background: '#fff'
        },
        '& input': {
            fontSize: '1rem',
            color: '#2f3640'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            left: 0
        },
        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
            {
                border: '1px solid #D5D4DC',
                borderRadius: 4
            },
        '& svg': {
            marginTop: -2,
            '&.Mui-disabled': {
                '& path': {
                    fill: '#d9d9d9'
                }
            }
        },
        '&.Mui-disabled': {
            '& .MuiSelect-select': {
                color: '#d9d9d9'
            },
            '& input': {
                color: '#d9d9d9'
            },
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                border: '2px solid #F5F5F5'
            }
        }
    }
}));

export const Menu = styled(MenuItem)(({ theme }) => ({
    '&.MuiMenuItem-root': {
        width: '100%',
        fontSize: '1rem',
        color: '#111',
        boxSizing: 'border-box',
        height: 47,
        borderRadius: 4,
        padding: '0 24px',
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

//input
export const StyledInput = styled(TextField)(({ theme, width }) => ({
    '&.MuiFormControl-root': {
        width: width ? width : 'calc(100% - 2px)',
        boxSizing: 'border-box',
        marginRight: 0,
        marginLeft: 2
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
        padding: '10px !important',
        '& input': {
            padding: '0 !important',
            fontSize: '1rem',
            color: '#000',
            fontWeight: 400,
            opacity: 1,
            minHeight: 44,
            '&::placeholder': {
                color: '#A7A7A7',
                opacity: 1
            }
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
                border: '1px solid #D5D4DC'
            }
        },
        '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #D5D4DC'
            }
        }
    }
}));

//textarea
export const TextareaBox = styled(Box)(({ theme, width }) => ({
    width: width ? width : '100%',
    height: 'auto',
    border: '1px solid #D5D4DC',
    borderRadius: 4,
    padding: '12px 12px 2px',
    boxSizing: 'border-box',
    background: '#fff'
}));

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: '100%',
    fontSize: '1rem',
    fontWeight: 400,
    color: '#333',
    border: '0',
    borderRadius: 0,
    padding: 0,
    boxSizing: 'border-box',
    background: 'transparent',
    resize: 'none',
    overflowY: 'auto',
    '&::placeholder': {
        color: '#737373',
        opacity: 1,
        letterSpacing: '-0.8px'
    },
    '&:focus': {
        outline: 0
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

//dialog

export const DialogBox = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: 393,
        maxWidth: 1200,
        background: '#fff',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.25)',
        border: 0,
        padding: '13px 25px 25px',
        boxSizing: 'border-box',
        borderRadius: 4
    }
}));

export const DialogHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingBottom: 25,
    '&:before': {
        content: "''",
        width: 32,
        height: 32
    }
}));

export const DialogTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 600
    }
}));

export const ChildrenBox = styled(Box)(({ theme }) => ({}));

export const MessageTextBox = styled(Box)(({ theme }) => ({
    '& .MuiTypography-root': {
        minHeight: 67,
        boxSizing: 'border-box',
        fontSize: '1.125rem',
        color: '#2f3640',
        fontWeight: 400,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export const ActionBox = styled(FlexCenter)(({ theme, mr }) => ({
    boxSizing: 'border-box',
    paddingTop: 25,
    marginRight: 0,
    '& button': {
        '&:first-child': {
            marginRight: mr ? 10 : 0
        }
    }
}));

//tooltip

export const ArrowTooltipStyle = styled(TooltipWrapper)(({ theme, marginTop, top, bottom, right, left, triangle, background }) => ({
    maxWidth: 500,
    minHeight: 20,
    background: background ? background : '#538DFF',
    borderRadius: 6,
    padding: 11,
    '&.MuiTooltip-tooltip': {
        marginTop: marginTop ? `${marginTop}px !important` : '14px !important'
    },
    '& > div': {
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        '&:before': {
            content: "''",
            backgroundImage: `url(${triangle})`,
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            transform: 'translate(-50%, 0) ',
            width: 24,
            height: 12
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
        wordBreak: 'break-all',
        whiteSpace: 'pre-line'
    },
    '& button': {
        width: 20,
        height: 20
    }
}));

//calendar

export const CalendarContainerBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center !important',
    '& .MuiStack-root': {},
    '& .MuiFormControl-root': {
        marginRight: 0
    },
    '& .MuiInputBase-root': {
        minWidth: 150,
        paddingRight: 0,
        background: '#fff',
        '& .MuiInputBase-input': {
            height: 34,
            boxSizing: 'border-box',
            padding: '0 5px 0 16px',
            fontSize: '0.875rem',
            color: '#18181d',
            fontWeight: 400
        },
        '& .MuiButtonBase-root': {
            padding: 0,
            '&:hover': {
                background: 'transparent'
            }
        },
        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #DADADA'
        },
        '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #2E8C6A !important'
        },
        '& input:nth-of-type(1)': {
            order: 2
        },
        '& fieldset:nth-of-type(1)': {
            order: 3
        }
    }
}));

export const CalendarTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 500,
        letterSpacing: '-0.8px',
        marginBottom: 15
    }
}));

export const CalendarMarginLeftRight = styled(CalendarTextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        margin: '25px 9px 0',
        height: 44
    }
}));
