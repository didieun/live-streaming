import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import { ButtonStyle, Flex, FlexColumnCenter, IconButtonStyle } from '../../common/styled/CommonStyle';
import { ReactComponent as SmallArrowIcon } from '../../../../assets/images/SmallArrowIcon.svg';
import { ReactComponent as FolderIcon } from '../../../../assets/images/FolderDefaultIcon.svg';
import { ReactComponent as AddFolderIcon } from '../../../../assets/images/AddFolderIcon.svg';
import { ReactComponent as DotsThreeOutlineVerticalIcon } from '../../../../assets/images/DotsThreeOutlineVerticalIcon.svg';
import { ReactComponent as SnackbarSuccessIcon } from '../../../../assets/images/SnackbarSuccessIcon.svg';
import TestPDF from '../../../../assets/images/TestPDF.png';
import CommonDialog from '../../common/CommonDialog';
import CommonTextField from '../../common/CommonTextField';
import CommonSnackbar from '../../common/CommonSnackbar';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    margin: '0',
    boxSizing: 'border-box'
}));

const OptionBox = styled(Flex)(({ theme }) => ({
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
    gap: 8,
    padding: '0 15px',
    margin: '14px 0 30px',
    backgroundColor: '#F3F6FA',
    border: '0 solid #D5D4DC',
    borderWidth: '1px 0',
    boxSizing: 'border-box',
    '& .MuiTypography-h5': {
        position: 'relative',
        marginLeft: 8,
        paddingLeft: 8,
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#737373',
        lineHeight: 1.75,
        overflow: 'visible',
        '&:after': {
            content: '"|"',
            position: 'absolute',
            left: -8,
            top: 0,
            color: '#737373',
            fontWeight: 300
        }
    }
}));

const ControlButton = styled(ButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 'auto!important',
        fontSize: '1.125rem',
        fontWeight: 400,
        color: '#737373',
        padding: '0!important',
        '& svg': {
            marginRight: 8
        },
        '&:hover': {
            background: 'transparent'
        }
    }
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'grid',
    justifyItems: 'start',
    alignItems: 'start',
    gridTemplateColumns: 'repeat(auto-fit, minmax(174px, 174px))',
    gap: 40,
    boxSizing: 'border-box'
}));

const FolderStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    '& > div': {
        backgroundColor: '#fff',
        gap: 8,
        boxSizing: 'border-box'
    },
    '& > .MuiIconButton-root': {
        width: 24,
        height: 24
    }
}));

const FolderImgStyle = styled(Button)(({ theme }) => ({
    width: 150,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D5D4DC',
    padding: 0,
    objectFit: 'contain',
    '&:hover': {
        backgroundColor: '#E4F1FF',
        border: '1px solid #D5D4DC'
    },
    '&.Mui-disabled': {
        background: '#DAE1E9',
        border: '1px solid #DAE1E9',
        '& p': {
            color: '#979DA4'
        },
        '& .arrow-clockwise': {
            fill: '#979DA4'
        }
    },
    '& img': {
        width: '100%',
        height: '100%'
    }
}));

const NewFolderImgStyle = styled(FolderImgStyle)(({ theme }) => ({
    borderStyle: 'dashed',
    '&:hover': {
        borderStyle: 'dashed'
    }
}));

const FolderTitleStyle = styled(Typography)(({ theme, isLg }) => ({
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#333',
    lineHeight: '14px',
    display: '-webkit-box',
    wordBreak: 'break-all',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'normal',
    WebkitLineClamp: 1,
    overflow: 'hidden'
}));

const FolderCaption = styled(Typography)(({ theme, isLg }) => ({
    fontSize: '0.813rem',
    fontWeight: 500,
    color: '#3190FF',
    marginTop: -2,
    lineHeight: '14px'
}));

const MenuStyle = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        padding: '8px 3px',
        border: '0 none',
        borderRadius: 4,
        boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)'
    }
}));

const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
    '&.MuiMenuItem-root': {
        width: '100%',
        minWidth: 114,
        height: 32,
        fontSize: '0.813rem',
        borderRadius: 4,
        padding: '0 12px',
        boxSizing: 'border-box',
        '&:hover': {
            background: '#f5f6fa'
        },
        '&.Mui-selected': {
            background: '#F5F6FA',
            fontWeight: 400
        }
    }
}));

const TextFieldStyle = styled(Box)(({ theme }) => ({
    '& .MuiInputBase-root': {
        minHeight: '36px !important',
        height: '36px !important',
        padding: '6px 12px !important',
        '& input': {
            fontSize: '0.875rem !important'
        }
    }
}));

const DialogText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        boxSizing: 'border-box',
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: 14
    }
}));

const DialogTextFieldBox = styled(Box)(({ theme }) => ({
    '& .MuiFormControl-root': {
        marginRight: '0 !important'
    }
}));

function MaterialsComponent(props) {
    const { isLg, isHd, isSd, isMSmall } = useViewSize();
    const [addFolder, setAddFolder] = React.useState(false);
    const [changeName, setChangeName] = React.useState(false);
    const [snackbar, setSnackbar] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const menuList = [
        { text: '미리보기' },
        { text: '다운로드' },
        { text: '이름바꾸기' },
        { text: '공유 URL 복사' },
        { text: '일반 인쇄' },
        { text: '삭제' }
    ];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickAddFolder = () => {
        setAddFolder(true);
    };

    const handleCloseDialog = () => {
        setAddFolder(false);
    };

    const handleClickSnackbar = () => {
        setSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar(false);
    };

    return (
        <Root isLg={isLg}>
            <OptionBox>
                <ControlButton>
                    <SmallArrowIcon /> 이전
                </ControlButton>
                <Typography variant={'h5'}>새폴더</Typography>
            </OptionBox>
            <ContentBox>
                <FolderStyle onClick={handleClickAddFolder}>
                    <FlexColumnCenter>
                        <NewFolderImgStyle>
                            <AddFolderIcon />
                        </NewFolderImgStyle>
                        <FolderTitleStyle>폴더생성</FolderTitleStyle>
                    </FlexColumnCenter>
                </FolderStyle>
                <FolderStyle>
                    <FlexColumnCenter>
                        <FolderImgStyle>
                            <FolderIcon />
                        </FolderImgStyle>
                        {changeName ? (
                            <TextFieldStyle>
                                <CommonTextField placeholder={''} width={'100%'} />
                            </TextFieldStyle>
                        ) : (
                            <FolderTitleStyle>폴더생성</FolderTitleStyle>
                        )}

                        <FolderCaption>2개의 항목</FolderCaption>
                    </FlexColumnCenter>
                    <IconButtonStyle onClick={handleClick}>
                        <DotsThreeOutlineVerticalIcon />
                    </IconButtonStyle>
                </FolderStyle>
                <FolderStyle>
                    <FlexColumnCenter>
                        <FolderImgStyle>
                            <img src={TestPDF} alt={''} />
                        </FolderImgStyle>

                        {changeName ? (
                            <TextFieldStyle>
                                <CommonTextField placeholder={''} width={'100%'} />
                            </TextFieldStyle>
                        ) : (
                            <FolderTitleStyle>미술 수업자료.mp4</FolderTitleStyle>
                        )}
                    </FlexColumnCenter>
                    <IconButtonStyle onClick={handleClick}>
                        <DotsThreeOutlineVerticalIcon />
                    </IconButtonStyle>
                    <MenuStyle anchorEl={anchorEl} open={open} onClose={handleClose}>
                        {menuList.map((list, i) => (
                            <MenuItemStyle
                                key={i}
                                onClick={list.text === '공유 URL 복사' ? handleClickSnackbar : handleClose}
                                disableRipple
                                sx={{ color: list.text == '삭제' ? '#FF5E57!important' : '#333' }}
                            >
                                {list.text}
                            </MenuItemStyle>
                        ))}
                    </MenuStyle>
                </FolderStyle>
            </ContentBox>

            <CommonDialog
                open={addFolder}
                title={'폴더 생성'}
                children={
                    <FlexColumnCenter>
                        <DialogText>폴더 이름을 입력해 주세요.</DialogText>
                        <DialogTextFieldBox>
                            <CommonTextField placeholder={'폴더 이름'} width={'305px'} />
                        </DialogTextFieldBox>
                    </FlexColumnCenter>
                }
                btnText2={'만들기'}
                onClose={handleCloseDialog}
                btnClick1={handleCloseDialog}
            />

            <CommonDialog open={false} title={'알림'} message={<Typography>‘폴더명’ 폴더를 삭제하시겠습니까?</Typography>} />
            <CommonDialog open={false} title={'알림'} message={<Typography>‘파일명’ 파일을 삭제하시겠습니까?</Typography>} />

            <CommonSnackbar
                open={snackbar}
                onClose={handleCloseSnackbar}
                icon={<SnackbarSuccessIcon />}
                message={'URL이 클립보드에 복사되었습니다.'}
            />
        </Root>
    );
}

export default MaterialsComponent;
