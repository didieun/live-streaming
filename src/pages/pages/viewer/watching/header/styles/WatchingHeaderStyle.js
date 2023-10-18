import {styled} from "@mui/material/styles";
import {Box, Button, FormControl, IconButton, Typography} from "@mui/material";
import {watchingHeaderHeight} from "../../Watching";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: watchingHeaderHeight,
    background:'#2A2A2A',
    borderBottom: '1px solid #6f6f6f',
    boxSizing:'border-box',
    padding: '0 24px',
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position:'fixed',
    zIndex: 1000
}));


export const LogoText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 700,
    }
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const ChannelImageBox = styled('div')(({ theme }) => ({
    width: 43,
    height: 22,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.10)',
    boxSizing: 'border-box',
    marginRight: 15,
    background:'#848589',
    cursor: 'pointer',
    '& img':{
        width: '100%'
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        maxWidth: 291,
        fontSize: '1rem',
        color:'#fff',
        fontWeight: 'bold',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        marginRight: 5,
        cursor: 'pointer'
    }
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
            opacity: 0.8
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
        '& svg':{
            width: 30,
            height: 30
        }
    },
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
            opacity: 0.8
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const SearchIconButton = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        '& svg':{
            '& path':{
                stroke: '#848589',
            }
        }
    },
}));

export const SearchBox = styled(FormControl)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 440,
        marginRight: 8
    },
    '& .MuiInputBase-root':{
        width: '100%',
        height: 36,
        background: '#3B3B3B',
        borderRadius: 78,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        '& input':{
            padding: "0 0 0 10px",
            fontSize: "1.125rem",
            color: "#fff",
            fontWeight: 'normal',
            opacity: 1,
            "&::placeholder": {
                color: "#fff",
                opacity: 0.7,
                fontWeight: 'normal'
            },
        },
        '&:hover':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "1px solid #6F6F6F",
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: "1px solid #6F6F6F",
        },
        '&.Mui-focused':{
            '& .MuiOutlinedInput-notchedOutline':{
                border: "2px solid #23b882",
            },
        },
        '& svg':{
            width: 24,
            height: 24,
            '& path':{
                stroke: '#fff',
            }
        }
    }
}));

export const IconMargin = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        marginRight: 24,
        marginLeft: 24
    },
}));

export const bellSelect = (theme) => ({
    '& path':{
        stroke: '#3A974C',
    }
});

export const bell = (theme) => ({
    '& path':{
        stroke: '#848589',
    }
});

export const BellButtonIcon = styled(ButtonIcon, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...bellSelect(theme),
            '&.MuiButtonBase-root': bellSelect(theme),
        }),
        ...(!select && {
            ...bell(theme),
            '&.MuiButtonBase-root': bell(theme),
        }),
    }),
);

export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#eeeeee",
    marginRight: 8,
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
        width: '25px !important',
        height: '25px !important',
    },
}));

export const ProfileButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background:'transparent',
        marginLeft: 24,
        "&:hover": {
            background: "transparent",
        },
        '& svg':{
            width: 14,
            height: 14
        }
    },
}));

export const LogInButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '10px 16px',
        height: 36,
        minWidth: 10,
        fontSize: "0.813rem",
        fontWeight: 700,
        textTransform: "none",
        boxSizing: 'border-box',
        borderRadius: 8,
        lineHeight: 0,
        background:'#2E8C6A',
        border: '1px solid #2E8C6A',
        color:'#fff',
        marginLeft: 24,
        "&:hover": {
            background: "rgba(46, 140, 106, 0.8)",
            border: '1px solid rgba(46, 140, 106, 0.8)',
        },
    },
}));
