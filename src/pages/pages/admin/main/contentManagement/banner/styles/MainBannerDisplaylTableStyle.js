import {styled} from "@mui/material/styles";
import {Button, FormControlLabel, Switch, TableCell, TextField} from "@mui/material";
import SwitchCheckIcon from "../../../../../common/images/SwitchCheckIcon.svg";
import SwitchNoIcon from "../../../../../common/images/SwitchNoIcon.svg";

export const NoImageBox = styled('div')(({ theme }) => ({
    width: 69,
    height: 45,
    background:'#eeeeee',
    border: '1px dashed #dadada',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
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

export const GoLiveButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        height: 32,
        padding: '0 13px',
        boxSizing: 'border-box',
        background: '#2e8c6a',
        borderRadius: 4,
        '&:hover':{
            background: '#2e8c6a',
        },
        '& p':{
            fontSize: '0.813rem',
            color: '#fff',
            fontWeight: 'bold',
            marginLeft: 4
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    }
}));

export const ExpirationDateBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    '& svg':{
        marginRight: 6
    }
}));

export const BorderRight4 = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root':{
        borderRight: '4px solid #f5f5f5 !important',
    }
}));

//
export const FormControlLabelBox = styled(FormControlLabel)(({ theme , color}) => ({
    '&.MuiFormControlLabel-root':{
        margin: 0,
        '& .MuiSwitch-root':{
            margin: 0,
            order: 2
        },
        '& .MuiFormControlLabel-label':{
            width: 30,
            order: 1,
            fontSize: '0.875rem',
            color: color ? '#1890FF' : 'rgba(24, 24, 29, 0.6)',
            fontWeight: 400,
        }
    },
}));

export const SwitchStyle = styled(Switch)(({ theme }) => ({
    width: 48,
    height: 24,
    padding: 0,
    borderRadius: 99,
    boxSizing: 'border-box',
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(2px) translateY(1px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(24px) translateY(1px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url(${SwitchCheckIcon})`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#1890FF',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#fff',
        width: 20,
        height: 20,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${SwitchNoIcon})`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#9E9E9E',
        borderRadius: 20 / 2,
    },
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 57,
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
            textAlign: 'right',
            "&::placeholder": {
                color: "#18181d",
                opacity: 0.4,
                fontWeight: 'normal',
            },
            '&::-webkit-inner-spin-button':{
                WebkitAppearance:'none',
                margin: 0
            },
            '&::-webkit-outer-spin-button':{
                WebkitAppearance:'none',
                margin: 0
            }
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