import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Flex, FlexColumn, IconButtonStyle } from '../common/styled/CommonStyle';
import { ReactComponent as FileIcon } from '../../../assets/images/FileIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/images/DeleteIcon.svg';
import TestImage from '../../../assets/images/TestImage.png';

const Container = styled(Box)(({ theme }) => ({}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#737373',
        fontWeight: 500,
        marginBottom: 14,
        textAlign: 'left',
        '& span': {
            color: '#3190FF',
            fontWeight: 600
        }
    }
}));

const ImageAddBox = styled(Box)(({ theme }) => ({
    width: 760,
    borderTop: '1px solid #D5D4DC',
    borderBottom: '1px solid #D5D4DC'
}));

const LeftBox = styled(Box)(({ theme }) => ({
    width: 140,
    minHeight: 120,
    background: '#F3F6FA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
        fontSize: '1rem',
        color: '#333',
        fontWeight: 500
    }
}));

const RightBox = styled(FlexColumn)(({ theme }) => ({
    width: 'calc(100% - 140px)',
    height: 'auto',
    background: '#fff',
    padding: '19px 15px',
    boxSizing: 'border-box'
}));

const ImageListBox = styled(RightBox)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 110px)',
    gap: '10px 25px',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '19px 0 19px 25px',
    boxSizing: 'border-box'
}));

const ImageList = styled(Box)(({ theme }) => ({
    height: 140,
    background: '#F5F6FA',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
        fontSize: '0.875rem',
        color: '#2F3640',
        fontWeight: 400,
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset'
    },
    '& img': {
        width: '100%',
        objectFit: 'cover'
    }
}));

const DeleteBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 6,
    right: 6,
    '& button': {
        width: 24,
        height: 24
    }
}));

const FileButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 126,
        height: 46,
        padding: '0 20px',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1976D2',
        boxSizing: 'border-box',
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 500,
        '&:hover': {
            background: '#1976D2'
        },
        '&.Mui-disabled': {
            background: '#DAE1E9',
            color: '#979DA4',
            '& path': {
                fill: '#979DA4'
            }
        }
    }
}));

const FlexBorderTopBottom = styled(Flex)(({ theme }) => ({
    borderTop: '1px solid #D5D4DC',
    borderBottom: '1px solid #D5D4DC'
}));

const EssentialText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: '0.875rem',
        color: '#FF5E57',
        fontWeight: 400,
        marginTop: 10,
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        textAlign: 'left'
    }
}));

const EmptyText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: '0.875rem',
        color: '#737373',
        fontWeight: 400,
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        textAlign: 'left'
    }
}));

const StyledInput = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root': {
        width: '100%'
    },
    '& .MuiInputBase-root': {
        width: '100%',
        height: 38,
        background: '#FFF5E0',
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '0 8px !important',
        '& input': {
            padding: '0 !important',
            fontSize: '1rem',
            color: '#333',
            fontWeight: 400,
            opacity: 1,
            '&::placeholder': {
                opacity: 1
            }
        },
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0'
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '0'
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0'
            }
        }
    }
}));

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
});

function AddLearningHistoryComponent() {
    const imageList = [{ image: TestImage }, { image: '' }, { image: '' }, { image: '' }];
    return (
        <Container>
            <TitleText>
                <span>참여자명</span> 학생
            </TitleText>
            <ImageAddBox>
                <Flex>
                    <LeftBox>
                        <Typography>이미지 첨부</Typography>
                    </LeftBox>
                    <RightBox>
                        <FileButton component="label" role={undefined} tabIndex={-1} startIcon={<FileIcon />} disableRipple>
                            파일 선택
                            <VisuallyHiddenInput type="file" />
                        </FileButton>
                        <EssentialText>*최대 8개 파일 선택 가능</EssentialText>
                    </RightBox>
                </Flex>
                <FlexBorderTopBottom>
                    <LeftBox>
                        <Typography>콘텐츠 명</Typography>
                    </LeftBox>
                    <RightBox>
                        <StyledInput
                            // error
                            label=""
                            variant="outlined"
                            fullWidth
                            placeholder="콘텐츠 명 [2023-12-04 07:24]"
                        />
                        <EssentialText>*콘텐츠 명을 변경할 수 있습니다.</EssentialText>
                    </RightBox>
                </FlexBorderTopBottom>
                <Flex sx={{ alignItems: 'stretch' }}>
                    <LeftBox sx={{ minHeight: 178 }}>
                        <Typography>첨부파일</Typography>
                    </LeftBox>

                    {imageList.length <= 0 ? (
                        <RightBox>
                            <EmptyText>*첨부 파일이 여기에 표시됩니다.</EmptyText>
                        </RightBox>
                    ) : (
                        <ImageListBox>
                            {imageList.map((list, i) => (
                                <ImageList key={i}>
                                    {list.image === '' ? (
                                        <Typography>
                                            첨부 파일
                                            <br />
                                            이미지
                                        </Typography>
                                    ) : (
                                        <img src={list.image} alt={'첨부이미지'} />
                                    )}

                                    <DeleteBox>
                                        <IconButtonStyle disableRipple>
                                            <DeleteIcon />
                                        </IconButtonStyle>
                                    </DeleteBox>
                                </ImageList>
                            ))}
                        </ImageListBox>
                    )}
                </Flex>
            </ImageAddBox>
        </Container>
    );
}

export default AddLearningHistoryComponent;
