import { styled } from '@mui/material/styles';
import { Box, Button, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as ButtonArrowIcon } from '../../../../assets/images/ButtonArrowIcon.svg';
import { ReactComponent as TrashIcon } from '../../../../assets/images/TrashIcon.svg';
import TestPDF from '../../../../assets/images/TestPDF.png';
import { IconButtonStyle } from '../../common/styled/CommonStyle';
import { useViewSize } from '../../../../store';
import CommonDialog from '../../common/CommonDialog';

const ListBox = styled(Box)(({ theme }) => ({
    width: 180,
    height: 'auto',
    background: '#fff',
    padding: '15px 5px 15px 20px',
    marginBottom: 20,
    boxSizing: 'border-box',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.15)'
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 'calc(100% - 15px)',
        height: 42,
        padding: '0 6px 0 15px',
        background: '#1976D2',
        borderRadius: 4,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
        '&:hover': {
            background: '#1976D2'
        },
        '& p': {
            fontSize: '0.875rem',
            color: '#fff',
            fontWeight: 600
        }
    }
}));

const ListInBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 42px - 25px)',
    overflowY: 'scroll',
    paddingRight: 10,
    boxSizing: 'border-box',
    '&::-webkit-scrollbar': {
        width: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#7A7A7A',
        borderRadius: '10px',
        backgroundClip: 'padding-box'
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: '#E8E8E8'
    }
    // '&::-webkit-scrollbar': {
    //     width: '10px'
    // },
    // '&::-webkit-scrollbar-thumb': {
    //     background: '#D9D9D9',
    //     borderRadius: '10px',
    //     backgroundClip: 'padding-box',
    //     border: '3px solid transparent'
    // },
    // '&::-webkit-scrollbar-track': {
    //     background: 'transparent'
    // }
}));

const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: 150,
        boxShadow: '0 4px 15px 0 rgba(51, 51, 51, 0.15)',
        borderRadius: 4,
        background: '#fff',
        border: 0,
        '& .MuiList-root': {
            padding: 4,
            '& .MuiButtonBase-root': {
                fontSize: '1rem',
                height: 47,
                color: '#111',
                justifyContent: 'center',
                padding: '0',
                boxSizing: 'border-box',
                '&:hover': {
                    background: '#f5f6fa',
                    borderRadius: 4
                }
            }
        }
    }
}));

const ImageBox = styled(Box)(({ theme }) => ({
    marginBottom: 25,
    '&:last-child': {
        marginBottom: 0
    }
}));

const ImageBoxIn = styled(Box)(({ theme, select }) => ({
    width: '100%',
    height: 170,
    border: select ? '2px solid #778beb' : '2px solid #efefef',
    borderRadius: 5,
    background: '#fff',
    marginBottom: 12,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '& img': {
        width: '100%',
        objectFit: 'cover'
    },
    '&:hover': {
        border: '2px solid #778beb'
    },
    '&:after': {
        position: 'absolute',
        content: "''",
        width: '100%',
        height: 66,
        bottom: 0,
        background: ' linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 5%, #fff)'
    }
}));

const NumberText = styled(Typography)(({ theme, select }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: select ? '#778beb' : '#000',
        fontWeight: 500,
        textAlign: 'center'
    }
}));

const DeleteButton = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 26,
        height: 26,
        background: '#4b4b4b',
        borderRadius: '50%',
        zIndex: 2,
        position: 'absolute',
        bottom: 8,
        right: 8,
        '&:hover': {
            background: '#4b4b4b'
        }
    }
}));

const FileList = () => {
    const { isSmall } = useViewSize();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [listValue, setListValue] = React.useState('최근 등록일 순');
    const [deleteBtn, setDeleteBtn] = React.useState(false);
    const [selectImage, setSelectImage] = React.useState(1);
    const imageList = [
        { number: 1, src: TestPDF },
        { number: 2, src: TestPDF },
        { number: 3, src: TestPDF }
    ];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickList = (value) => {
        setListValue(value);
        setAnchorEl(null);
    };

    const handleClickImage = (value) => {
        setSelectImage(value);
    };

    const handleClickDeleteDialog = () => {
        setDeleteBtn(true);
    };

    const handleCloseDeleteDialog = () => {
        setDeleteBtn(false);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <ListBox sx={{ display: isSmall ? 'none' : '' }}>
            <ButtonStyle onClick={handleClick} disableRipple>
                <Typography>{listValue}</Typography>
                <ButtonArrowIcon />
            </ButtonStyle>
            <PopoverBox
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <MenuList>
                    <MenuItem onClick={() => handleClickList('최근 등록일순')}>최근 등록일 순</MenuItem>
                    <MenuItem onClick={() => handleClickList('페이지 번호순')}>페이지 번호 순</MenuItem>
                </MenuList>
            </PopoverBox>

            <ListInBox>
                {imageList.map((list, i) => (
                    <ImageBox key={i}>
                        <ImageBoxIn onClick={() => handleClickImage(list.number)} select={selectImage === list.number}>
                            <img src={list.src} alt={'pdf'} />
                            {selectImage === list.number && (
                                <DeleteButton onClick={handleClickDeleteDialog} disableRipple>
                                    <TrashIcon />
                                </DeleteButton>
                            )}
                        </ImageBoxIn>
                        <NumberText select={selectImage === list.number}>{list.number}</NumberText>
                    </ImageBox>
                ))}
            </ListInBox>

            <CommonDialog
                open={deleteBtn}
                title={''}
                message={<Typography>이미지를 삭제하시겠습니까?</Typography>}
                onClose={handleCloseDeleteDialog}
                btnClick1={handleCloseDeleteDialog}
            />
        </ListBox>
    );
};

export default FileList;
