import {drawerCloseWidth, drawerOpenWidth, topBarHeight} from "../../Admin";
import {styled} from "@mui/material/styles";
import {Box, Button, TableCell, TableContainer, Typography} from "@mui/material";
import TooltipWrapper from "../../../home/TooltipWrapper";

export const closedRoot = (theme) => ({
    width: `calc(100% - ${drawerCloseWidth}px)`,
    height: `calc(100vh - ${topBarHeight}px)`,
    marginLeft: `${drawerCloseWidth}px`,
    marginTop:topBarHeight,
    overflowY:'auto',
    boxSizing: 'border-box',
    padding: '24px 24px 0',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#6f6f6f',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
});

export const openedRoot = (theme) => ({
    width: `calc(100% - ${drawerOpenWidth}px)`,
    height: `calc(100vh - ${topBarHeight}px)`,
    marginTop:topBarHeight,
    marginLeft: `${drawerOpenWidth}px`,
    overflowY:'auto',
    boxSizing: 'border-box',
    padding: '24px 24px 0',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#6f6f6f',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

export const Container = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        ...(open && {
            ...openedRoot(theme),
            '&.MuiBox-root': openedRoot(theme),
        }),
        ...(!open && {
            ...closedRoot(theme),
            '&.MuiBox-root': closedRoot(theme),
        }),
    }),
);

export const BoxPosition = styled('div')(({ theme }) => ({
    position: 'relative'
}));

export const AbsoluteButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 271,
        position: 'absolute',
        right: 0,
        bottom: 5,
        padding: '0 10px',
        height: 36,
        background: '#18181d',
        borderRadius: 4,
        fontSize: '0.938rem',
        fontWeight: 800,
        color: '#fff',
        textTransform:'none',
        fontFamily: 'Inter !important',
        letterSpacing: '-0.2px',
        '&:hover':{
            background: '#18181d'
        },
        '&.Mui-disabled':{
            background: '#969696'
        },
    }
}));

export const AbsoluteButton2 = styled(AbsoluteButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        right: 281,
    }
}));

// 공통 툴팁
export const TooltipStyle = styled(TooltipWrapper)(({ theme }) => ({
    background: '#f4d219',
    border: '1px solid #F3A50E',
    borderRadius: 0,
    fontSize: '0.813rem',
    padding: '1px 6px',
    color: '#000',
    fontFamily:'Inter',
    letterSpacing: '-0.2px'
}));

export const ArrowTooltipStyle = styled(TooltipWrapper)(({ theme , top, bottom, right, left, triangle}) => ({
    maxWidth: 500,
    background: '#2F80ED',
    borderRadius: 6,
    padding: 11,
    '& > div':{
        position: 'relative',
        display:'flex',
        alignItems: 'flex-start',
        '&:before':{
            content: "''",
            // backgroundImage: `url(${TooltipArrowBlue})`,
            backgroundImage: `url(${triangle})`,
            backgroundRepeat:'no-repeat',
            position: 'absolute',
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            transform: 'translate(-50%, 0) ',
            width: 26,
            height: 26,
        }
    },
    '& p':{
        fontSize: '0.938rem',
        color: '#fff',
        fontWeight: 400,
        fontFamily:'Inter',
        letterSpacing: '-0.2px',
        marginRight: 10,
        '& span':{
            color: '#F2C0C0',
            fontWeight: 700
        }
    },
    '& .close':{
        stroke: '#fff !important'
    }
}));

export const ArrowTooltipStyleGray = styled(ArrowTooltipStyle)(({ theme , top, bottom, right, left, triangle}) => ({
    background: '#494859',
    borderRadius: 10,
    padding: '8px 11px',
    '& > div':{
        '&:before':{
            backgroundImage: `url(${triangle})`,
            top: top,
            left: left,
            bottom: bottom,
            right: right,
        }
    },
}));

// 공통 Title
export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.875rem',
        color: '#000',
        fontWeight: 700,
        marginBottom: 31
    }
}));


// 공통 Table
export const TableContainerBox = styled(TableContainer)(({ theme }) => ({
    '&.MuiPaper-root':{
        marginTop: 20,
        background: 'transparent',
        boxShadow:'none',
        '& *, .MuiTypography-root, button':{
            fontFamily:'Inter',
            letterSpacing: '-0.2px'
        },
        '& .MuiTable-root':{
            '& thead':{
                '& .MuiTableCell-root':{
                    background: '#F5F5F5',
                    padding: '10px 8px',
                    fontSize: '0.938rem',
                    color: '#18181d',
                    borderBottom: 0,
                    fontWeight: 'normal',
                    boxSizing: 'border-box',
                }
            },
            '& tbody':{
                '& .MuiTableRow-root':{
                    marginBottom: 4,
                    '& .MuiTableCell-root':{
                        width: '100%',
                        background: '#fff',
                        padding: '10px 8px',
                        fontSize: '0.875rem',
                        color: '#18181d',
                        boxSizing: 'border-box',
                        borderBottom: '4px solid #f5f5f5',
                        overflow:'hidden',
                        textOverflow:'ellipsis',
                        whiteSpace:'nowrap',
                        '&:last-child':{
                            borderRadius: '0 10px 10px 0',
                        },
                        '&:first-of-type':{
                            borderRadius: '10px 0 0 10px'
                        }
                    }
                }

            }
        },
        '&::-webkit-scrollbar': {
            width: '10px',
            height: '10px'
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#6f6f6f',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '3px solid transparent',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
            marginTop: 5,
        },
    }
}));

export const TableContainerBoxScroll = styled(TableContainerBox)(({ theme }) => ({
    '&.MuiPaper-root':{
        '&::-webkit-scrollbar': {
            width: '10px',
            height: '10px'
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#6f6f6f',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '3px solid transparent',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
            marginTop: 44,
        },
        '&::-webkit-scrollbar-corner':{
            backgroundColor: 'transparent'
        }
    }
}));

export const SortTableCell = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root':{
        cursor: 'pointer',
        '& div':{
            display:'flex',
            alignItems: 'center',
            '& p':{
                fontSize: '0.938rem',
                color: '#18181d',
            }
        },
        '& svg':{
            width: 12,
            height: 12,
            marginLeft: 4,
            '& path':{
                stroke: '#848589'
            }
        }
    }
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
}));

export const NoTableCell = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root':{
        fontWeight: 'bold'
    }
}));

export const TableAvatarBox = styled(Box)(({ theme }) => ({
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#eeeeee",
    marginRight: 6,
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
        width: 20,
        height: 20
    }
}));

export const UnderlineText = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        maxWidth: 230,
        minWidth: 5,
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
            textAlign:'left'
        }
    }
}));

export const YellowText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        maxWidth: 230,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        fontSize: '0.875rem',
        color: '#2e8c6a',
    }
}));

export const CellText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color: '#18181d',
        fontWeight: 400,
        '& span':{
            fontSize: '0.75rem'
        }
    }
}));


// 공통 empty Table
export const EmptyTableBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '130px 50px'
}));

export const EmptyTableBox2 = styled(EmptyTableBox)(({ theme }) => ({
    padding: '10px 50px'
}));

export const EmptyTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        color: '#18181d',
        fontWeight: 700,
        marginTop: 21,
        marginBottom: 24
    }
}));

export const EmptyTitleText2 = styled(EmptyTitleText)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.25rem',
        marginTop: 15,
        marginBottom: 0
    }
}));

export const EmptySubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        color: '#18181d',
        marginBottom: 30,
        textAlign: 'center'
    }
}));

export const ActionBox = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const EmptyButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 180,
        height: 36,
        borderRadius: 4,
        background: '#2E8C6A',
        color: '#fff',
        fontSize: '0.938rem',
        fontWeight: 700,
        textTransform: 'none',
        '&:hover':{
            background: 'rgba(46, 140, 106, 0.8)'
        }
    }
}));

export const EmptyButtonStyle2 = styled(EmptyButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background: '#0F5FC2',
        marginLeft: 30,
        '&:hover':{
            background: 'rgba(15, 95, 194, 0.8)'
        }
    }
}));
