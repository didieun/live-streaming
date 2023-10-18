import {styled} from "@mui/material/styles";
import {TablePagination} from "@mui/material";

export const TablePaginationBox = styled(TablePagination)(({ theme }) => ({
    '& .MuiToolbar-root':{
        position: 'relative',
        '& .MuiTablePagination-displayedRows':{

        }
    },
    '& .MuiInputBase-root':{
        marginLeft: 0,
        marginRight: 20
    },
    '& .MuiSelect-select':{
        fontSize: '0.75rem',
        color:'#323232',
        '&:focus':{
            background:'transparent'
        }
    },
    '& .MuiTablePagination-selectLabel':{
        fontSize: '0.75rem',
        color:'#323232',
    },
    '& button':{
        padding:0,
        '&:hover':{
            background:'transparent'
        },
    },
    '& *': {
        fontFamily: 'Inter !important',
        letterSpacing: '-0.2px'
    },
}));

export const SpanStyle = styled('span')(({ theme }) => ({
    fontSize: '0.75rem',
    color:'#323232',
    '& > span':{
        fontWeight:'bold'
    }
}));