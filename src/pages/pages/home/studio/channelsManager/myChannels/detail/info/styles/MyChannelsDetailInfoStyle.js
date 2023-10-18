import {styled} from "@mui/material/styles";
import {Typography, TableCell, Button, FormControl, IconButton, Popover} from "@mui/material";

export const TableCellBox = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root':{
        padding: '45px 18px 10px !important'
    }
}));

export const ChannelIdText = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        maxWidth: '100%',
        padding: 0,
        boxSizing: 'border-box',
        background: 'transparent',
        '&:hover':{
            background: 'transparent'
        },
        '& p':{
            width: '100%',
            textTransform: 'none',
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
            fontSize: '0.875rem',
            color: '#2e8c6a',
            textDecoration: 'underline',
        }
    }
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'flex-end'
}));

export const JustifyEnd = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent:'flex-end',
    alignItems: 'center',
    marginTop: 14,
    '& svg':{
        width: 28,
        height: 28,
        marginRight: 10
    }
}));

export const NoImageBox = styled('div')(({ theme }) => ({
    width: 252,
    height: 164,
    background:'#eeeeee',
    border: '1px dashed #dadada',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    '& p':{
        fontSize: '0.813rem',
        color: '#18181d',
        opacity: 0.6,
        marginTop: 3,
    },
    '& svg':{
        width: 34,
        height: 34
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

export const TextBox = styled('div')(({ theme }) => ({
    width: 600,
    marginRight: 100
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#18181d',
        opacity: 0.7,
        fontWeight: 'bold',
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
    }
}));

export const TextMargin = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root':{
        marginRight: 30
    }
}));

export const SubTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: '100%',
        fontSize: '0.938rem',
        color: '#000',
        lineHeight: 1.38,
        whiteSpace:'normal',
        wordBreak:'break-all !important',
        marginTop: 8
    }
}));

export const TagBox = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 20
}));
export const TagBoxIn = styled(Button)(({ theme }) => ({
    background:'#d2d2d2',
    height: 23,
    padding: '0 8px',
    borderRadius: 77,
    marginRight: 6,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    '& p':{
        fontSize: '0.75rem',
        color:'rgba(24, 24, 29, 0.7)',
        fontWeight: 500,
        textTransform: "none",
    },
    '&:last-child':{
        marginRight:0
    },
    '&:hover':{
        background:'#d2d2d2'
    }
}));

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    '&.MuiFormControl-root':{
        width: 215,
        '& .MuiFormControlLabel-root':{
            margin: 0
        },
        '& .MuiButtonBase-root':{
            padding: 0
        },
        '& .MuiFormControlLabel-label':{
            fontSize: '0.938rem',
            color: '#18181d',
            marginRight: 40,
            marginLeft: 8
        }
    }
}));

export const AlignMarin = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 55
}));

export const EditButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 140,
        height: 36,
        background: '#2673e5',
        borderRadius: 4,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover':{
            background: '#2673e5'
        },
        '& p':{
            fontSize: '0.938rem',
            fontWeight: 700,
            color: '#fff',
            marginLeft: 8,
            textTransform: 'none'
        }
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 200,
        height: 36,
        background: '#18181d',
        borderRadius: 4,
        fontSize: '0.938rem',
        fontWeight: 800,
        color: '#fff',
        textTransform:'none',
        '&:hover':{
            background: '#18181d'
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    }
}));

export const StateBox = styled('div')(({ theme }) => ({
    minWidth: 82,
    height: 24,
    borderRadius: 5,
    padding: '0 7px',
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#969696',
    '& p':{
        fontSize: '0.75rem',
        fontWeight: 700,
        color: '#fff'
    }
}));

export const PurpleStateBox = styled(StateBox)(({ theme }) => ({
    background: '#5B53B1'
}));

export const RedStateBox = styled(StateBox)(({ theme }) => ({
    background: '#EF222E'
}));

export const GreenStateBox = styled(StateBox)(({ theme }) => ({
    background: '#2E8C6A'
}));

export const OrangeStateBox = styled(StateBox)(({ theme }) => ({
    background: '#FFB800'
}));

export const StateText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.813rem',
        color: '#18181d',
        fontWeight: 400,
        '& span':{
            color: '#2e8c6a'
        }
    }
}));

export const ChangeStreamerBox = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 166,
    height:32,
    marginLeft: 12,
    background: '#fff',
    border: '1px solid #18181d',
    borderRadius: 4,
    padding: '0 9px',
    boxSizing: 'border-box'
}));

export const ChangeStreamerButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        boxSizing:'border-box',
        fontSize: '0.813rem',
        color:'#18181d',
        fontWeight: 'bold',
        textTransform:'none',
        '&:hover':{
            background: 'transparent'
        },
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

export const ArrowButtonBox = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}));

export const LineStyle = styled('div')(({ theme }) => ({
    width: 1,
    height: 24,
    background:'rgba(0, 0, 0, 0.6)',
    marginRight: 9
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root':{
        width: 166,
        boxShadow: '0 3.6px 6.4px 0 rgba(0, 0, 0, 0.25)',
        border: '1px solid #dadada',
        boxSizing:'border-box',
        marginTop: 9,
        marginLeft: 10,
        '& *': {
            fontFamily: 'Inter !important',
            letterSpacing: '-0.2px'
        },
        '& ul': {
            padding: '5px 2px',
            '& li':{
                width: '100%',
                fontSize: '0.813rem',
                color:'#18181d',
                boxSizing: 'border-box',
                height: 30,
                borderRadius: 3,
                cursor:'pointer',
                '&:hover':{
                    background: '#dadada'
                },
                '&.Mui-selected':{
                    background: '#dadada'
                },
            }
        }
    },
}));

