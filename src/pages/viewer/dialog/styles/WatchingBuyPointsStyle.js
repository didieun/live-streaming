import {styled} from "@mui/material/styles";
import {IconButton, Input, TableContainer, TextareaAutosize, Typography} from "@mui/material";

export const EditContainer = styled('div')(({ theme }) => ({
    maxHeight: 'calc(100vh - 300px)',
    padding: '30px 21px',
    boxSizing: 'border-box',
    overflowY:'auto',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#6f6f6f',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center',
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const MarginBottom30 = styled('div')(({ theme }) => ({
    marginBottom: 30
}));

export const PricePlanBox = styled('div')(({ theme }) => ({
    marginTop: 20,
    marginLeft: 156
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 156,
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1
    }
}));

export const PointsTitleBox = styled(AlignCenter)(({ theme }) => ({
    width: 156,
}));

export const PointsTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1,
        marginRight: 4
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 400,
        color: '#fff',
        lineHeight: 1
    }
}));

export const PointsText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400,
        '& span':{
            fontSize: '1.5rem',
            color: '#2E8C6A',
            fontWeight: 700,
            marginRight: 4
        }
    }
}));

export const PointsBox = styled('div')(({ theme }) => ({
    width: 667,
    marginTop: 20,
    display:'flex',
    flexWrap: 'wrap'
}));

export const PointsBoxIn = styled('div')(({ theme, select }) => ({
    width: 207,
    height: 216,
    display:'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 1.6414103507995605px 1.6414103507995605px 0px rgba(0, 0, 0, 0.25)',
    boxSizing: 'border-box',
    borderRadius: 35,
    border: select ? '3px solid #23B882' : '1px solid #6F6F6F',
    background: '#2A2A2A',
    padding: '0px 25px',
    cursor:'pointer',
    marginRight: 22,
    marginBottom: 22,
    '&:nth-of-type(3)':{
        marginRight: 0
    }
}));

export const PointsBoxTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.188rem',
        color: '#fff',
        fontWeight: 700,
    }
}));

export const PointsBoxMoney = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        color: '#fff',
        opacity: 0.7,
        fontWeight: 400,
        marginBottom: 12
    }
}));

export const PointsBoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: '#fff',
        fontWeight: 400,
        marginRight: 12
    }
}));

export const PointsBoxTextColor = styled(PointsBoxText)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#2E8C6A',
        marginTop: 10,
        '& span':{
            fontWeight: 700,
            marginRight: 12
        }
    }
}));

export const CountBoxIn = styled('div')(({ theme }) => ({
    background: '#3C3C3C',
    height: 30,
    borderRadius: 85,
    boxSizing: 'border-box',
    padding: '3px 7px',
    display:'inline-flex',
    alignItems: 'center',
    border: '1px solid #6F6F6F',
    '& path':{
        stroke: '#fff'
    },
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
        color: '#fff',
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
    width:'100%',
    height: 96,
    background: '#3C3C3C',
    borderRadius: 10,
    padding: '20px 0 20px 50px',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    border: '1px solid #6F6F6F'
}));

export const TotalBoxTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 160,
        fontSize: '0.938rem',
        color: '#fff',
        fontWeight: 500,
    }
}));

export const TotalBoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        fontWeight: 400,
        color: '#fff',
        marginLeft: 8,
        '& span':{
            color: '#2E8C6A',
            fontWeight: 700
        }
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
