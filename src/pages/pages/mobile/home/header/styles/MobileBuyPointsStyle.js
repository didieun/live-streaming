import {styled} from "@mui/material/styles";
import {Button, IconButton, Input, TableContainer, Typography} from "@mui/material";
import Slider from "react-slick";

export const TopBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 16px 15px',
    boxSizing: 'border-box',
    boxShadow:'0px 2px 4px 0px rgba(120, 120, 120, 0.25)',
    zIndex: 1000,
    '& p':{
        fontSize: '1.125rem',
        color: '#18181d',
        fontWeight: 700,
    },
    '&:after':{
        content: "''",
        width: 24,
        height: 24,
        display:'block'
    }
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    height: 'calc(100% - 57px)',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '8px 0px 0',
    boxSizing: 'border-box',
    background:'#F5F5F5'
}));

export const ContentsBox = styled('div')(({ theme }) => ({
    overflowY:'auto',
    height: 'calc(100% - 62px)',
}));

export const CurrentPointsBox = styled('div')(({ theme }) => ({
    padding: 16,
    boxSizing: 'border-box',
    background:'#fff',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        fontWeight: 700,
        color:'#18181d',
        opacity: 0.7,
        marginRight: 7
    }
}));

export const CurrentPointsText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color:'#18181d',
        '& span':{
            fontSize: '1.375rem',
            color: '#2e8c6a',
            fontWeight: 700,
            marginRight: 4
        }
    }
}));

export const PointsBox = styled('div')(({ theme }) => ({
    minHeight: 'calc(100% - 73px)',
    padding: '24px 0 24px 16px',
    boxSizing: 'border-box',
    background:'#fff',
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color:'#18181d',
        paddingRight: 16
    }
}));

export const ButtonBox = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '0 16px 19px',
    boxSizing: 'border-box',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: '100%',
        maxWidth: 500,
        height: 43,
        borderRadius: 5,
        background: '#23b882',
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 700,
        textTransform: 'none',
        "&:hover": {
            background: "#23b882",
        },
    },
}));


export const TableContainerBox = styled(TableContainer)(({ theme }) => ({
    '&.MuiPaper-root':{
        boxShadow:'none',
        border: 0,
        marginTop: 15,
        '& .MuiTableHead-root':{
            '& .MuiTableCell-root':{
                width: 120,
                height: 52,
                verticalAlign: 'top',
                padding: '9px 12px',
                boxSizing: 'border-box',
                fontSize: '0.75rem',
                color: '#18181d',
                fontWeight: 700,
                lineHeight: 1.3,
                background: 'rgba(0, 0, 0, 0.06)',
                borderBottom: '1px solid #dadada',
                borderRight: '1px solid #dadada',
                '& span':{
                    fontWeight: 500
                },
                '&:last-child':{
                    borderRight: 0
                }
            }
        },
        '& .MuiTableBody-root':{
            '& .MuiTableRow-root':{
                '& .MuiTableCell-root':{
                    width: 120,
                    height: 41,
                    padding: '9px 12px',
                    boxSizing: 'border-box',
                    fontSize: '1rem',
                    color: '#18181d',
                    fontWeight: 400,
                    background:'rgba(255, 255, 255, 0.06)',
                    borderBottom: '1px solid #dadada',
                    borderRight: '1px solid #dadada',
                    '&:last-child':{
                        borderRight: 0
                    }
                }
            }

        }
    }
}));

export const PointsList = styled(Slider)(({ theme }) => ({
    boxSizing: 'border-box',
    marginBottom: 19,
    '& .slick-track':{
        display:'inline-flex',
        alignItems:'center',
    },
    '& .slick-list':{
        // padding: '0 50px 0 0 !important'
        padding: '0 !important',
        '& > div':{
            // marginLeft: -20
        }
    },
    '& .slick-slide':{
        marginRight: 16,
        '&:last-child':{
            marginRight: 0
        }
    },
    '& *, .MuiTypography-root, button':{
        fontFamily:'Inter',
        letterSpacing: '-0.2px'
    }
}));


export const PointsBoxIn = styled('div')(({ theme, select }) => ({
    // width: '174px !important',
    display:'inline-flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 1.7291090488433838px 3.4582180976867676px 0px rgba(0, 0, 0, 0.25)',
    boxSizing: 'border-box',
    borderRadius: 35,
    border: select ? '3px solid #23B882' : '1px solid #dadada',
    background: '#fff',
    padding: '16px 24px 18px',
    cursor:'pointer',
    marginBottom: 5,
    marginLeft: 5,
    '&:nth-of-type(3)':{
        marginRight: 0
    },
    '& img':{
        width: 72,
        height: 72
    }
}));

export const ColumnBox = styled('div')(({ theme, select }) => ({
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 8
}));

export const PointsBoxTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.25rem',
        color: '#18181d',
        fontWeight: 700,
    }
}));

export const PointsBoxMoney = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.7,
        fontWeight: 400,
    }
}));

export const PointsBoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: '#18181d',
        fontWeight: 400,
        marginRight: 12
    }
}));

export const PointsBoxTextColor = styled(PointsBoxText)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.063rem',
        color: '#2E8C6A',
        marginTop: 10,
        '& span':{
            fontWeight: 700,
            marginRight: 12
        }
    }
}));

export const CountBoxIn = styled('div')(({ theme }) => ({
    width: 125,
    background: '#fff',
    height: 30,
    borderRadius: 85,
    boxSizing: 'border-box',
    padding: '3px 12px',
    display:'inline-flex',
    alignItems: 'center',
    justifyContent:'space-between',
    border: '1px solid #dadada',
    marginTop: 13,
    '& .Mui-disabled':{
        '& path':{
            opacity: 0.3
        }
    },
}));

export const InputBox = styled(Input)(({ theme }) => ({
    '&.MuiInputBase-root':{
        width: 30,
        margin: '0 5px',
        fontSize: '1.25rem',
        fontWeight: 400,
        color: '#18181d',
        '& input':{
            textAlign: 'center'
        },
        '&:after, &:before':{
            borderBottom: 0
        }
    },
    '&.MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error):before':{
        borderBottom: 0
    },
}));


export const TotalBox = styled('div')(({ theme }) => ({
    background: '#EEE',
    borderRadius: 10,
    padding: '8px 16px',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginRight: 16,
    marginBottom: 36
}));

export const TotalBoxSpace = styled('div')(({ theme }) => ({
    width: '100%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
}));

export const TotalBoxTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        color: '#18181d',
        fontWeight: 500,
        marginBottom: 12,
        marginTop: 16
    }
}));

export const TotalBoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 400,
        color: '#18181d',
        marginLeft: 8,
        '& span':{
            color: '#2E8C6A',
            fontWeight: 700
        }
    }
}));

export const NotesBox = styled('div')(({ theme }) => ({
    paddingRight: 16,
    boxSizing: 'border-box'
}));