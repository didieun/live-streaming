import {styled} from "@mui/material/styles";
import {Box, Button, FormControl, IconButton, ListItemText, Popover, Radio, Typography} from "@mui/material";

export const JustifyCenter = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    alignItems: 'center'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const CurrentPointsBox = styled(AlignCenter)(({ theme }) => ({
    width: 280
}));

export const SettlementBox = styled('div')(({ theme }) => ({
    maxWidth: 'calc(100% - 280px - 41px)',
}));

export const SettlementBoxIn = styled(AlignCenter)(({ theme }) => ({
    width: '100%',
    marginTop: 10
}));

export const ContentsIn = styled('div')(({ theme }) => ({
    minWidth: '70%',
    '@media all and (max-width: 1700px)': {
        width: '100%'
    },
}));

export const BoxStyle = styled('div')(({ theme }) => ({
    minWidth: '100%',
    padding: '33px 56px',
    boxSizing:'border-box',
    background:'#fff',
    boxShadow:'0 10px 30px 0 rgba(226, 236, 249, 0.5)',
    borderRadius: 10,
    marginBottom: 8,
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media all and (max-width: 1700px)': {
        padding: '33px 20px',
    },
}));

export const IconMargin = styled('div')(({ theme }) => ({
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
}));

export const IconTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        marginRight: 4,
        color: '#333'
    }
}));

export const IconTitleGreen = styled(IconTitle)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#3A974C',
    }
}));

export const PointsText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.25rem',
        color: '#18181d',
        '& span':{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#18181d',
        }
    }
}));

export const PointsTextGreen = styled(PointsText)(({ theme }) => ({
    '&.MuiTypography-root':{
        '& span':{
            color: '#3A974C',
        }
    }
}));

export const LineStyle = styled('div')(({ theme }) => ({
    width: 1,
    height: 86,
    background: '#eee',
    margin: '0 44px'
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        fontWeight: 400,
        opacity: 0.7,
        color: '#000',
        marginLeft: 10
    }
}));

export const LineStyle2 = styled(LineStyle)(({ theme }) => ({
    height: 213,
    margin: '0 20px'
}));

export const AlignEnd = styled('div')(({ theme }) => ({
    display:'flex',
    flexWrap:'wrap',
    alignItems: 'flex-end',
    width: 'calc(100% - 84px)',
}));

export const MarginLeftRight = styled('div')(({ theme }) => ({
    marginRight: 14,
    marginBottom: 10
}));

export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: '#18181d',
        opacity: 0.7,
        fontWeight: 400,
        marginBottom: 5
    }
}));

export const MarginRight = styled('div')(({ theme }) => ({
    marginRight: 14,
    marginBottom: 10
}));

export const FontSize14 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        fontWeight: 400,
        marginRight: 24,
        '& span':{
            color: '#2E8C6A'
        }
    }
}));

export const FontSizeSpan = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.063rem',
        color: '#18181d',
        fontWeight: 400,
        '& span':{
            fontSize: '2.375rem',
            fontWeight: 700,
            color: '#2E8C6A'
        }
    }
}));

export const BeforeBox = styled('div')(({ theme }) => ({
    width: 84,
    height: 0
}));

export const FontSize16 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#18181d',
        fontWeight: 400,
        marginRight: 14,
        marginLeft: 25,
        '& span':{
            color: '#2E8C6A'
        },
        '@media all and (max-width: 1700px)': {
            fontSize: '0.813rem',
        },
    }
}));

export const SearchBox = styled(FormControl)(({ theme, error }) => ({
    '& .MuiInputBase-root':{
        width: 158,
        height: 54,
        background: '#eee',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        '& input':{
            padding: "0 10px ",
            fontSize: "1.125rem",
            color: error ? "#EF222E" : "#18181d",
            fontWeight: error ? 700 : 400,
            opacity: 1,
            "&::placeholder": {
                color: "#18181d",
                opacity: 0.7,
                fontWeight: 'normal'
            },
        },
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: error ? "2px solid #EF222E" : "1px solid #dadada",
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: error ? "2px solid #EF222E" : "1px solid #dadada",
        },
        '&.Mui-focused':{
            background: '#fff',
            '& .MuiOutlinedInput-notchedOutline':{
                border: error ? "2px solid #EF222E" : "1px solid #23b882",
            },
        },
        '@media all and (max-width: 1700px)': {
            width: 140,
            height: 40,
            '& input':{
                fontSize: "1rem",
            },
        },
    }
}));

export const SettlementButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 180,
        height: 36,
        background:'#969696',
        borderRadius: 4,
        fontSize: '0.938rem',
        color: '#fff',
        fontWeight: 'bold',
        textTransform:'none',
        marginLeft: 40,
        "&:hover": {
            background: "#969696",
        },
        '@media all and (max-width: 1700px)': {
            marginLeft: 20,
        },
    },
}));

export const FontSize18 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#18181d',
        lineHeight: 1.38,
        marginTop: 20,
        '& span':{
            color: '#2e8c6a',
            fontWeight:'bold'
        },
        '@media all and (max-width: 1700px)': {
            fontSize: '0.813rem',
        },
    }
}));

export const ContainerBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center !important',
    '& .MuiInputBase-root':{
        minWidth: 90,
        width: 150,
        paddingRight: 0,
        background:'#fff',
        '& .MuiInputBase-input':{
            height: 34,
            boxSizing: 'border-box',
            padding: '0 8px 0 16px',
            fontSize: '0.875rem',
            color: '#18181d',
            fontWeight: 400,
        },
        '& .MuiButtonBase-root':{
            padding:0,
            '&:hover':{
                background: 'transparent'
            }
        },
        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            border: '1px solid #DADADA',
        },
        '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border: '1px solid #2E8C6A !important',
        },
        '& input:nth-of-type(1)':{
            order: 2,
            cursor:'pointer'
        },
        '& > div:nth-of-type(1)':{
            order: 1,
            '& path':{
                stroke: '#2E8C6A'
            }
        },
        '& fieldset:nth-of-type(1)':{
            order: 3
        },
    },
    '@media all and (max-width: 1700px)': {
        '& .MuiInputBase-root':{
            width: '90px !important',
            '& .MuiInputBase-input':{
                padding: '0 8px !important',
            },
            '& > div:nth-of-type(1)':{
                display:'none !important'
            },
        }
    },
}));

export const BasicDatePicker = styled('div')(({ theme }) => ({
    '@media all and (max-width: 1700px)': {
        display:'none'
    }
}));

export const SmallDatePicker = styled('div')(({ theme }) => ({
    display:'none',
    '@media all and (max-width: 1700px)': {
        display:'block'
    }

}));

export const DatePickerText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        color: '#030229',
        opacity: 0.7,
        fontWeight: 400,
        margin: '20px 10px 0'
    }
}));

export const PopoverButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0 10px 0 7px',
        width: 132,
        height: 34,
        background:'#fff',
        borderRadius: 4,
        border: '1px solid #dadada',
        boxSizing: 'border-box',
        display:'flex',
        justifyContent:'space-between',
        "&:hover": {
            background: "#fff",
        },
        '& p':{
            width: 'calc(100% - 14px)',
            fontSize: '0.875rem',
            color: '#5C5C5C',
            fontWeight: 400,
            textTransform:'none',
            boxSizing: 'border-box',
            textAlign:'left',
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
        }
    },
}));

export const WhomPopoverButtonStyle = styled(PopoverButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 170,
    },
}));


export const WhomBox = styled('div')(({ theme }) => ({
    padding: '14px 16px 5px'
}));


export const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root':{
        maxHeight: 298,
        boxShadow: '0px 3.6332201957702637px 6.358135223388672px 0px rgba(0, 0, 0, 0.25)',
        border: '1px solid #dadada',
        boxSizing:'border-box',
        borderRadius: 4,
        '& *': {
            fontFamily: 'Inter !important',
            letterSpacing: '-0.2px'
        },
        '& ul': {
            padding: '9px 0',
            '& li':{
                padding: '5px 16px',
                width: '100%',
                fontSize: '0.875rem',
                color:'#18181d',
                boxSizing: 'border-box',
                cursor:'pointer',
                '&:hover':{
                    background: '#dadada'
                },
                '&.Mui-selected':{
                    background: '#dadada'
                },
                '& .MuiButtonBase-root':{
                    padding: 0,
                    '&:hover':{
                        background: 'transparent'
                    },
                    '& .MuiListItemIcon-root':{
                        minWidth: 10,
                        '& span':{
                            margin: 0
                        }
                    },
                    '& .MuiListItemText-root':{
                        '& span':{
                            overflow:'hidden',
                            textOverflow:'ellipsis',
                            whiteSpace:'nowrap',
                            fontSize: '0.875rem',
                            color: '#18181d',
                            fontWeight: 400,
                            marginLeft: 14
                        },
                        maxWidth: 140,
                    }
                }
            }
        },
        overflowY:'auto',
        '&::-webkit-scrollbar': {
            width: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#D9D9D9',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '3px solid transparent',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
            marginTop: 5,
        },
    },
}));

export const NoImageBox = styled('div')(({ theme }) => ({
    width: 69,
    height: 45,
    background:'#eeeeee',
    border: '1px dashed #dadada',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0 0 14px',
    overflow: 'hidden',
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    '& p':{
        fontSize: '0.625rem',
        color: '#18181d',
        opacity: 0.6,
        marginTop: 3,
    }
}));

export const ImageBox = styled(NoImageBox)(({ theme }) => ({
    border: '1px solid #dadada',
    overflow: 'hidden',
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
}));

export const RadioBox = styled(Radio)(({ theme }) => ({
    '&.MuiButtonBase-root':{
        padding: 0,
        marginRight: 20,
        '& svg':{
            width: 21,
            height: 21
        }
    }
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: "#eeeeee",
    margin: '0 8px 0 10px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #DADADA",
    boxSizing: "border-box",
    overflow:'hidden',
    '& img':{
        width: '100%'
    }
}));

export const WarningBox = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 300,
    marginTop: 8,
    boxSizing: 'border-box',
    '& p':{
        fontSize: '0.875rem',
        color: '#EF222E',
        fontWeight: 400,
        marginLeft: 4
    },
    '& path':{
        stroke: '#EF222E'
    },
    '@media all and (max-width: 1700px)': {
        paddingLeft: '265px !important',
    },
}));
