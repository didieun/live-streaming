import {styled} from "@mui/material/styles";
import {Button, TableCell} from "@mui/material";

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