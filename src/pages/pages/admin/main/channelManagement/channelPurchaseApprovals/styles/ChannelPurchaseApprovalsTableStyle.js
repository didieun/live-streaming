import {styled} from "@mui/material/styles";
import {Button, FormControl, IconButton, TableCell, TableHead, Typography} from "@mui/material";

export const BoxColumn = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start !important',
    fontSize: '0.875rem',
    '& p':{
        fontSize: '0.875rem',
    },
    '& span':{
        opacity: 0.7
    }
}));

export const BorderRight4 = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root':{
        borderRight: '4px solid #f5f5f5 !important',
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

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        maxWidth: '100%',
        padding: 0,
        background: "transparent",
        "&:hover": {
            background: "transparent",
        },
        '& p':{
            width: 'calc(100% - 21px - 6px)',
            fontSize: '0.875rem',
            textTransform:'none',
            fontWeight: 'normal',
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
            color: '#2E8C6A',
            marginLeft: 6,
        }
    },
}));

export const StatusBox = styled('div')(({ theme }) => ({
    width: 90,
    height: 24,
    padding: '1px 7px 0',
    boxSizing: 'border-box',
    background: '#4285F4',
    borderRadius: 4,
    fontSize: '0.75rem',
    color: '#fff',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
}));

export const GreenText = styled(StatusBox)(({ theme }) => ({
    background: '#23B882',
}));

export const YellowText = styled(StatusBox)(({ theme }) => ({
    background: '#FFB800',
}));

export const RedText = styled(StatusBox)(({ theme }) => ({
    background: '#EF222E',
}));

export const DayBold = styled('span')(({ theme }) => ({
    fontWeight: 700
}));

export const DayRed = styled('span')(({ theme }) => ({
    color: '#EF222E'
}));

export const OpenButtonStyle = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        '& p':{
            color: '#18181d',
            opacity: 0.6
        }
    },
}));

export const TableHeadBox = styled(TableHead)(({ theme }) => ({
    '&.MuiTableHead-root':{
        '& .MuiTableCell-root':{
            verticalAlign: 'top !important',
            padding: '5px 8px !important'
        }
    }
}));

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    '&.MuiFormControl-root':{
        marginTop: 14,
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

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'flex-end'
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

export const TableCellBox = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root':{
        padding: '16px 18px 20px !important'
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

export const LiveBox = styled('div')(({ theme }) => ({
    width: 60,
    height: 23,
    borderRadius: 5,
    background:'#ef222e',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    marginRight: 18,
    '& p':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 3
    },
    '& svg':{
        width: 19,
        height: 19
    },
}));

export const OffLineBox = styled(LiveBox)(({ theme }) => ({
    width: 66,
    background:'#969696',
    marginRight:12
}));
