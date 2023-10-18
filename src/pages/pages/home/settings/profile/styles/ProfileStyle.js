import {styled} from "@mui/material/styles";
import {Button, TextField, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({

}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'flex-start'
}));

export const FlexMarginBottom = styled(Flex)(({ theme }) => ({
    marginBottom: 30
}));

export const ColumnCenter = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 56,
}));

export const ProfileBox = styled('div')(({ theme }) => ({
    width: 195,
    height: 195,
    borderRadius: "50%",
    background: "#eeeeee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #DADADA",
    boxSizing: "border-box",
    overflow:'hidden',
    '& img':{
        width: '100%'
    },
    '& svg':{
        width: 100,
        height: 100
    }
}));

export const InputBox = styled('input')(({ theme }) => ({
    display:'none'
}));

export const LineButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 150,
        height: 34,
        borderRadius: 4,
        background: '#fff',
        color: '#18181d',
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'none',
        border: '1px solid #18181d',
        boxSizing: 'border-box',
        marginTop: 14,
        '&:hover':{
            background: '##fff'
        }
    },
}));

export const BoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 130,
        fontSize: '0.938rem',
        fontWeight: 500,
        color: '#18181d',
    }
}));

export const BoxText3 = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#18181d',
        fontWeight: 700,
    }
}));

export const ButtonStyle1 = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 150,
        height: 34,
        borderRadius: 4,
        background: '#18181d',
        color: '#fff',
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'none',
        marginLeft: 18,
        '&:hover':{
            background: '#18181d'
        }
    },
}));

export const JustifyEnd = styled('div')(({ theme }) => ({
    width: 485,
    display:'flex',
    justifyContent:'flex-end',
    alignItems: 'center'
}));


export const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        opacity: 0.6,
        fontWeight: 400,
        lineHeight: 1.3,
        marginTop: 22,
        '& span':{
            color: '#EF222E',
        }
    }
}));

export const SubUnderlineText = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root':{
        '& span':{
            color: '#18181d !important',
            textDecoration:'underline',
            cursor:'pointer',
        }
    }
}));

export const NumberText = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root':{
        marginTop: 3,
    }
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 485,
    },
    '& .MuiInputBase-root':{
        width: '100%',
        height: 34,
        background: '#eee',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: '0 8px !important',
        '& input':{
            padding: "0 !important",
            fontSize: "0.875rem",
            color: "#18181d",
            fontWeight: 700,
            opacity: 1,
            "&::placeholder": {
                color: "#18181d",
                opacity: 0.4,
                fontWeight: 'normal',
            },
        },
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "1px solid #dadada",
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: "1px solid #dadada",
        },
        '&.Mui-focused':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #23b882",
            },
        },
        '&.Mui-error':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #ea2a58",
            },
        },
        '& .MuiInputAdornment-root':{
            '& p':{
                fontSize: "0.875rem",
                color: "#18181d",
                fontWeight: '700',
                opacity: 1,
            }
        }
    }
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
}));