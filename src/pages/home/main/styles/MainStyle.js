import {drawerCloseWidth, drawerOpenWidth, topBarHeight} from "../../../../App";
import {styled} from "@mui/material/styles";
import {Box, Button, TableCell, TableContainer, Tabs, Typography} from "@mui/material";
import TooltipWrapper from "../../TooltipWrapper";

export const closedRoot = (theme) => ({
    width: `calc(100% - ${drawerCloseWidth}px)`,
    height: `calc(100vh - ${topBarHeight}px)`,
    marginLeft: `${drawerCloseWidth}px`,
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

// export const TooltipStyle = styled(({ className, ...props }) => (
//     <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />
// ))(`
//     background: #f4d219;
//     border: 1px solid #F3A50E;
//     border-radius: 0;
//     font-size: 0.813rem;
//     padding: 1px 6px;
//     color: #000;
// `);

// 공통 Title
export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.875rem',
        color: '#000',
        fontWeight: 700,
        marginBottom: 0
    }
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        color: '#000',
        fontWeight: 400,
        marginBottom: 19,
    }
}));

// 공통 Tab
export const TabBox = styled(Tabs)(({ theme }) => ({
    '&.MuiTabs-root':{
        width: '100%',
        borderBottom: '1px solid #dadada',
        marginBottom: 24,
        '& .MuiButtonBase-root':{
            minWidth: 120,
            height: 34,
            padding: '0 13px',
            fontSize: '0.938rem',
            color: '#848589',
            textTransform: 'none',
            '&.Mui-selected':{
                fontWeight: 'bold',
                color: '#18181d'
            }
        },
        '& .MuiTabs-indicator':{
            height: 2,
            background: '#2e8c6a',
            borderRadius: 99
        }
    }
}));

export const BoxStyle = styled('div')(({ theme }) => ({
    position: 'relative'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        width: 180,
        height: 36,
        borderRadius: 4,
        background: '#18181d',
        color: '#fff',
        fontSize: '0.938rem',
        fontWeight: 700,
        position: 'absolute',
        right: 0,
        bottom: 9,
        textTransform: 'none',
        '&:hover':{
            background: '#18181d'
        }
    }
}));

// 공통 Table
export const TableContainerBox = styled(TableContainer)(({ theme }) => ({
    '&.MuiPaper-root':{
        marginTop: 20,
        background: 'transparent',
        boxShadow:'none',
        '& *, .MuiTypography-root':{
            fontFamily:'Inter',
            letterSpacing: '-0.2px'
        },
        '& .MuiTable-root':{
            '& thead':{
                '& .MuiTableCell-root':{
                    background: 'transparent',
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

// 공통 empty Table
export const EmptyTableBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '130px 50px'
}));

export const EmptyIconBox = styled('div')(({ theme }) => ({
    width: 100,
    height: 100,
    background: '#D9D9D9',
    borderRadius: '50%',
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
