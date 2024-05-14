import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Chip,
    MenuItem,
    MenuList,
    Popover,
    Typography
} from '@mui/material';
import { Flex, FlexCenter, FlexSpace, IconButtonStyle } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import { ReactComponent as FolderIcon } from '../../../../assets/images/FolderIcon.svg';
import { ReactComponent as MoreIcon } from '../../../../assets/images/MoreIcon.svg';
import { ReactComponent as DownloadSimpleIcon } from '../../../../assets/images/DownloadSimpleIcon.svg';
import { ReactComponent as FileIcon } from '../../../../assets/images/FileIcon.svg';
import { ReactComponent as DotsThreeOutlineVertical } from '../../../../assets/images/DotsThreeOutlineVertical.svg';
// import WritingDialogComponent from '../../../../views/dialog/WritingDialogComponent';
import CommonDialog from '../../common/CommonDialog';
import PropTypes from 'prop-types';
import CommonTextField from '../../common/CommonTextField';

const BoxStyle = styled(FlexSpace)(({ theme }) => ({
    width: '100%',
    minHeight: 120,
    border: '1px solid #D5D4DC',
    background: '#fff',
    borderRadius: 8,
    padding: 30,
    boxSizing: 'border-box',
    marginBottom: 20,
    '&:last-child': {
        marginBottom: 0
    }
}));

const IconSize = styled(Box)(({ theme }) => ({
    marginRight: 20,
    '& svg': {
        width: 32,
        height: 32,
        '& path': {
            fill: '#333'
        }
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.4px',
        textAlign: 'left',
        lineHeight: 'normal'
    }
}));

const SubTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#737373',
        fontWeight: 400,
        letterSpacing: '-0.28px',
        textAlign: 'left',
        marginTop: 10,
        lineHeight: 'normal'
    }
}));

const CommonButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
        width: '100%',
        marginTop: 24,
        '& p': {
            color: '#333',
            fontSize: '0.875rem',
            fontWeight: 400,
            marginRight: 6
        },
        '&:hover': {
            backgroundColor: '#fff'
        },
        '& svg': {
            width: 20,
            height: 20
        }
    }
}));

const MoreIconButton = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 30,
        height: 30,
        marginLeft: 20,
        '& svg': {
            width: 30,
            height: 30
        }
    }
}));

const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: 123,
        boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: 4,
        background: '#fff',
        border: 0,
        '& .MuiList-root': {
            padding: 5,
            '& .MuiButtonBase-root': {
                fontSize: '0.875rem',
                height: 30,
                color: '#444343',
                fontWeight: 400,
                padding: '0 12px',
                boxSizing: 'border-box',
                '&:hover': {
                    background: '#f5f6fa',
                    borderRadius: 4
                }
            }
        }
    }
}));

const MainReferenceRoomList = (props) => {
    const { isLeader, addFile } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleteBtn, setDeleteBtn] = React.useState(null);
    const [changeName, setChangeName] = React.useState(false);
    const items = [
        {
            folder: true,
            name: 'working.fig',
            date: '2023.08.17',
            mb: '32.6',
            count: 1
        },
        { folder: false, name: '파일명', date: '2023.08.17', mb: '32.6', count: '' }
    ];

    const handleClickMore = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMore = () => {
        setAnchorEl(null);
    };

    const handleClickDeleteDialog = () => {
        setDeleteBtn(true);
    };

    const handleCloseDeleteDialog = () => {
        setDeleteBtn(false);
    };

    const handleClickChangeName = () => {
        setChangeName(true);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box>
            {addFile && (
                <BoxStyle>
                    <Flex>
                        <IconSize>
                            <FolderIcon />
                        </IconSize>
                        <CommonTextField placeholder={'제목 (최대 50자)'} width={'410px'} />
                    </Flex>
                </BoxStyle>
            )}

            {items.map((item, i) => (
                <BoxStyle key={i} sx={item.folder ? { cursor: 'pointer' } : {}}>
                    <FlexCenter sx={{ width: 'calc(100% - 165px - 14px)' }}>
                        {item.folder ? (
                            <IconSize>
                                <FolderIcon />
                            </IconSize>
                        ) : (
                            <IconSize>
                                <FileIcon />
                            </IconSize>
                        )}

                        <Box sx={{ width: 'calc(100% - 35px - 20px)' }}>
                            {changeName ? (
                                <CommonTextField placeholder={'제목 (최대 50자)'} width={'410px'} />
                            ) : (
                                <TextStyle>{item.name}</TextStyle>
                            )}

                            {item.folder ? (
                                <SubTextStyle>
                                    {item.date} | {item.mb}MB | {item.count}개
                                </SubTextStyle>
                            ) : (
                                <SubTextStyle>
                                    {item.date} | {item.mb}MB
                                </SubTextStyle>
                            )}
                        </Box>
                    </FlexCenter>

                    <FlexCenter>
                        <CommonButton
                            width={'80px'}
                            height={'32px'}
                            text={'다운로드'}
                            background={'transparent'}
                            color={'#737373'}
                            fontWeight={400}
                            fontSize={'1rem'}
                            disabled={false}
                            startIcon={<DownloadSimpleIcon style={{ width: '30px', height: '30px' }} />}
                        />
                        {isLeader && (
                            <MoreIconButton onClick={handleClickMore} disableRipple>
                                <DotsThreeOutlineVertical />
                            </MoreIconButton>
                        )}

                        <PopoverBox
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleCloseMore}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                        >
                            <MenuList>
                                <MenuItem onClick={handleClickChangeName}>이름 바꾸기</MenuItem>
                                <MenuItem onClick={handleClickDeleteDialog}>삭제</MenuItem>
                            </MenuList>
                        </PopoverBox>
                    </FlexCenter>
                </BoxStyle>
            ))}

            <CommonButtonStyle disableRipple>
                <Typography>더보기</Typography>
                <MoreIcon />
            </CommonButtonStyle>

            <CommonDialog
                open={deleteBtn}
                title={'알림'}
                message={<Typography>‘폴더명(파일명)'을 삭제 하시겠습니까?</Typography>}
                onClose={handleCloseDeleteDialog}
                btnClick1={handleCloseDeleteDialog}
            />
        </Box>
    );
};

MainReferenceRoomList.propTypes = {
    isLeader: PropTypes.bool,
    addFile: PropTypes.bool
};

export default MainReferenceRoomList;
