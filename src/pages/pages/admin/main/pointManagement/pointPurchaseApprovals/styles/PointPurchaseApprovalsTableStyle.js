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

export const Flex = styled('div')(({ theme }) => ({
    display:'inline-flex',
    alignItems: 'flex-end',
}));

export const PointText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.75rem',
        color:'#2E8C6A',
        fontWeight: 400,
        textDecoration:'underline',
        lineHeight:1.2,
        textUnderlineOffset:5,
        textDecorationThickness: 1,
        cursor: 'pointer'
    }
}));

export const PointBoldText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#2E8C6A',
        fontSize: '1rem',
        fontWeight: 700,
        textDecoration:'underline',
        lineHeight:1,
        textUnderlineOffset:4,
        textDecorationThickness: 1,
        cursor: 'pointer'
    }
}));