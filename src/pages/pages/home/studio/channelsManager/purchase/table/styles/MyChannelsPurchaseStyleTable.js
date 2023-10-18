import {styled} from "@mui/material/styles";
import {Button, IconButton, TableHead} from "@mui/material";

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

export const TableHeadBox = styled(TableHead)(({ theme }) => ({
    '&.MuiTableHead-root':{
        '& .MuiTableCell-root':{
            verticalAlign: 'top !important',
            padding: '5px 8px !important'
        }
    }
}));

export const StatusBox = styled('div')(({ theme }) => ({
    width: 82,
    height: 24,
    padding: '1px 7px 0',
    boxSizing: 'border-box',
    background: '#2e8c6a',
    borderRadius: 4,
    fontSize: '0.75rem',
    color: '#fff',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
}));

export const TradingText = styled(StatusBox)(({ theme }) => ({
    background: '#3799D0',
}));

export const ExpiredText = styled(StatusBox)(({ theme }) => ({
    background: '#18181d',
}));

export const CanceledText = styled(StatusBox)(({ theme }) => ({
    background: '#969696',
}));

export const DayBold = styled('span')(({ theme }) => ({
    fontWeight: 700
}));

export const DayRed = styled('span')(({ theme }) => ({
    color: '#EF222E'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        maxWidth: 180,
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

export const OpenButtonStyle = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        '& p':{
            color: '#18181d',
            opacity: 0.6
        }
    },
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
        },
    },
}));
