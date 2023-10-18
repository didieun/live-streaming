import {styled} from "@mui/material/styles";
import {IconButton, Typography} from "@mui/material";

export const ContainerBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center !important',
    '& .MuiInputBase-root':{
        minWidth: 150,
        paddingRight: 0,
        background:'#fff',
        '& .MuiInputBase-input':{
            height: 34,
            boxSizing: 'border-box',
            padding: '0 5px 0 16px',
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
            order: 2
        },
        '& > div:nth-of-type(1)':{
            order: 1,
            '& path':{
                stroke: '#2E8C6A'
            }
        },
        '& fieldset:nth-of-type(1)':{
            order: 3
        }
    }
}));
export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color:'rgba(24, 24, 29, 0.7)',
        fontWeight: 400,
        marginRight: 10
    }
}));

export const MarginLeftRight = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root':{
        margin: '0 8px'
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