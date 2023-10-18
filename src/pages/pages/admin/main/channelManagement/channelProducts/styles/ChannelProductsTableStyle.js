import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const ActiveRoles = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    marginRight: 25,
    '& span':{
        width: 16,
        height: 16,
        marginRight: 8,
        borderRadius: '50%',
        background: '#D0D0D0',
    },
    '& p':{
        fontSize: '0.875rem',
        color: '#979797',
    }
}));

export const Audience = styled(ActiveRoles)(({ theme }) => ({
    '& span':{
        background: '#FFCF23'
    },
    '& p':{
        color: '#18181d',
    }
}));

export const Streamer = styled(ActiveRoles)(({ theme }) => ({
    '& span':{
        background: '#2AE369'
    },
    '& p':{
        color: '#18181d',
    }
}));

export const ChannelOwner = styled(ActiveRoles)(({ theme }) => ({
    marginRight: 0,
    '& span':{
        background: '#376FFF'
    },
    '& p':{
        color: '#18181d',
    }
}));

//Favorite ChannelsTable, Streaming History Table
export const TagBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    marginRight: 6,
    padding: '0 7px',
    boxSizing: 'border-box',
    background: '#D2D2D2',
    borderRadius: 75,
    height: 23,
    '& p':{
        fontSize: '0.688rem',
        color: '#18181d',
        opacity: 0.7,
        fontWeight: 500
    }
}));


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