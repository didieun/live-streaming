import {styled} from "@mui/material/styles";
import {
    Button,
    Dialog,
    FormControl,
    IconButton,
    LinearProgress,
    MenuItem,
    Typography
} from "@mui/material";

export const DialogBox = styled(Dialog)(({ theme }) => ({
    '& .MuiBackdrop-root':{
        background: 'transparent'
    },
    '& .MuiPaper-root':{
        width: 570,
        background:'#2a2a2a',
        boxShadow:'none',
        border: '1px solid #6f6f6f',
        boxSizing: 'border-box',
        borderRadius: 10,
        '& *, .MuiTypography-root, button':{
            fontFamily:'Inter',
            letterSpacing: '-0.2px'
        }
    }
}));

export const DialogHeader = styled('div')(({ theme }) => ({
    height: 50,
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #6F6F6F',
    padding: '0 16px',
    boxSizing: 'border-box',
    '&:before':{
        content:"''",
        display:'block',
        width: 23,
        height: 23
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

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 500,
    }
}));

export const Contents = styled('div')(({ theme }) => ({
    display: 'flex',
    height: 336
}));

export const MenuBox = styled('div')(({ theme }) => ({
    width: 168,
    borderRight: '1px solid #6F6F6F',
    padding: '20px 0'
}));

export const MenuTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 500,
        padding: '0 24px 26px',
        boxSizing: 'border-box'
    }
}));

export const ButtonOn = (theme) => ({
    width: '100%',
    height: 40,
    padding: '0 0 0 24px',
    borderRadius: 0,
    display:'flex',
    justifyContent:'flex-start',
    background:'#2E8C6A',
    "&:hover": {
        background: "rgba(46, 140, 106, 0.8)",
    },
    '& p':{
        fontSize: '0.875rem',
        color:'#fff',
        fontWeight: 500,
        textTransform: "none",
        marginLeft: 10
    },
    '& svg':{
        width: 18,
        height: 18,
        '& path':{
            stroke: '#fff'
        }
    }
});

export const ButtonOff = (theme) => ({
    width: '100%',
    height: 40,
    padding: '0 0 0 24px',
    borderRadius: 0,
    display:'flex',
    justifyContent:'flex-start',
    "&:hover": {
        background: "transparent",
    },
    '& p':{
        fontSize: '0.875rem',
        color:'#fff',
        fontWeight: 500,
        textTransform: "none",
        marginLeft: 10
    },
    '& svg':{
        width: 18,
        height: 18
    }
});

export const MenuButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...ButtonOn(theme),
            '&.MuiButtonBase-root': ButtonOn(theme),
        }),
        ...(!select && {
            ...ButtonOff(theme),
            '&.MuiButtonBase-root': ButtonOff(theme),
        }),
    }),
);

export const AsideBox = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    paddingTop: 74,
    paddingLeft: 42,
}));

export const AsideTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color:'#23B882',
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        fontWeight: 400,
        color:'#fff',
        marginTop: 8,
        marginBottom: 3
    }
}));

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    marginTop:8,
    marginBottom: 15,
    '& .MuiInputBase-input':{
        width: 240,
        height:'28px !important',
        padding: '4px 30px 5px 6px !important',
        boxSizing:'border-box',
        background: '#3C3C3C',
        '& p':{
            fontSize: '0.813rem',
            color:'#fff',
            fontWeight: 400,
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
        },
    },
    '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        border: '1px solid #6F6F6F',
        borderRadius: 4
    },
    '& svg':{
        '& path':{
            stroke: '#848589'
        }
    }
}));

export const Menu = styled(MenuItem)(({ theme }) => ({
    '&.MuiMenuItem-root':{
        width: 240,
        boxSizing: 'border-box',
        height: 22,
        paddingLeft: 8,
        '& p':{
            fontSize: '0.875rem',
            color:'#fff',
            fontWeight: 400,
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
        },
        '&:hover':{
            background: 'rgba(35, 184, 130, 0.3)'
        },
        '&.Mui-selected':{
            background: 'rgba(35, 184, 130, 0.3)'
        },
    }
}));

export const ProgressBox = styled(LinearProgress)(({ theme }) => ({
    '&.MuiLinearProgress-root':{
        background:'rgba(255, 255, 255, 0.3)',
        height: 8,
        borderRadius: 10,
        '& .MuiLinearProgress-bar':{
            background:'#23B882',
            borderRadius: '0 10px 10px 0',
        }
    }
}));

export const AlignBottom = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'flex-end'
}));

export const VideoBox = styled('div')(({ theme }) => ({
    width: 80,
    aspectRatio: 16 / 9,
    background: '#C4C4C4',
    marginLeft: 11,
    marginBottom: 15,
    overflow:'hidden',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    '& img':{
        width: '100%'
    }
}));